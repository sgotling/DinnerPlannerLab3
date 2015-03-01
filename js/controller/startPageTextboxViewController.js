var StartPageTextboxViewController = function (startPageTextboxView) {
	this.startToSelectDishButtonClicked = new Event();
	var _this = this;
	$("#startToSelectDishButton").click(function () {
		_this.startToSelectDishButtonClicked.notifyObservers();
	});

}










