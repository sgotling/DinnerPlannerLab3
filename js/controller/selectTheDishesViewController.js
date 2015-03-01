var SelectTheDishesViewController = function (view) {

	var _this = this;

	// Events
	this.startToSelectDishButtonClicked = new Event;
	this.selectTypeFormChanged = new Event;
	this.selectDishToDinnerOverviewButtonClicked = new Event;
	this.searchBarChanged = new Event;
	this.clickAbleDishClicked = new Event;

	// bindings
	this.startToSelectDishButtonClicked.addObserver(function () {
		view.show();
	});
	this.clickAbleDishClicked.addObserver(function(){
		view.hide();
	})
	this.startToSelectDishButtonClicked.addObserver(function () {
		view.updateImages();
	});
	this.selectTypeFormChanged.addObserver(function () {
		view.updateImages();
	})
	this.selectDishToDinnerOverviewButtonClicked.addObserver(function () {
		view.hide();
	})
	this.searchBarChanged.addObserver(function(){
		view.updateImages();
	})


	$("#startToSelectDishButton").click(function () {
		_this.startToSelectDishButtonClicked.notifyObservers();
	});

	$("#selectTypeForm").change(function () {
		_this.selectTypeFormChanged.notifyObservers();
	});

	$("#selectDishToDinnerOverviewButton").click(function (){
		_this.selectDishToDinnerOverviewButtonClicked.notifyObservers();
	});

	$("#searchBar").on('keyup', function(evt){
		// if(evt.keyCode == 13){} // For enter key
		_this.searchBarChanged.notifyObservers();
	});

	$(".clickAbleDish").click(function(){
		console.log("gh");
		//var id = $(this).attr('id');
		_this.clickAbleDishClicked.notifyObservers(evt);
	});
		  
}// SelectTheDishesViewController end