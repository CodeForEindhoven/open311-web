var PickService = (function(){

	var style = {
		listelem : b.cl({
			"padding-left": "15px",
			"max-height": "0px",
			"overflow": "hidden",
			"transition": "all 0.5s, padding 0.5s",
		},{
			":hover": {
				"background-color": "#DDDDDD",
			}
		}),

		show : b.cl({
			"max-height": "70px!important",
			"padding": "10px!important",
		}),

		service_name: b.cl({
			"font-weight" :"bold"
		}),

		description: b.cl({
			"font-size": "10pt",
			"color": "#888888"
		})
	};

	return {
		controller: function(callback){
			var services = open311.services();
			var selection = -1;
			var opened = false;
			return {
				services: function(){return services;},
				selected: function(){return selection !== -1;},
				selection: function(){return services[selection].service_name;},
				opened: function(){return opened;},

				onclick: function(){
					if(!opened) selection = -1;
					opened = !opened;
				},
				onselect: function(code){
					return function(){
						selection = code;
						callback(services[selection].service_code);
					};
				},
			};
		},
		view: function(ctrl){
			return m.component(InputPanel, {
				icon: "business",
				label: "Selecteer een categorie",
				selected: ctrl.selected(),
				correct: ctrl.selected(),
				onclick: ctrl.onclick,
				content: [
					m("div", {}, ctrl.selected()? ctrl.selection(): ""),
					ctrl.services().map(function(s, count){
						return m("div",{
							class: (ctrl.opened() ? style.listelem+" "+style.show : style.listelem),
							onclick: ctrl.onselect(count)
						},[
							m("div", {class: style.service_name}, s.service_name),
							m("div", {class: style.description}, s.description)
						]);
					})
				]
			});
		}
	};
})();
