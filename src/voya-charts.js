
import {VoyaChartsTemplate} from './voya-charts-template';
import {property,nullable} from 'voya-component-utils/decorators/property-decorators'; 


class VoyaCharts extends (HTMLElement || Element){
		createdCallback(){
			//STUB:: to enter in default values for your class instance
			
			this.template = VoyaChartsTemplate();
			this.render();
		}
		
		@property
		@nullable
		 template 
		
		
		@property
		@nullable
		property0 = null
		
		@property
		@nullable
		property1 = null
		
		@property
		@nullable
		property2 = null
		
		@property
		@nullable
		property3 = null
		
		@property
		@nullable
		property4 = null
		
		@property
		@nullable
		property5 = null
		
		@property
		@nullable
		property6 = null
		
		@property
		@nullable
		property7 = null
		
		@property
		@nullable
		property8 = null
		
		@property
		@nullable
		property9 = null
		
		@property
		@nullable
		property10 = null
		
		@property
		@nullable
		property11 = null
		
		@property
		@nullable
		property12 = null
		
		@property
		@nullable
		property13 = null
		
		@property
		@nullable
		property14 = null
		
		
		//end voyaCharts getters and setters :: next line registers our eventBus
		
		
		render(){
			this.innerHTML=this.template.render();
			
		}
		
		propertyChangedCallback(prop, oldValue, newValue) {
			// STUB:: to listen to property decorator change values
			
		}
	}
document.registerElement('voya-charts', VoyaCharts);