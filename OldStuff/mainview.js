
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
var selectedDish = menu[2];



$("body").empty();
var dinnerPreparationView = new dinnerPreparationHTMLView(model);


$("body").empty();
var dinnerOverviewView = new dinnerOverviewHTMLView(model);


$("body").empty();
var dishView = new dishHTMLView(model);


$("body").empty();
var selectDishView = new selectDishHTMLView(model);


$("body").empty();
var startView = new startHTMLView(model);


}
