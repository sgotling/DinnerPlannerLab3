
var MainView = function (model) {


var type = "starter"
//var model = new DinnerModel;
model.addDishToMenu(1);
model.addDishToMenu(100); 
model.addDishToMenu(200);
var menu = model.getFullMenu();
var dishes = model.getAllDishes(type);
var totalPrice = model.getTotalMenuPrice();
var numberOfGuests = model.getNumberOfGuests();

this.selectedDish = menu[2];
 this.page="";


//list


//bind listener to model
//model.



this.refresh = function () {
	var page = this.page

	switch(page) {
	    case "dinnerPreparation":
	        
			var dinnerPreparationView = new dinnerPreparationHTMLView(model);

	        break;
	    case "dinnerOverview":
	        
			var dinnerOverviewView = new dinnerOverviewHTMLView(model);

	        break;
	    case "dish":
	        $("body").empty();
			var dishView = new dishHTMLView(model);
	        break;
	    case "selectDish":
	        $("body").empty();
			var selectDishView = new selectDishHTMLView(model);
	        break;
	    case "start":
	        $("body").empty();
			var startView = new startHTMLView(model);
	        break;
	}
}













}
