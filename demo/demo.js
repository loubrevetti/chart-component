import '../src/voya-chart';
import delegate from 'dom-delegate';
let eventMethod=(addEventListener) ? {addEventListener:"DOMContentLoaded"} : {attachEvent:"onload"};
window[Object.keys(eventMethod)[0]](eventMethod[Object.keys(eventMethod)[0]],appLoaded)
let brandedModel = ["EE3B3B","FF3030","CD0000","B22222"]
function appLoaded(){
	let menu = document.querySelector('.toolbar');
	let voyaChart = document.querySelector('voya-chart');
	voyaChart.api.eventBus.on('rendered',function(){
		/* TODO: any updates to charts that need to be done in a non event based handler */
		console.log(voyaChart.api.showToolTip("roth"));
	})
	delegate(menu).on('click',"li",function(e){
			let colors={}
			voyaChart.api.chartModel.data.columns.forEach(function(col,idx){
				colors[col[0]] = "#"+brandedModel[idx];
			})
			voyaChart.api.updateColors(colors);
		});

}