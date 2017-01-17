var open311 = (function() {
	"use strict";

	var endpoint = "https://www.open311.io/api/v2/";
	var uploadEndpoint = "https://www.open311.io/api/upload";
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

	model.postRequest = function(form){
		model.uploadImage(form, function(image){
			form.media = image.path;
			model.uploadForm(form, function(){});
		});
	};

	model.uploadForm = function(form, callback){
		var formData = new FormData();
		formData.append("api_key", api_key);
		formData.append("service_code", form.service_code || -1);
		formData.append("email", form.email || "");
		formData.append("first_name", form.first_name || "");
		formData.append("lat", form.lat || 0.0);
		formData.append("long", form.lng || 0.0);
		formData.append("description", form.description || "");
		formData.append("media", form.media || {});

		m.request({
			method: "POST",
			url: endpoint + "requests.json",
			data: formData,
			serialize: function(value) {
				return value;
			}
		}).then(function(data) {
			console.log("Post success");
			console.log(data);
			callback(data);
		}, function(error) {
			console.log(error);
		});
	};

	model.uploadImage = function(form, callback){
		var formData = new FormData();
		formData.append("media", form.image || []);

		m.request({
			method: "POST",
			url: uploadEndpoint,
			data: formData,
			serialize: function(value) {
				return value;
			}
		}).then(function(data) {
			console.log("Post success");
			console.log(data);
			callback(data);
		}, function(error) {
			console.log(error);
		});
	};

	GET("services.json").then(model.services);

	return model;
})();
