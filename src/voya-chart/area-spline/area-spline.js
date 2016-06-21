import {VoyaChart} from '../voya-chart';
import {property, nullable} from 'voya-component-utils/decorators/property-decorators';

export class AreaSpline extends VoyaChart {
    constructor(chartProperties) {
        super(chartProperties);
        this.labels = [];
    }

    /**
     * 
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
            this.createConfig();
        }
    }

    /**
     *
     */
    createConfig() {
        this.assembleChartModel(this.dissembleRawData());
        this.createChart();
    }

    /**
     *
     * @returns {Array}
     */
    dissembleRawData() {
        let dataMappings = new Map();

        this.dataModel.forEach(function(record,idx) {
            Object.keys(record).forEach(function(key) {
                if (idx === 0) {
                    dataMappings.set(key,[key]);
                }

                dataMappings.get(key).push(record[key]);
            });
        });

        return Array.from(dataMappings);
    }

    /**
     *
     * @param data
     */
    assembleChartModel(data) {
        this.chartModel.names = {};

        this.chartModel.columns = data.map(function(datapoint) {
            this.chartModel.names[datapoint[0]] = datapoint[0];
            return datapoint[1];
        }.bind(this));
    }
}