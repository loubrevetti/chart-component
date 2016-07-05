import {VoyaChart} from '../voya-chart';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {privatemember, protectedmember} from 'voya-component-utils/decorators/method-decorators';

export class Donut extends VoyaChart{
    constructor(chartProperties){
        super(chartProperties);
        this.labels=[];
        this.eventBus.on('legenditemhover',this.showToolTip.bind(this));
        this.eventBus.on('legenditemout',this.hideToolTip.bind(this));
        this.eventBus.on('converttomobile',this.responsiveChart.bind(this));
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
            this.createConfig();
        }
    }
    @privatemember
    createConfig(){
        this.assembleChartModel(this.desemmbleRawData());
        this.createChart();
    }
    @privatemember
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
    @privatemember
    assembleChartModel(data){
        this.chartModel.data={names:{}};
        this.chartModel.data.columns=data.map(function(datapoint){
            this.chartModel.data.names[datapoint[0]] = datapoint[0];
            return datapoint[1];
        }.bind(this))
    }
    @privatemember
    getAggregateNumber(id){
        if(this.getVisibleData(id).length==0)return null;
        let amount=0;
        this.getVisibleData(id)[0].values.forEach(function(obj){
            amount = amount+obj.value;
        })
        return amount;
    }
    responsiveChart(e){
        if(this.hasChartRendered()) this.destroy();
        this.legend.position = (e==="mobile")? "bottom" : "right";
        this.createChart();
    }
    getPercentage(id){
        let totalAmount=0;
        this.getVisibleData().forEach(function(dataPoint){
            totalAmount+=this.getAggregateNumber(dataPoint.id);
        }.bind(this));
        return parseFloat((this.getAggregateNumber(id)/totalAmount));
    }
    showToolTip(toolTipId){
        if(!this.getAggregateNumber(toolTipId))return;
        let toolTipData={id:toolTipId, name:toolTipId, value:this.getAggregateNumber(toolTipId), ratio:this.getPercentage(toolTipId)};
        this.setToolTip(toolTipData,d3.select(".c3-arc-"+toolTipId.replace(/ /g,"-"))[0][0]);
    }
    hideToolTip(){
        this.removeToolTip();
    }
}