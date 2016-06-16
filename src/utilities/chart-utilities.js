import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {Pie} from '../voya-chart/pie/pie'
import {TimeSeries} from '../voya-chart/time-series/time-series'
export function chartUtilities(){
    const charts = {
        "_PIE":Pie,
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
