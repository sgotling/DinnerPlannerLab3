$(function() {
	//We instantiate our model
	this.model = new DinnerModel();

	mainView = new MainView(this.model);
	mainView.page="dinnerPreparation";
	mainView.refresh()


	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//var view = new DinnerView(this.model);


	//var selectView = new selectDishesView(this.model);
	
	//selectView.headerGrey();
	//selectView.myDinner();
	//selectView.selectDishBar();
	//selectView.selectDishImages();
	


	//var dishView = new DishesView(this.model);

	//view.myDinner();
	//view.ingredients();
});
