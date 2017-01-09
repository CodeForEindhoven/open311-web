var PLStyle = {
};

var PickLocation = {
	controller: function(){
	},
	view: function(ctrl){
		return m.component(InputPanel, {
			icon: "location_on",
			label: "Kies een locatie",
			content: [
			]
		});
	}
};
