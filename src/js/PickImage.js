var PickImage = (function(){

	var style = {
		img: b.cl({
			"width": "100%"
		})
	};

	return {
		controller: function(callback){
			var file;
			var dataUrl = "";
			var correct = false;

			return {
				correct: function(){return correct;},

				file: function(){return file;},
				dataUrl: function(){return dataUrl;},

				onclick: function(e){
					var input = document.createElement("input");

					input.setAttribute("type", "file");
					input.setAttribute("accept", "image/*");

					input.addEventListener("change", function(){
						var reader = new FileReader();
						file = input.files[0];

						if(file !== undefined){
							correct = true;
						} else {
							correct = false;
						}

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
				selected: ctrl.correct(),
				correct: ctrl.correct(),
				onclick: ctrl.onclick,
				content: (function(){
					if(ctrl.correct()){
						return m("img", {class: style.img,src: ctrl.dataUrl()});
					}
				})()
			});
		}
	};
})();
