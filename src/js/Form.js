var Form = {
	controller: function(){
		var name = m.prop("");
		var mail = m.prop("");
		var service_code = m.prop({service_code:-1});
		var description = m.prop("");

		var image = m.prop();

		return {
			name: name,
			mail: mail,
			service_code: service_code,
			description: description,
			image: image,
			post: function(){
				open311.postRequest({
					service_code: service_code().service_code,
					description: description(),
					image: image(),
					first_name: name(),
					email: mail()
				}, function(response){
					showPopup(response[0].service_notice);
					service_code({service_code:-1});
					description("");
					image();
					name("");
					mail("");
				});
			}
		};
	},
	view: function(ctrl){
		return m("div",{class: "form"},[
			m.component(PickName, ctrl.name),
			m.component(PickMail, ctrl.mail),
			m.component(PickService, ctrl.service_code),
			m.component(PickDescription, ctrl.description),
			//m.component(PickLocation),
			m.component(PickImage, ctrl.image),
			m.component(HoverButton, {
				onclick: ctrl.post
			}),
		]);
	}
};
