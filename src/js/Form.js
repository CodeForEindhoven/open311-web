var Form = {
	controller: function(){
		return {

		};
	},
	view: function(ctrl){
		return m("div",{class: "form"},[
			m.component(PickService),
			m.component(Description),
			m.component(PickLocation),
		]);
	}
};

var PickService = {
	controller: function(){
		var services = open311.services();
		var selection = -1;
		var opened = false;
		return {
			getservices: function(){return services;},
			onclick: function(){opened = !opened;},
			getopened: function(){return opened;},
			onselect: function(code){
				return function(){selection = code;};
			},
			getselection: function(){return selection;}
		};
	},
	view: function(ctrl){
		return m("div",{onclick: ctrl.onclick, class: "button"},[
			m("i", {class: "material-icons"}, "business"),
			m("span", {class: (ctrl.getopened()?"selected":"")}, (ctrl.getselection()<0)?"Selecteer een categorie":ctrl.getservices()[ctrl.getselection()].service_name),
			m("div", {class: "list"}, ctrl.getservices().map(function(s, count){
				return m("div",{
					class: "listelem "+(ctrl.getopened()?"show":""),
					onclick: ctrl.onselect(count)
				},s.service_name);
			}))
		]);
	}
};

var Description = {
	controller: function(){
		var focus = false;
		var value = "";

		return {
			onfocus: function(){focus = true;},
			onblur: function(){if(value === "")focus = false;},
			getfocus: function(){return focus;},

			onchange: function(e){value = e.target.value;},
			getvalue: function(){return value;}
		};
	},
	view: function(ctrl){
		return m("div",{class: "description"},[
			//m("i", {class: "material-icons"}, "location_on"),
			m("span",{class: ctrl.getfocus()?"selected":""}, "Geef een beschrijving"),
			m("textarea", {
				onfocus: ctrl.onfocus,
				onblur: ctrl.onblur,
				onchange: ctrl.onchange
			},ctrl.getvalue())
		]);
	}
};

var PickLocation = {
	controller: function(){
		return {

		};
	},
	view: function(ctrl){
		return m("div",{class: "button"},[
			m("i", {class: "material-icons"}, "location_on"),
			m("span", "Selecteer een locatie")
		]);
	}
};
