import {VoyaChart} from '../voya-chart';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';

export class Donut extends VoyaChart{
    constructor(chartProperties){
        super(chartProperties);
    }

    @property
    @nullable
    width;

    @property
    @nullable
    title;

    @property
    @nullable
    expand;

    propertyChangedCallback(prop,oldValue,newValue){
        if(oldValue === newValue) return;
        if(prop === "dataModel"){
            this.createConfig()
        }
    }
    createConfig(){

    }
}