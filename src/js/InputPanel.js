var InputPanel = (function(){
	var style = {
		main: s.cl({
			"padding": "20px",
			"padding-right": "0px",
			"border-bottom": "1px solid #CCCCCC",
			"cursor": "pointer",
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

	return {
		view: function(ctrl, options){
			return m("div",{onclick: options.onclick, class: style.main}, [
				m("i", {class: "material-icons"}, options.icon),
				m("div",{class: style.content}, [
					m("div",
						{class: (!options.selected? style.label : style.label+" "+style.selected)}, //different style based on if element is selected
						options.label
					),
					options.content
				])
			]);
		}
	};

})();
