var IPStyle = {
	main: s.cl({
		"padding": "20px",
		"border-bottom": "1px solid #CCCCCC",
		"cursor": "pointer",
	}),
	icon: "material-icons "+s.cl({
		//"vertical-align": "middle",
	}),
	content: s.cl({
		"margin-left": "35px",
		"margin-top": "-1.75em"
	}),
	label: s.cl({
		"transition": "all 0.2s ease-in-out",
		"cursor": "pointer",
		"position": "relative",
		"top": "0px",
		"margin-bottom": "0px"
	}),
	selected: s.cl({
		"top": "-10px!important",
		"font-size": "8pt",
		"color": "#e2bb5f",
		"margin-bottom": "-10px!important"
	}),
};

var InputPanel = {
	view: function(ctrl, options){
		return m("div",{onclick: options.onclick, class: IPStyle.main}, [
			m("i", {class: IPStyle.icon}, options.icon),
			m("div",{class: IPStyle.content}, [
				m("div",
					{class: (!options.selected? IPStyle.label : IPStyle.label+" "+IPStyle.selected)}, //different style based on if element is selected
					options.label
				),
				options.content
			])

		]);
	}
};
