$(function() {
	//We instantiate our model
	this.model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
	var view = new DinnerView(this.model);
	view.selectDishImages();
	view.myDinner();
});