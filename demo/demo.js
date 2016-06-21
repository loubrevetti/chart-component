import '../src/voya-chart';
import delegate from 'dom-delegate';
let eventMethod=(addEventListener) ? {addEventListener:"DOMContentLoaded"} : {attachEvent:"onload"};
window[Object.keys(eventMethod)[0]](eventMethod[Object.keys(eventMethod)[0]],appLoaded)

function appLoaded(){
	let menu = document.querySelector('.toolbar');
	let voyaChart = document.querySelector('voya-chart');
	voyaChart.api.eventBus.on('rendered',function(){
		//TODO: here is how you would work with api of chart object must wait for c3 to have rendered it
	})
	delegate(menu).on('click',"li",function(e){
			console.log('this menu is here and ready for voya-charts to be  leveraged to display features to devs')
		});

}