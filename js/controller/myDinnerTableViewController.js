var MyDinnerTableViewController = function (view, model) {
	this.startToSelectDishButtonClicked = new Event();
	this.selectDishToDinnerOverviewButtonClicked = new Event();
	var _this = this;


	$("#startToSelectDishButton").click(function () {
		view.show();
 	});
 	$("#selectDishToDinnerOverviewButton").click(function () {
 		view.hide();
 	})

 	$("#Guests").change(function(){

			model.setNumberOfGuests($("#Guests").val());

		});
 	
}// MyDinnerTableViewController end