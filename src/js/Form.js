var Form = {
	controller: function(){
		var service_code = m.prop(-1);
		var description = m.prop("");
		return {
			service_code: service_code,
			description: description,
			post: function(){
				open311.postRequest({
					service_code: service_code(),
					description: description()
				});
			}
		};
	},
	view: function(ctrl){
		return m("div",{class: "form"},[
			m.component(PickService, ctrl.service_code),
			m.component(PickDescription, ctrl.description),
			m.component(PickLocation),
			m.component(HoverButton, {
				onclick: ctrl.post
			}),
		]);
	}
};
