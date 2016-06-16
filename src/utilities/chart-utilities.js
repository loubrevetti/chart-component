import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {Donut} from '../voya-chart/donut/donut'
import {TimeSeries} from '../voya-chart/time-series/time-series'
export function chartUtilities(){
    const charts = {
        "_DONUT":Donut,
        "_TIMESERIES":TimeSeries
    }
    function getChart(chartProperties){
        let chart = new charts["_"+chartProperties.type.value.toUpperCase()](chartProperties)
        return chart;
    }

    return {
        getChart:getChart
    }
}
