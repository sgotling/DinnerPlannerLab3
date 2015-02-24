//Det är detta objekt som bestämer vilken view som ska visas. För att ändra view: mainView.page="nyaSidan" mainView.refresh()
var MainView = function (model) {



//Detta ska tas bort senare
model.addDishToMenu(1);
model.addDishToMenu(100); 
model.addDishToMenu(200);


var type = "starter"
var menu = model.getFullMenu();
var _this = this;
this.selectedDish = menu[0];
this.page="";
this.mainController;





//Binder till model. Om det ändras i några av dessa funktioner kommer den aktuella sidan att upptateras.
model.numberOfGuestsChanged.addObserver(function () {
	_this.refresh();
});
model.menuChanged.addObserver(function () {
	_this.refresh();
});


this.refresh = function () {
	var page = this.page

	switch(page) {
	    case "dinnerPreparation":
	        
			var dinnerPreparationView = new dinnerPreparationHTMLView(model);
			this.mainController.dinnerPreparationViewController();
	        break;
	    case "dinnerOverview":
	        
			var dinnerOverviewView = new dinnerOverviewHTMLView(model);
			this.mainController.dinnerOverviewViewController();

	        break;
	    case "dish":
	        $("body").empty();
			var dishView = new dishHTMLView(model);
			this.mainController.dishViewController();
	        break;
	    case "selectDish":
	        $("body").empty();
			var selectDishView = new selectDishHTMLView(model);
			this.mainController.selectDishViewController();
	        break;
	    case "start":
	        $("body").empty();
			var startView = new startHTMLView(model);
			this.mainController.startViewController();
	        break;
	}
}

}





