var MyDinnerTableViewController = function (model) {
	this.startToSelectDishButtonClicked = new Event();
	this.selectDishToDinnerOverviewButtonClicked = new Event();
	var _this = this;
	$("#startToSelectDishButton").click(function () {
		_this.startToSelectDishButtonClicked.notifyObservers()
 	});
 	$("#selectDishToDinnerOverviewButton").click(function () {
 		_this.selectDishToDinnerOverviewButtonClicked.notifyObservers();
 	})
}