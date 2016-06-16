import {restAssembly} from '../utilities/rest-assembly';

export function VoyaChartServices(){

    let REST=restAssembly();

    function api(params){
        REST.buildRequest(params);
    }
    function loadData() {
        return fetch(REST.request()).then(function(response){return response.json()})
    }
    return{
        api:api,
        loadData:loadData
    }
}