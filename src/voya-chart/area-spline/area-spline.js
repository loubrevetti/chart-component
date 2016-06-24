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

        chartModel.names = {};
        chartModel.data = {};
        chartModel.data.columns = [];
        chartModel.data.x = undefined;

        // Set up the x-axis for the chart.
        // This tells C3 to render the x-axis as a Time Series.
        // Each tick on the x-axis, in the Year-Month-Day format.
        chartModel.axis = {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        };

        this.dataModel.forEach(
            (item, idx, arr) => {
                let col1 = []; // Data to be displayed in the chart.
                let col2 = []; // Data to act as the chart's x-axis.

                // Column data for an individual col is supplied to C3 as an array.
                // The first item in the array, identifies the data in the col.
                // Col data identifiers should be unique.
                col1.push(item.label);
                col1.push(...item.balances);
                col2.push(`_${item.label}`);
                col2.push(...item.dates);

                // This property tells C3 which col of data will serve as the ticks along the x-axis.
                // The identified col will be excluded from the chart itself and serve only to deliniate points along the axis.
                // Default to the x-axis data, supplied in the first record.
                chartModel.data.x = (idx === 0) ? `_${item.label}` : chartModel.data.x;

                chartModel.names[item.label] = item.label;
                chartModel.data.columns.push(col1);
                chartModel.data.columns.push(col2);
            }
        );

        this.chartModel = chartModel;
    }
}