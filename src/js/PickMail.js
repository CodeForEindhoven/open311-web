var PickMail = (function(){
	var style = {
		input: s.cl({
			"width": "100%",
			//"height": "150px",

			"font-family": "'Nunito Sans', sans-serif",
			"font-size": "12pt",

			"cursor": "pointer",

			"border-style": "none",
			"border-color": "Transparent",
			"outline": "none !important",
			"display": "none"
		}),
		hiddeninput: s.cl({
			"display": "inline-block !important"
		})
	};

	return {
		controller: function(callback){
			var focus = false;
			var value = "";
			var textarea;

			return {
				focus: function(){return focus;},

				onfocus: function(){focus = true; window.setTimeout(function(){textarea.focus();}, 500);},
				onblur: function(){if(value === "")focus = false;},
				onchange: function(e){
					value = e.target.value;
					callback(value);
				},
				config: function(e){textarea = e;}
			};
		},
		view: function(ctrl){
			return m.component(InputPanel, {
				icon: "email",
				label: "Email",
				selected: ctrl.focus(),
				onclick: ctrl.onfocus,
				content: [
					m("input", {
						class: style.input +" "+ (ctrl.focus()?style.hiddeninput:""),
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
