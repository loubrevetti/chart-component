//8/19/2016 JPRAY - temporarily commenting out all of the privatemember/protectedmember decorators.
// There were blocking errors being thrown in FF (non-blocking in Chrome) because 
// getCallerName() was returning '@' within MyVoya-UI charts.  
// Also, relying on throwing an error within a try block is too hackish and bad for 
// performance to use as a standard way of achieving private/protected properties

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