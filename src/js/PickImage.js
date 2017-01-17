var PickImage = (function(){

	var style = {
		img: s.cl({
			"width": "100%"
		})
	};

	return {
		controller: function(callback){
			var file;
			var dataUrl = "";

			return {
				file: function(){return file;},
				dataUrl: function(){return dataUrl;},

				onclick: function(e){
					var input = document.createElement("input");

					input.setAttribute("type", "file");
					input.setAttribute("accept", "image/*");

					input.addEventListener("change", function(){
						var reader = new FileReader();
						file = input.files[0];
						callback(file);

						reader.onload = function(e) {
							dataUrl = e.target.result;
							m.redraw();
						};

						reader.readAsDataURL(input.files[0]);
					}, false);

					//make it work in internet explorer
					input.setAttribute("class", "file");
					document.body.appendChild(input);

					input.click();
				}
			};
		},
		view: function(ctrl){
			return m.component(InputPanel, {
				icon: "photo",
				label: "Kies een afbeelding",
				selected: (ctrl.file() !== undefined),
				onclick: ctrl.onclick,
				content: (function(){
					if(ctrl.file() !== undefined){
						return m("img", {class: style.img,src: ctrl.dataUrl()});
					}
				})()
			});
		}
	};
})();
