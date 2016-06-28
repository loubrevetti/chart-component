import '../src/voya-chart';
import delegate from 'dom-delegate';
let eventMethod=(addEventListener) ? {addEventListener:"DOMContentLoaded"} : {attachEvent:"onload"};
window[Object.keys(eventMethod)[0]](eventMethod[Object.keys(eventMethod)[0]],appLoaded)
let brandedModel = ["EE3B3B","FF3030","CD0000","B22222"]
function appLoaded(){
	let menu = document.querySelector('.toolbar');
	let voyaChart = document.querySelector('voya-chart');
	voyaChart.api.eventBus.on('rendered',function(){
		let colors={}
		voyaChart.api.chartModel.data.columns.forEach(function(col,idx){
			colors[col[0]] = "#"+brandedModel[idx];
		})
		voyaChart.api.updateColors(colors);
	})
	delegate(menu).on('click',"li",function(e){
			console.log('this menu is here and ready for voya-charts to be  leveraged to display features to devs')
		});

}