var MenuBar = (function(){

	var style = s.cl({
		//shape
		"box-sizing": "border-box",
		"height": "70px",
		"width": "100%",
		"top": "0px",
		"line-height": "70px",
		"padding-left": "20px",
		"padding-right": "20px",

		//styling
		"background-color": "#E32527",
		"color": "#fff",
		"box-shadow": "0px 1px 5px #AAAAAA",
	});

	return {
		view: function(){
			return m("nav", {class: style}, [
				m("span","Meldloket")
			]);
		}
	};

})();
