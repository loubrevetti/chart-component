import '../src/voya-charts';
import delegate from 'dom-delegate';
let eventMethod=(addEventListener) ? {addEventListener:"DOMContentLoaded"} : {attachEvent:"onload"};
window[Object.keys(eventMethod)[0]](eventMethod[Object.keys(eventMethod)[0]],appLoaded)

function appLoaded(){
	let menu = document.querySelector('.toolbar');
	let voyaCharts = document.querySelector('voya-charts');
	
	delegate(menu).on('click',"li",function(e){
			console.log('this menu is here and ready for voya-charts to be  leveraged to display features to devs')
		});	
}