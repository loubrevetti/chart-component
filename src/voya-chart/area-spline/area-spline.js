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
            this.assembleChartModel(this.getDataArray());
            this.createChart();
        }
    }

    /**
     * TODO: Is all of this work necessary????????
     *
     * @returns {Array}
     */
    getDataArray() {
        let dataMappings = new Map();

        // Build a Map from the data supplied by the server.
        // Each Record contained in the DataModel is an Object, all of which contain the same properties.
        // Use the properties of first Record to set the keys in the Map.
        // The value of each item in the Map, will be an Array, whose first item will also be the key.
        this.dataModel.forEach(
            (record, idx) => {
                Object.keys(record).forEach(
                    (key) => {
                        if (idx === 0) {
                            dataMappings.set(key, [key]);
                        }

                        dataMappings.get(key).push(record[key]);
                    }
                );
            }
        );

        // Convert the Map to an Array.
        return Array.from(dataMappings);
    }

    /**
     *
     * @param data
     */
    assembleChartModel(data) {
        this.chartModel.names = {
            '3 mo': '3 mo',
            '6 mo': '6 mo',
            '1 yr': '1 yr',
            '2 yr': '2 yr'
        };

        this.chartModel.columns = [
            ['3 mo', 10000, 20000, 30000],
            ['6 mo', 10000, 20000, 30000, 25000, 35000, 30000],
            ['1 yr', 10000, 20000, 30000, 25000, 35000, 30000, 40000, 50000, 40000, 45000, 60000, 55000],
            ['2 yr', 10000, 20000, 30000, 25000, 35000, 30000, 40000, 50000, 40000, 45000, 60000, 55000, 60000, 70000, 80000, 75000, 75000, 80000, 85000, 90000, 95000, 90000, 100000, 95000]
        ];

        let i = 0;
    }
}