var HomePage = {
	controller: function(){

	},
	view: function(){
		return m("div",[
			m.component(MenuBar),
			m.component(Popup),
			m("div",{class: "page"},[
				m.component(Form)
			])
		]);
	}
};
