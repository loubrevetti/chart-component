import c3 from 'c3'
import ee from 'event-emitter';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {privatemember, protectedmember} from 'voya-component-utils/decorators/method-decorators';
import {VoyaChartServices} from './voya-chart-services';
let _chart = new WeakMap();
let _chartEvents = new WeakMap();
export class VoyaChart{
		constructor(chartProperties){
			_chart.set(this, {c3:c3,chart:null});
			_chartEvents.set(this,{render:'rendered',update:'update',legendItemClick:'legenditemclick',legendItemHover:'legenditemhover',legendItemOut:'legenditemout',convertToMobile:'converttomobile'});
			this.eventBus = ee();
			this.services = VoyaChartServices();
			this.chartModel={data:{}};
			this.instanceName = (this.constructor.name.match(/([a-z][A-Z][a-z])\w+/g)) ? this.constructor.name.replace(/([a-z][A-Z][a-z])\w+/g,
					(str) => {
						let strArr = str.split('');
						strArr.splice(1, 0, '-');
						return strArr.join('')
					}).toLowerCase()
				: this.constructor.name.toLowerCase();
			this.bindProperties(this,chartProperties);
			this.legend = (this.legend && typeof(this.legend)==="string")? JSON.parse(this.legend): this.legend;
			this.buildServices();
			this.assembleData();
		}
		@property
		eventBus;

		@property
		@nullable
		deviceType;

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
		data;

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
		@nullable
		colors;

		@property
		@nullable
		mobileWidth;

		@property
		instanceName;

		@privatemember
		bindProperties(chart,props) {
			Object.keys(props).forEach(function (attr) {
				let [value,name] = [props[attr].value, props[attr].name.replace(/[-_\s]+(.)?/g, function (match, c) {return c ? c.toUpperCase() : '';})];
				let val = (name==="colors" && typeof(value)==="string") ? value.split(",") : value;
				if (chart[name] === undefined)return;
				chart[name] = val;
			})
		}

		@privatemember
		buildServices() {
			if (!this.apiUrl) return;
			let payload = (this.apiParams && typeof(this.apiParams)==="string")? JSON.parse(this.apiParams) : this.apiParams;
			let apiParams={url:this.apiUrl,payload:payload};
			this.services.api(apiParams)
		}

		@privatemember
		assembleData() {

			// If an API URL has been provided, get the data from the web service.
			// Otherwise, use the 'data' HTML attribute.
			if (this.apiUrl) {
				this.services.loadData().then(function (response) {
					this.dataModel = response.records;
				}.bind(this));

			} else if (this.data) {
				try {
					let records = JSON.parse(this.data);
					let self = this;

					window.setTimeout(
						() => {
							self.dataModel = records;
						}, 0
					);

					//this.dataModel = records;
				} catch (err) {
					// TODO: How should the UI indicate that we got invalid JSON?
					console.log(`ERROR: ${err.message}`);
				}

			} else {
				// This will allow the Chart Object to finish initializing, though nothing will be rendered on-screen.
				this.dataModel = [];
				console.log("WARN - Voya Chart. Unable to render chart. No chart data provided.");
			}

			// Only need to add the responsive listener, if there's some possibility of successfully rendering the chart.
			if (this.apiUrl || this.data) {
				if (this.mobileWidth) {
					this.responsiveListener();
				}
			}
		}

		@privatemember
		buildChartData(){
			this.chartModel.data.type = this.instanceName;
			if(!this.colors) return this.chartModel;
			this.chartModel.data.colors = this.buildColorModel();
		}

		@privatemember
		buildInstanceData(){
			let typeConfig={};
			Object.keys(this._properties).forEach(function(prop){
				if(VoyaChart.prototype[prop]!== undefined) return;
				typeConfig[prop] = this._properties[prop];
			}.bind(this))
			this.chartModel[this.instanceName] = typeConfig;
		}
		@privatemember
		buildColorModel(){
			let colors={}
			this.chartModel.data.columns.forEach(function(col,idx){
				colors[col[0]] = this.colors[idx];
			}.bind(this));
			return colors;
		}
		@privatemember
		buildLegend(){
			let chart = this
			if(!this.legend.item) this.legend['item']={};
			this.legend.item['onclick']=function(id){
				_chart.get(chart).chart.toggle(id);
				chart.eventBus.emit(_chartEvents.get(chart).legendItemClick)
			}
			this.legend.item['onmouseover']=function(id){
				_chart.get(chart).chart.focus(id);
				chart.eventBus.emit(_chartEvents.get(chart).legendItemHover,id);
			}
			this.legend.item['onmouseout']=function(id){
				_chart.get(chart).chart.revert();
				chart.eventBus.emit(_chartEvents.get(chart).legendItemOut,id);
			}
			this.chartModel.legend = this.legend;
		}
		@protectedmember
		createChart(){
			this.buildChartData();
			if(this.legend) this.buildLegend();
			this.buildInstanceData();
			_chart.get(this).chart = _chart.get(this).c3.generate(this.chartModel);
			this.exposeC3Api(this,_chart.get(this).chart);
			this.eventBus.emit(_chartEvents.get(this).render);
		}
		//end of build for base chart

		//exposing public api for implementing devs
		@privatemember
		exposeC3Api(chart,c3Properties){
			Object.keys(c3Properties).forEach(function (prop) {
				if (chart[prop] === undefined || prop==="legend")return;
				chart[prop] = c3Properties[prop];
			})
		}
		redraw(){
			_chart.get(this).chart.flush()
		}
		destroy(){
			_chart.get(this).chart.destroy();
		}
		resize(dimensions){
			_chart.get(this).chart.resize(dimensions);
		}
		getData(){
			return _chart.get(this).chart.data();
		}
		getVisibleData(id){
			return (id)? _chart.get(this).chart.data.shown(id) : _chart.get(this).chart.data.shown(id);
		}
		getNames(){
			return _chart.get(this).chart.data.names();
		}
		setNames(newNames){
			_chart.get(this).chart.data.names(newNames);
			this.redraw();
		}
		updateColors(colorModel){
			_chart.get(this).chart.data.colors(colorModel);
		}
		updateConfig(config){
			_chart.get(this).chart.load(config);
		}
		removeToolTip(){
	        _chart.get(this).chart.tooltip.hide();
			document.querySelector('.c3-tooltip-container').style.display = 'none';
		}
		setToolTip(toolTipData,element){
			_chart.get(this).chart.internal.showTooltip([toolTipData],element)
		}
		@protectedmember
		responsiveListener(){
			this.deviceType = (window.outerWidth <= this.mobileWidth)? "mobile" : "desktop";
			this.emitMobileEvent(this.deviceType)
			window.addEventListener("resize",function(e){
				let windowWidth=(e)? e.target.outerWidth : window.outerWidth, deviceType = (windowWidth<=this.mobileWidth)? "mobile" : "desktop";
				if(deviceType === this.deviceType) return;
				this.emitMobileEvent(deviceType);
				this.deviceType = deviceType;
			}.bind(this));
		}
		@protectedmember
		emitMobileEvent(deviceType){
			this.eventBus.emit(_chartEvents.get(this).convertToMobile,deviceType);
		}
		hasChartRendered(){
			return (_chart.get(this).chart);
		}
}