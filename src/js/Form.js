var Form = {
	controller: function(){
		return {

		};
	},
	view: function(ctrl){
		return m("div",{class: "form"},[
			m.component(PickService),
			m.component(PickDescription),
			m.component(PickLocation),
		]);
	}
};
