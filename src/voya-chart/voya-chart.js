import c3 from 'c3'
import ee from 'event-emitter';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {VoyaChartServices} from './voya-chart-services'
let _chart = new WeakMap();
let _chartEvents = new WeakMap();
export class VoyaChart{
		constructor(chartProperties){
			_chart.set(this, {c3:c3,chart:null});
			_chartEvents.set(this,{render:'rendered',update:'update',legendItemClick:'legenditemclick',legendItemHover:'legenditemhover',legendItemOut:'legenditemout'});
			this.eventBus = ee();
			this.services = VoyaChartServices();
			this.chartModel={};

			this.instanceName = (this.constructor.name.match(/([a-z][A-Z][a-z])\w+/g))
				? this.constructor.name.replace(
					/([a-z][A-Z][a-z])\w+/g,
					(str) => {
						let strArr = str.split('');
						strArr.splice(1, 0, '-');
						return strArr.join('');
					}
				).toLowerCase()
				: this.constructor.name.toLowerCase();

			this.bindProperties(this,chartProperties);
			this.buildServices();
			this.assembleData();
		}
		@property
		renderEvent;

		@property
		@nullable
		services;

		@property
		@nullable
		apiUrl;
		
		@property
		@nullable
		apiParams;

		@property
		@nullable
		dataModel;

		@property
		@nullable
		element;

		@property
		@nullable
		chartModel;

		@property
		@nullable
		legend;

		@property
		instanceName;

		bindProperties(chart,props) {
			Object.keys(props).forEach(function (attr) {
				let [value,name] = [props[attr].value, props[attr].name.replace(/[-_\s]+(.)?/g, function (match, c) {
					return c ? c.toUpperCase() : '';
				})];
				if (chart[name] === undefined)return;
				chart[name] = value;
			})
		}
		buildServices() {
			if (!this.apiUrl) return;
			let payload = (this.apiParams)? JSON.parse(this.apiParams) : null;
			let apiParams={url:this.apiUrl,payload:payload};
			this.services.api(apiParams);
		}
		assembleData() {
			this.services.loadData().then(function (response) {
				this.dataModel = response.records;
			}.bind(this));
		}
		buildChartData(){
			this.chartModel.type = this.instanceName;
			return this.chartModel
		}
		buildInstanceData(){
			let typeConfig={};
			for(var prop in this._properties){
				if(VoyaChart.prototype[prop]!==undefined) continue;
				typeConfig[prop] = this._properties[prop];
			}
			return typeConfig
		}
		buildLegend(){
			let chart = this
			let legend = (this.legend)? JSON.parse(this.legend):{item:{}};
			if(!legend.item)legend['item']={};
			legend.item['onclick']=function(id){
				_chart.get(chart).chart.toggle(id);
				chart.eventBus.emit(_chartEvents.get(chart).legendItemClick);
			}
			legend.item['onmouseover']=function(id){
				_chart.get(chart).chart.focus(id);
				chart.eventBus.emit(_chartEvents.get(chart).legendItemHover,id);
			}
			legend.item['onmouseout']=function(id){
				_chart.get(chart).chart.revert();
				chart.eventBus.emit(_chartEvents.get(chart).legendItemOut,id);
			}
			return legend;
		}
		createChart(){
			let chartAPI={data:this.buildChartData(),legend:this.buildLegend()};
			chartAPI[this.instanceName] = this.buildInstanceData();
			_chart.get(this).chart = _chart.get(this).c3.generate(chartAPI);
			this.exposeC3Api(this,_chart.get(this).chart);
			this.eventBus.emit(_chartEvents.get(this).render);
		}
		//end of build for base chart

		//exposing public api for implementing devs
		exposeC3Api(chart,c3Properties){
			Object.keys(c3Properties).forEach(function (prop) {
				if (chart[prop] === undefined)return;
				chart[prop] = c3Properties[prop];
			})
		}
		redraw(){
			_chart.get(this).chart.flush();
		}
		getData(id){
			return (id)? _chart.get(this).chart.data.shown(id) : _chart.get(this).chart.data.shown(id);
		}
		getNames(){
			return _chart.get(this).chart.data.names();
		}
		setNames(newNames){
			_chart.get(this).chart.data.names(newNames);
			this.redraw();
		}
		removeToolTip(){
	        _chart.get(this).chart.tooltip.hide();
			document.querySelector('.c3-tooltip-container').style.display = 'none';
		}
		setToolTip(toolTipData,element){
			_chart.get(this).chart.internal.showTooltip([toolTipData],element)
		}
}