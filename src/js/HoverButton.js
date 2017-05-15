var HoverButton = (function(){

	var style = {
		main: b.cl({
			"width": "50px",
			"height": "50px",
			"border-radius": "25px",

			"float": "right",
			"margin-top": "20px",
			"margin-bottom": "20px",

			"background-color": "#E32527",
			"color": "#fff",
			"box-shadow": "0px 1px 5px #AAAAAA",

			"text-align": "center",
			"line-height": "48px",

			"cursor": "pointer",
		}),
		icon: b.cl({
			"vertical-align": "middle"
		})
	};


	return {
		controller: function(){
			return {

			};
		},
		view: function(ctrl, options){
			return m("div",{
				class: style.main,
				onclick: options.onclick
			},[
				m("i", {class: "material-icons "+style.icon}, "check")
			]);
		}
	};
})();
