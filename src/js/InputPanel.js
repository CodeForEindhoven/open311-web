var InputPanel = (function(){
	var style = {
		main: b.cl({
			"padding": "20px",
			"padding-right": "0px",
			"border-bottom": "1px solid #CCCCCC",
			"cursor": "pointer",
		}),
		content: b.cl({
			"margin-left": "35px",
			"margin-top": "-1.75em"
		}),
		label: b.cl({
			"transition": "all 0.2s ease-in-out",
			"cursor": "pointer",
			"position": "relative",
			"top": "0px",
			"margin-bottom": "0px"
		}),
		selected: b.cl({
			"top": "-10px!important",
			"font-size": "8pt",
			"color": "#e2bb5f",
			"margin-bottom": "-10px!important"
		}),
		correct: b.cl({
			"color": "#6ee25f!important",
		})
	};

	return {
		view: function(ctrl, options){
			return m("div",{onclick: options.onclick, class: style.main}, [
				m("i", {class: "material-icons"}, options.icon),
				m("div",{class: style.content}, [
					m("div",
						{class: style.label+(!options.correct?  "" : style.correct)+(!options.selected?  "" : style.selected)}, //different style based on if element is selected
						options.label
					),
					options.content
				])
			]);
		}
	};

})();
