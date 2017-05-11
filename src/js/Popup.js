var popupMessage = "";

function showPopup(message){
	popupMessage = message;
	m.redraw();
}

var Popup = (function(){
	var style = {
		frame: s.cl({
			"position": "fixed",

			"width": "320px",
			"height": "140px",

			"margin-left": "auto",
			"margin-right": "auto",
			"margin-top": "auto",
			"margin-bottom": "auto",
			"left": "0",
			"right": "0",
			"top": "0",
			"bottom": "0",

			"font-family": "'Nunito Sans', sans-serif",
			"font-size": "12pt",

			"padding": "15px",

			"z-index": "100000000",

			"border-radius": "5px",
			"background-color": "#ffffff",
			"box-shadow": "0px 0px 5px #999999"
		}),
		button: s.cl({
			"position": "absolute",
			"bottom": "15px",
			"right": "15px",
		})
	};

	return {
		controller: function(callback){

		},
		view: function(ctrl){
			if(popupMessage !== ""){
				return m("div", {class: style.frame}, [
					m("div", popupMessage),
					m("button", {
						class: style.button,
						onclick: function(){
							popupMessage = "";
						}
					}, "ok")
				]);
			} else {
				return m("");
			}
		}
	};

})();
