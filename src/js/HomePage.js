var HomePage = {
	controller: function(){

	},
	view: function(){
		return m("div",[
			m.component(MenuBar),
			m("div",{class: "page"},[
				m.component(Form)
			])
		]);
	}
};
