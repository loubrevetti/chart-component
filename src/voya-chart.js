import {NativeHTMLElement} from 'voya-component-utils';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {Donut} from './voya-chart/donut/donut';
import {AreaSpline} from './voya-chart/area-spline/area-spline';
let _chartInstances = new WeakMap();

export class VoyaChart extends NativeHTMLElement {
    createdCallback(){
        let chartInstances={"_DONUT": Donut, "_AREASPLINE": AreaSpline};
        _chartInstances.set(this,chartInstances);
        if(this.attributes.type) this.getChart();
    }
    @property
    api

    propertyChangedCallback(prop,oldValue,newValue) {
        if(oldValue === newValue)return;
        if(prop === 'api'){
            this.api.eventBus.on('rendered',this.renderChart.bind(this))
        }
    }

    attributeCallback(prop, oldValue, newValue){
        if(oldValue === newValue) return;
        if(prop === "type") this.getChart();
    }

    getChart(){
        let instance  = (_chartInstances.get(this)["_" + this.attributes.type.value.toUpperCase()])
        this.api= new instance(this.attributes)
    }

    renderChart(){
        this.appendChild(this.api.element);
    }
}
document.registerElement('voya-chart', VoyaChart);