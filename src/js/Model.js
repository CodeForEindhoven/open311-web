var open311 = (function() {
	"use strict";

	var endpoint = "https://www.open311.io/api/v2/";
	var api_key = "56f3b3b5f3348";


	function xhrConfig(xhr) {
		xhr.setRequestHeader("Content-Type", "application/json");
	}

	function GET(url){
		return m.request({method: "GET", url: endpoint+url});
	}

	function POST(url, data){
		return m.request({method: "POST", url: endpoint+url, data: data, config: xhrConfig});
	}

	var model = {};
	model.requests = m.prop([]);
	model.services = m.prop([]);
	GET("services.json").then(model.services);

	return model;
})();
