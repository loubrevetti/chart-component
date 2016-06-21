import {VoyaChart} from '../voya-chart';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';

export class Donut extends VoyaChart{
    constructor(chartProperties){
        super(chartProperties);
        this.labels=[];
        this.eventBus.on('rendered',this.newLegend.bind(this));
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
        this.assembleChartModel(this.desemmbleRawData());
        this.createChart();
    }

    desemmbleRawData(){
        let dataMappings = new Map();
        this.dataModel.forEach(function(record,idx){
            Object.keys(record).forEach(function(key){
                if(idx === 0) dataMappings.set(key,[key]);
                dataMappings.get(key).push(record[key]);
            })
        })
        return Array.from(dataMappings);
    }
    assembleChartModel(data){
        this.chartModel.names={}
        this.chartModel.columns=data.map(function(datapoint){
            this.chartModel.names[datapoint[0]] = datapoint[0];
            return datapoint[1];
        }.bind(this))
    }
    newLegend(){
        let names= this.getNames(), dataPoints = this.getData(), totalAmount=0,labels={};
        dataPoints.forEach(function(dataPoint){
            let amount=0
            dataPoint.values.forEach(function(obj){
                amount = amount+obj.value;
            })
            totalAmount+=amount;
            labels[dataPoint.id]=amount
        })

        Object.keys(labels).forEach(function(label){
            let percentage = parseFloat((labels[label]/totalAmount)*100).toFixed(1);
            names[label] = percentage+"% "+names[label];
        })
        this.setNames(names);
    }
}