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
        chartModel.columns = [];

        this.dataModel.forEach(
            (item, idx, arr) => {
                let col = [];

                col.push(item.label);
                col.push(...item.data);

                chartModel.names[item.label] = item.label;
                chartModel.columns.push(col);
            }
        );

        this.chartModel = chartModel;
    }
}