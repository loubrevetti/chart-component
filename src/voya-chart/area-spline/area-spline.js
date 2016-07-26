import {VoyaChart} from '../voya-chart';
import {property, nullable} from 'voya-component-utils/decorators/property-decorators';

export class AreaSpline extends VoyaChart {

    /**
     * Constructor
     * @param {Object} chartProperties
     */
    constructor(chartProperties) {
        super(chartProperties);
        this.eventBus.on('converttomobile', this.responsiveChart.bind(this));
    }

    // Set to a C3 chart type, in order to customize the ticks along the x-axis.
    // See:  http://c3js.org/examples.html, for available chart types.
    @property
    @nullable
    xAxisType;

    // Format String for a "timeseries" x-axis.
    // C3 API Ref:  http://c3js.org/reference.html#axis-x-tick-format
    @property
    @nullable
    xAxisFormat;

    @property({type: 'boolean'})
    @nullable
    showAllData;

    // Hide/Show y-axis
    @property({type: 'boolean'})
    @nullable
    hideYAxis;

    // Hide/Show x-axis
    @property({type: 'boolean'})
    @nullable
    hideXAxis;

    // Max number of Labels to display along the x-axis.
    // C3 will automatically choose logically-spaced labels from those available.
    @property
    @nullable
    maxXLabels;

    // Group vertically aligned data points into a single ToolTip.
    @property({type: 'boolean'})
    @nullable
    groupTooltip;

    // Sets the radius of rendered data-points on the chart.
    @property
    @nullable
    pointRadius;

    // JSON String.  Array of HEX color values, 1 for each set of data.
    // Customizes the colors used to represent each data set on the chart.
    @property
    @nullable
    chartColors;

    /**
     * Handle property change.
     * @Override
     * @param {string} prop
     * @param {*} oldValue
     * @param {*} newValue
     */
    propertyChangedCallback(prop, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        if (prop === "dataModel") {
            this.buildChartModel();
            this.createChart();
        }
    }

    /**
     * Using the data supplied by the server, construct the ChartModel Object.
     * The ChartModel Object will ultimately supply the data to C3 in order to construct the chart.
     */
    buildChartModel() {
        let chartModel = {};
        let showAllDataSets;

        // If the user is on a mobile device, force ShowAllDataSets to FALSE.
        // Otherwise, use whatever value the show-all-data HTML attribute is set to.
        if (this.mobileWidth >= window.screen.width) {
            showAllDataSets = false;

        } else {
            if (typeof this.showAllData === 'boolean') {
                showAllDataSets = this.showAllData;
            } else if (typeof this.showAllData === 'string') {
                showAllDataSets = (this.showAllData.toLowerCase() === 'true');
            } else {
                showAllDataSets = true;
            }
        }

        // Chart axis configuration.
        // See:  http://c3js.org/reference.html#axis-rotated
        chartModel.axis = {
            x: {
                tick: {
                    culling: {}
                }
            },
            y: {}
        };

        // Chart data configuration
        // See:  http://c3js.org/reference.html#data-url
        chartModel.data = {
            columns: [],
            hide: [],
            xs: {}
        };

        // Custom chart colors
        if (typeof this.chartColors === 'string') {
            try {
                let colors = JSON.parse(this.chartColors);

                if (Array.isArray(colors) && colors.length > 0) {
                    chartModel.color = {
                        pattern: [...colors]
                    };
                }
            } catch(err) {
                console.log(`ERROR: ${err.message}. Unable to apply custom chart colors. Using defaults.`);
            }
        }

        // Chart data-point configuration
        if (this.pointRadius) {
            let pr = Number.parseInt(this.pointRadius, 10);

            if (!Number.isNaN(pr)) {
                chartModel.point = {
                    r: pr // Point radius
                };
            }
        }

        // Chart Tooltip configuration
        // See:  http://c3js.org/reference.html#tooltip-show
        chartModel.tooltip = {
            // TODO: Define function to return custom ToolTip HTML?
            // contents: (data, defaultTitleFormat, defaultValueFormat, color) => {}
        };

        // Binds each item in the legend to a particular column of data.
        chartModel.names = {};

        // Group vertically aligned data points into a single ToolTip.
        if (!this.groupTooltip) {
            chartModel.tooltip.grouped = false;
        }

        // Hide the y-axis.
        if (this.hideYAxis) {
            chartModel.axis.y.show = false;
        }

        // Hide the x-axis.
        if (this.hideXAxis) {
            chartModel.axis.x.show = false;
        }

        // Cull the labels along the x-axis.
        if (!Number.isNaN(this.maxXLabels)) {
            chartModel.axis.x.tick.culling = {
                max: Number.parseInt(this.maxXLabels, 10)
            }
        }

        // Are the x-axis ticks being displayed in anything other than standard Area Spline format?
        if ((this.xAxisType) && (this.xAxisType !== 'area-spline')) {
            chartModel.axis.x.type = this.xAxisType;

            // Is the x-axis being set up as a Time Series specifically?
            // If so, apply any supplied formatting.
            if ((this.xAxisType === 'timeseries') && this.xAxisFormat) {
                chartModel.axis.x.tick.format = this.xAxisFormat;
            }
        }
        
        this.dataModel.forEach(
            (item, idx, arr) => {
                let chartData = []; // Data, to be displayed in the chart.

                // Store the names of each set of data to be displayed in the chart.
                chartModel.names[item.label] = item.label;

                // Column data for an individual col is supplied to C3 as an array.
                // The first item in the array, identifies the data in the col.
                // Col data identifiers should be unique.
                chartData.push(item.label);
                chartData.push(...item.data);
                chartModel.data.columns.push(chartData);

                // Should All Data be displayed?  If not, show only the first data set on page-load.
                if ((!showAllDataSets) && (idx > 0)) {
                    chartModel.data.hide.push(item.label);
                }

                // If custom x-axis data has been supplied...
                if (item.xAxis) {
                    let xAxisData = []; // Data to act as the chart's x-axis.
                    let xPrefix = 'x_';

                    // This property tells C3 which cols of data will serve as the ticks along the x-axis.
                    // The identified cols will be excluded from the chart itself and serve only to deliniate points along the axis.
                    // Format = { Col data to display : Col data to use as it's x-axis }
                    chartModel.data.xs[item.label] = `${xPrefix}${item.label}`;

                    xAxisData.push(`${xPrefix}${item.label}`);
                    xAxisData.push(...item.xAxis);
                    chartModel.data.columns.push(xAxisData);
                }
            }
        );

        this.chartModel = chartModel;
    }

    /**
     * Responsive Chart
     * @param e
     */
    responsiveChart(e) {
        console.log('area spline ' + e);
    }
}