var MainController = function (model, mainView) {

	this.startViewController = function () {
		//Knappevent
		$("#startToSelectDish").click(function() {


  			mainView.page = "selectDish"
  			mainView.refresh();})

	}

	this.selectDishViewController = function () {
		//Knappevent

		/* $("#Guests").on('keyup', function(evt){
			if(evt.keyCode == 13) {
			model.setNumberOfGuests($("#Guests").val());
			
			mainView.refresh();
			}
			
		}); */  //BEHÖVS INTE KANSKE

		$("#Guests").change(function(){
			model.setNumberOfGuests($("#Guests").val());
			mainView.refresh();
		});


		
		$("#selectType").change(function(){
			mainView.selectedType = $("#selectType").val();
			mainView.dishes=model.getAllDishes(mainView.selectedType);
			mainView.refresh();
		});
		
		$("#selectDishToDinnerOverview").click(function() {
		  mainView.page = "dinnerOverview";
		  mainView.refresh();})


		$(".clickAbleDish").click(function() {

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


	this.dishViewController = function(e) {
		$("#confirmDish").click(function() {
			var id = mainView.selectedDish.id;
			//var dish = model.getDish(id);
			//console.log(dish);			
			model.addDishToMenu(id);
			mainView.page = "selectDish"
			mainView.refresh();})
			
		$("#removeDish").click(function() {
			var id = mainView.selectedDish.id;
			//var dish = model.getDish(id);
			//console.log(dish);			
			model.removeDishFromMenu(id);
			mainView.page = "selectDish"
			mainView.refresh();})
	
	}
}