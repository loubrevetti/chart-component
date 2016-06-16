import c3 from 'c3'
import {property,nullable} from 'voya-component-utils/decorators/property-decorators';
import {RestAssembely} from '../utilities/rest-assembly'
let _c3 = new WeakMap()
export class VoyaChart{
		constructor(chartProperties){
			_c3.set(this, c3);
			this.bindProperties(this,chartProperties);
			this.dataModel={};
		}
		
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
				let [value,name] = [props[attr].value, props[attr].name.replace(/[-_\s]+(.)?/g, function (match, c) {return c ? c.toUpperCase() : '';})];
				if (chart[name] === undefined)return;
				chart[name] = value;
			})
		}
		exposeC3Api(chart,c3Properties){
			Object.keys(c3Properties).forEach(function (prop) {
				if (chart[prop] === undefined)return;
				chart[prop] = c3Properties[prop];
			})
		}

		createChart(){
			let chartApi = this
			let chart = _c3.get(this).generate({
				data: chartApi.dataModel,
				donut: {
					title: chartApi.title
				}
			})
			this.exposeC3Api(this,chart);
		}
}