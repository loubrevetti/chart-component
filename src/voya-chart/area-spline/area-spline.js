import {VoyaChart} from '../voya-chart';
import {property, nullable} from 'voya-component-utils/decorators/property-decorators';

export class AreaSpline extends VoyaChart {

    /**
     * Constructor
     * @param {Object} chartProperties
     */
    constructor(chartProperties) {
        super(chartProperties);
        this.labels = [];
    }

    // Set to a C3 chart type, in order to customize the ticks along the x-axis.
    // See:  http://c3js.org/examples.html, for available chart types.
    @property
    @nullable
    xaxistype;

    // Format String for a "timeseries" x-axis.
    // C3 API Ref:  http://c3js.org/reference.html#axis-x-tick-format
    @property
    @nullable
    xaxisformat;

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

        chartModel.axis = {};         // Used to customize the x/y axis.
        chartModel.names = {};        // Used to build the chart Legend.
        chartModel.data = {};         // Used to describe the chart's data.
        chartModel.data.columns = []; // Data Columns hold data to display, as well as data for use along the x/y axis.
        chartModel.data.hide = [];    // List of Columns that should be initially hidden from view.
        chartModel.data.xs = {};      // Associate custom x-axis data with the col data it describes.
        
        //

        // Are the x-axis ticks being displayed in anything other than standard Area Spline format?
        if ((this.xaxistype) && (this.xaxistype !== 'area-spline')) {
            chartModel.axis.x = {
                type: this.xaxistype
            };

            // Is the x-axis being set up as a Time Series specifically?
            // If so, apply any supplied formatting.
            if ((this.xaxistype === 'timeseries') && this.xaxisformat) {
                chartModel.axis.x.tick = {
                    format: this.xaxisformat
                }
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
}