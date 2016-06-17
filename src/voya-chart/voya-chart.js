import c3 from 'c3'
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {VoyaChartServices} from './voya-chart-services'
const DATA_EVENT = new CustomEvent('dataAssembled');
let _c3 = new WeakMap()
export class VoyaChart{
		constructor(chartProperties){
			_c3.set(this, c3);
			this.services = VoyaChartServices();
			this.dataEvent = new CustomEvent('dataAssembled');
			this.bindProperties(this,chartProperties);
			this.buildServices();
			this.assembleData();
		}
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
		element

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

		createChart(){
			let chartType = this.constructor.name.toLowerCase(), chartAPI = {data:this.dataModel}, typeConfig = {};
			chartAPI.data.type = chartType
			for(var prop in this._properties){
				if(VoyaChart.prototype[prop]!==undefined) continue;
				typeConfig[prop] = this._properties[prop]
			}
			chartAPI[chartType] = typeConfig
			let chart = _c3.get(this).generate(chartAPI)
			this.exposeC3Api(this,chart);
		}

		exposeC3Api(chart,c3Properties){
			Object.keys(c3Properties).forEach(function (prop) {
				if (chart[prop] === undefined)return;
				chart[prop] = c3Properties[prop];
			})
		}
}