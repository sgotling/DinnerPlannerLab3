var SelectTheDishesViewController = function (view) {

	var _this = this;


	
	
	// startToSelectDishButtonClicked
	this.startToSelectDishButtonClicked = new Event;
	this.startToSelectDishButtonClicked.addObserver(function () {
		view.show();
	});
	this.startToSelectDishButtonClicked.addObserver(function () {
		view.updateImages();
	});
	$("#startToSelectDishButton").click(function () {
		_this.startToSelectDishButtonClicked.notifyObservers();
		_this.clickAbleDishHandler();
	});


	// selectTypeFormChanged
	this.selectTypeFormChanged = new Event;
	this.selectTypeFormChanged.addObserver(function () {
		view.updateImages();
	});
	$("#selectTypeForm").change(function () {
		_this.selectTypeFormChanged.notifyObservers();
		_this.clickAbleDishHandler();
	});


	// selectDishToDinnerOverviewButtonClicked
	this.selectDishToDinnerOverviewButtonClicked = new Event;
	$("#selectDishToDinnerOverviewButton").click(function (){
		_this.selectDishToDinnerOverviewButtonClicked.notifyObservers();
	});
	this.selectDishToDinnerOverviewButtonClicked.addObserver(function () {
		view.hide();
	})


	// searchBarChanged
	this.searchBarChanged = new Event;
	this.searchBarChanged.addObserver(function(){
		view.updateImages();
	})
	$("#searchBar").on('keyup', function(evt){
		// if(evt.keyCode == 13){} // For enter key
		_this.searchBarChanged.notifyObservers();
	});

	this.clickAbleDishHandler = function(){
		// clickAbleDishClicked
		this.clickAbleDishClicked = new Event;
		this.clickAbleDishClicked.addObserver(function (){
			view.hide();
		});
		$(".clickAbleDish").click(function(evt){
			var id = $(this).attr('id');
			console.log(id);
			_this.clickAbleDishClicked.notifyObservers(evt);
		});
	}//update end
}// SelectTheDishesViewController end