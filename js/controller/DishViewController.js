//Används verkligen denna?
// NEJ... det var min försök att separera kontrollers men sedan struntade jag i det... 

var DishViewController = function(model, mainView){
  
  	this.ConfirmDishController = function(e) {
		$("#confirmDish").click(function() {
			mainView.page = "selectDish"
			mainView.refresh();})
	}
	this.dinnerPreparationViewController = function () {
		  //Knappevent
		  $("#dinnerPreparationToSelectDish").click(function() {
		  
		  mainView.page = "selectDish"
		  mainView.refresh();})
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
		  
		  dish = model.getDish(id);
		  mainView.selectedDish = dish;
		  mainView.page = "dish";
		  mainView.refresh()
		  ;})
	}
	this.selectDishViewController = function () {
		//Knappevent

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

}