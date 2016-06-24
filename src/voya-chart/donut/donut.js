import {VoyaChart} from '../voya-chart';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';

export class Donut extends VoyaChart{
    constructor(chartProperties){
        super(chartProperties);
        this.labels=[];
        this.eventBus.on('legenditemhover',this.showToolTip.bind(this));
        this.eventBus.on('legenditemout',this.hideToolTip.bind(this));
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
        this.chartModel.data={};
        this.chartModel.data.names={};
        this.chartModel.data.columns=data.map(function(datapoint){
            this.chartModel.data.names[datapoint[0]] = datapoint[0];
            return datapoint[1];
        }.bind(this))
    }
    getAggregateNumber(id){
        if(this.getData(id).length==0)return null;
        let dataPoint = this.getData(id),amount=0;
        dataPoint[0].values.forEach(function(obj){
            amount = amount+obj.value;
        })
        return amount;
    }
    getPercentage(id){
        let dataPoints = this.getData(), totalAmount=0;
        dataPoints.forEach(function(dataPoint){
            totalAmount+=this.getAggregateNumber(dataPoint.id);
        }.bind(this))
        return parseFloat((this.getAggregateNumber(id)/totalAmount));
    }
    showToolTip(toolTipId){
        if(!this.getAggregateNumber(toolTipId))return;
        let selector=toolTipId.replace(/ /g,"-");
        let toolTipData={id:toolTipId, name:toolTipId, value:this.getAggregateNumber(toolTipId), ratio:this.getPercentage(toolTipId)}
        this.setToolTip(toolTipData,d3.select(".c3-arc-"+selector)[0][0]);
    }
    hideToolTip(toolTipId){
        this.removeToolTip();
    }
}