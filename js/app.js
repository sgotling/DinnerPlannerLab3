$(function() {
	
	//Här skapar vi model, view och controller
	this.model = new DinnerModel();
	this.startPageTextboxViewController = new StartPageTextboxViewController();
	this.startPageTextboxView = new StartPageTextboxView(this.startPageTextboxViewController);

	this.myDinnerTableViewController = new MyDinnerTableViewController();
	this.myDinnerTableView = new MyDinnerTableView(this.myDinnerTableViewController, this.model);
	
	






	this.selectTheDishesView = new SelectTheDishesView(this.model);
	this.selectTheDishesViewController = new SelectTheDishesViewController(this.selectTheDishesView);

	this.selectedDishInformationView = new SelectedDishInformationView();
	this.selectedDishInformationViewController = new SelectedDishInformationViewController(this.selectedDishInformationView, this.model);


	//var dishViewController = new DishViewController(this.model, mainView);


	// mainView = new MainView(this.model);
	// var mainController = new MainController(this.model, mainView);
	// mainView.mainController = mainController;
	// mainView.page="start";
	// mainView.refresh();


	//We instantiate our model
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));

});
