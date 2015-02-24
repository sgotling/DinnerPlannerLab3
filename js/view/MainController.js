var MainController = function (model, mainView) {

	this.startViewController = function () {
		//Knappevent
		$("#startToSelectDish").click(function() {
  			mainView.page = "selectDish"
  			mainView.refresh();})


	}

	this.selectDishViewController = function () {
		//Knappevent
		$("#selectDishToDinnerOverview").click(function() {
		  mainView.page = "dinnerOverview";
		  mainView.refresh();})


		$("#selectDishToDinnerOverview").click(function() {
		  mainView.page = "dinnerOverview";
		  mainView.refresh();})


		$(".clickAbleDish").click(function(e) {

		  var id = $(this).attr('id');
		  dish = model.getDish(id);
		  mainView.selectedDish = dish;
		  mainView.page = "dish";
		  mainView.refresh()
		  ;})
	}

	this.dinnerOverviewViewController = function () {
		//Knappevent
		$("#dinnerOverviewToSelectDish").click(function() {
		  
		  mainView.page = "selectDish"
		  mainView.refresh();})

		//Knappevent
		$("#dinnerOverviewToDinnerPreparation").click(function() {
		  
		  mainView.page = "dinnerPreparation"
		  mainView.refresh();})

		//Event när man trycker på bild 
		$(".clickAbleDish").click(function(e) {

		  var id = $(this).attr('id');
		  dish = model.getDish(id);
		  mainView.selectedDish = dish;
		  mainView.page = "dish";
		  mainView.refresh()
		  ;})
	}

	this.dinnerPreparationViewController = function () {
		  //Knappevent
		  $("#dinnerPreparationToSelectDish").click(function() {
		  
		  mainView.page = "selectDish"
		  mainView.refresh();})
			}


	this.dishViewController = function () {
		$("#confirmDish").click(function() {
			mainView.page = "selectDish"
			mainView.refresh();})
	}
}