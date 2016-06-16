import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {chartUtilities} from './utilities/chart-utilities';
let _utils = new WeakMap();
export class VoyaChart extends (HTMLElement || Element){
    createdCallback(){
        _utils.set(this,chartUtilities())
        if(this.attributes.type) this.getChartInstance();
    }

    @property
    chart

    attributeCallback(prop, oldValue, newValue){
        if(oldValue === newValue) return;
        if(prop === "type") this.getChartInstance();
    }

    getChartInstance(){
        this.chart = _utils.get(this).getChart(this.attributes);
        this.chart.createChart();
        this.appendChild(this.chart.element);
        console.dir(this)
    }
}
document.registerElement('voya-chart', VoyaChart);