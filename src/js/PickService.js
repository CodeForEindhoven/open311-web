var PickService = (function(){

	var style = {
		listelem : s.cl({
			"padding-left": "15px",
			"max-height": "0px",
			"overflow": "hidden",
			"transition": "all 0.5s, padding 0.5s",
		}),
		show : s.cl({
			"max-height": "70px!important",
			"padding": "10px!important",
		}),

		service_name: s.cl({
			"font-weight" :"bold"
		}),
		description: s.cl({
			"font-size": "10pt",
			"color": "#888888"
		})
	};

	return {
		controller: function(callback) {
			var services = open311.services();
			var opened = false;

			return {
				selected: function(selection){
					return (selection !== -1);
				},
				servicename: function(selection){
					return services[selection].service_name;
				},
				services: function(){return services;},

				opened: function(){return opened;},

				onclick: function(){
					if(!opened) callback({});
					opened = !opened;
				},

				onselect: function(code){
					return function(){
						callback(services[code]);
					};
				},
			};
		},
		view: function(ctrl, selection) {
			console.log(selection());

			return m.component(InputPanel, {
				icon: "business",
				label: "Selecteer een categorie",
				selected: ctrl.selected(selection().service_code),
				onclick: ctrl.onclick,
				content: [
					m("div", {}, ctrl.selected(selection().service_code) ? selection().service_name: ""),
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
