 var MyDinnerTableView = function (myDinnerTableViewController, model) {
 	var _this = this
 	myDinnerTableViewController.startToSelectDishButtonClicked.addObserver(function () {
 		_this.showMyDinnerTable()
 	})

 	myDinnerTableViewController.selectDishToDinnerOverviewButtonClicked.addObserver(function () {
 		_this.hideMyDinnerTable()
 	})

 	myDinnerTableViewController.startToSelectDishButtonClicked.addObserver(function () {
 		_this.myDinnerTableInformationUpdate()
 	})

 	this.showMyDinnerTable = function () {
 		$("#myDinnerTable").show();
 	}// showMyDinnerTable end

 	this.hideMyDinnerTable = function () {
 		$("#myDinnerTable").hide();
 	}// hideMyDinnerTable end

 	this.myDinnerTableInformationUpdate = function () {

 		var menu = model.getFullMenu();
 		var numberOfGuests = model.getNumberOfGuests();
 		var totalPrice = model.getTotalMenuPrice();

	 	var i = 0;
	    while(i < menu.length){
	      var price=0;
	      var j = 0;
	      while(j < menu[i].ingredients.length){
	        price = price + menu[i].ingredients[j].price;
	        j++;
	      }
	      $('#menuDishes').append('<tr><td>' + menu[i].type + '</td><td>' 
	      + menu[i].name + '</td><td>' + price * numberOfGuests + ' SEK' 
	      + '</td><td><button id="' + menu[i].id + '" type="button" class="btn btn-danger removeDish">X</button></td></tr>');
	      i++;
	    while(i > menu.length){
	      var price=0;
	      }

	      $(".removeDish").click(function () {
	        id = parseInt(this.id);
	        model.removeDishFromMenu(id);
	      });
	    }
    	$('#menuDishes').append('<tr><td>' + ' ' + '</td><td>Total</td><td>' + totalPrice + ' SEK' + '</td></tr>');
 	}// myDinnerTableInformationUpdate end
 	
 }// MyDinnerTableView end