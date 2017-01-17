var Form = {
	controller: function(){
		var service_code = m.prop(-1);
		var description = m.prop("");
		var image = m.prop();

		return {
			service_code: service_code,
			description: description,
			image: image,
			post: function(){
				open311.postRequest({
					service_code: service_code(),
					description: description(),
					image: image(),
				});
			}
		};
	},
	view: function(ctrl){
		return m("div",{class: "form"},[
			m.component(PickService, ctrl.service_code),
			m.component(PickDescription, ctrl.description),
			m.component(PickLocation),
			m.component(PickImage, ctrl.image),
			m.component(HoverButton, {
				onclick: ctrl.post
			}),
		]);
	}
};
