import {VoyaChart} from '../voya-chart';
import {property, nullable} from 'voya-component-utils/decorators/property-decorators';

export class AreaSpline extends VoyaChart {
    constructor(chartProperties) {
        super(chartProperties);
        this.labels = [];
    }

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

        chartModel.axis = {};
        chartModel.names = {};
        chartModel.data = {};
        chartModel.data.columns = [];

        // TODO: ADD X-AXIS & Y-AXIS PROPERTIES, SO USERS CAN CUSTOMIZE THE AXIS.
        // TODO: ADD TEST FOR X/Y AXIS PROPERTY VALUES.
        // TODO: ONLY RUN THIS CODE IF THE PROPERTY IS PRESENT & HAS VALUE.
        //
        // Set up the x-axis for the chart.
        // This tells C3 to render the x-axis as a Time Series.
        // Each tick on the x-axis, in the Year-Month-Day format.
        chartModel.axis.x = {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        };

        // TODO: FIGURE OUT HOW TO TURN OFF ALL DATA EXCEPT THE FIRST RECORD (3-MONTH) ON PAGE-LOAD
        // TODO: ADD A PROPERTY TO ENABLE/DISABLE DEFAULTING TO JUST FIRST RECORD????

        // TODO: FIGURE OUT HOW TO SHOW ONE DATA SET AT A TIME.
        // TODO: MAYBE JUST EMIT AN EVENT AND LET MAIN APPLICATION DEAL WITH IT?
        // TODO: MAYBE ADD A PROPERTY TO TURN THIS BEHAVIOR ON/OFF???
        // TODO: SOME IMPLEMENTATIONS MAY WANT TO SHOW MULTIPLE SETS OF DATA AT A TIME.

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

                // If custom x/y-axis data has been supplied...
                if (item.xAxis || item.yAxis) {
                    let xAxisData = []; // Data to act as the chart's x-axis.
                    let yAxisData = []; // Data to act as the chart's y-axis.
                    let xPrefix = 'x_';
                    let yPrefix = 'Y_';

                    // This property tells C3 which col of data will serve as the ticks along the x/y-axis.
                    // The identified col will be excluded from the chart itself and serve only to deliniate points along the axis.
                    // Default to the x/y-axis data, supplied in the first record.
                    chartModel.data.x = ((idx === 0) && (item.xAxis)) ? `${xPrefix}${item.label}` : chartModel.data.x;
                    chartModel.data.y = ((idx === 0) && (item.yAxis)) ? `${yPrefix}${item.label}` : chartModel.data.y;

                    if (item.xAxis) {
                        xAxisData.push(`${xPrefix}${item.label}`);
                        xAxisData.push(...item.xAxis);
                        chartModel.data.columns.push(xAxisData);
                    }

                    if (item.yAxis) {
                        yAxisData.push(`${yPrefix}${item.label}`);
                        yAxisData.push(...item.yAxis);
                        chartModel.data.columns.push(yAxisData);
                    }
                }
            }
        );

        this.chartModel = chartModel;
    }
}