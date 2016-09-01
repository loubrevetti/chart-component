import {VoyaChart} from '../voya-chart';
import {property, nullable} from 'voya-component-utils/decorators/property-decorators';
import {format} from '../../utilities/data-formats';
let _properties = new WeakMap();
export class AreaSpline extends VoyaChart {

    /**
     * Constructor
     * @param {Object} chartProperties
     */
    constructor(chartProperties) {
        super(chartProperties);
        _properties.set(this,{nameMapping:{},xAxis:[],data:[],columns:[]})
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
            if (Array.isArray(this.dataModel) && this.dataModel.length > 0) {
                this.normalizeData(this.dataModel);
                this.buildChartModel();
                this.createChart();
            } else {
                console.log('Area-Spline Chart::propertyChangedCallback() - dataModel Array is empty or not an Array.');
            }
        }

        if (prop === 'data') {
            if (typeof newValue === 'string' && newValue.length > 0) {
                this.dataModel = JSON.parse(newValue);
            }
        }

        if (prop === 'apiUrl') {
            if (typeof newValue === 'string' && newValue.length > 0) {
                this.buildServices();
                this.assembleData();
            }
        }
    }

    /**
     * Using the data supplied by the server, construct the ChartModel Object.
     * The ChartModel Object will ultimately supply the data to C3 in order to construct the chart.
     */
    normalizeData(dataModel){
        dataModel.map(function(data){
            Object.keys(data).forEach(function(property){
                if(Array.isArray(data[property])) {
                    this.normalizeData(data[property]);
                    return;
                }else{
                    if(property!=="groupBy" && typeof(data[property]) === "string" && data[property].match(/[a-z]/i)) this.addNames(data[property]);
                    if(typeof(data[property]) === "number") this.addValues(data[property])
                    if(typeof(data[property]) === "string" && data[property].match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) this.addDates(data[property]);
                }
            }.bind(this))
        }.bind(this))
        this.addToColumnsArray();
    }
    addDates(date){
        _properties.get(this).xAxis.push(new Date(date))
    }
    addValues(value){
        _properties.get(this).data.push(value)
    }
    addNames(name){
        _properties.get(this).data.push(name);
        _properties.get(this).xAxis.push("x_"+name);
        _properties.get(this).nameMapping[name] = "x_"+name;
    }
    addToColumnsArray(){
        if(_properties.get(this).data.length===0) return;
        _properties.get(this).columns.push(_properties.get(this).data);
        _properties.get(this).columns.push(_properties.get(this).xAxis);
        this.resetDataPoint()
    }
    resetDataPoint(){
        _properties.get(this).data = [];
        _properties.get(this).xAxis = [];
    }
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
            columns: _properties.get(this).columns,
            hide: [],
            xs: _properties.get(this).nameMapping
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
            format:{
                value:function(value){
                    return (this.dataFormat)? format.getFormat()[this.dataFormat](value) : value;
                }.bind(this)
            }
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
        this.chartModel = chartModel;
        console.log(JSON.stringify(this.chartModel))
    }

    /**
     * Responsive Chart
     * @param e
     */
    responsiveChart(e) {
        console.log('area spline ' + e);
    }
}