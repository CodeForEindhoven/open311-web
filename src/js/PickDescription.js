var PickDescription = (function(){
	var style = {
		textarea: b.cl({
			"width": "100%",
			"height": "150px",
			"resize": "vertical",

			"font-family": "'Nunito Sans', sans-serif",
			"font-size": "12pt",

			"cursor": "pointer",

			"border-style": "none",
			"border-color": "Transparent",
			"outline": "none !important",
		})
	};

	return {
		controller: function(callback){
			var focus = false;
			var value = "";
			var textarea;
			var correct = false;

			return {
				focus: function(){return focus;},
				correct: function(){return correct;},

				onfocus: function(){focus = true; textarea.focus();},
				onblur: function(){if(value === "")focus = false;},
				onchange: function(e){
					value = e.target.value;
					if(value !== "") correct = true; else correct = false;
					callback(value);
				},
				config: function(e){textarea = e;}
			};
		},
		view: function(ctrl){
			return m.component(InputPanel, {
				icon: "edit",
				label: "Geef een beschrijving",
				selected: ctrl.focus(),
				correct: ctrl.correct(),
				onclick: ctrl.onfocus,
				content: [
					m("textarea", {
						class: style.textarea,
						onfocus: ctrl.onfocus,
						onblur: ctrl.onblur,
						onchange: ctrl.onchange,
						config: ctrl.config
					})
				]
			});
		}
	};

})();
