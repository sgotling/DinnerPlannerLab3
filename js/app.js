$(function() {
	
	//Här skapar vi model, view och controller
	this.model = new DinnerModel();
	mainView = new MainView(this.model);
	var mainController = new MainController(this.model, mainView);
	//var dishViewController = new DishViewController(this.model, mainView);
	mainView.mainController = mainController;
	mainView.page="start";
	mainView.refresh();


	//We instantiate our model
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));

});
