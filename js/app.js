$(function() {
	
	//Här skapar vi model, view och controller
	this.model = new DinnerModel();
	
	this.startPageTextboxView = new StartPageTextboxView();
	this.startPageTextboxViewController = new StartPageTextboxViewController(this.startPageTextboxView);
	
	this.myDinnerTableView = new MyDinnerTableView(this.model);
	this.myDinnerTableViewController = new MyDinnerTableViewController(this.myDinnerTableView, this.model);
	
	

	this.selectTheDishesView = new SelectTheDishesView(this.model);
	this.selectTheDishesViewController = new SelectTheDishesViewController(this.selectTheDishesView, this.model);

	this.selectedDishInformationView = new SelectedDishInformationView(this.model);
	this.selectedDishInformationViewController = new SelectedDishInformationViewController(this.selectedDishInformationView,this.model);
	
	
	//We instantiate our model
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));

});
