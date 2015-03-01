//När deta objekt skapas visas fönstret för dinnerOverview
var dinnerOverviewHTMLView = function(model){
	$("body").empty();

  var model = model;
  var menu = model.getFullMenu();
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();



  //HTML-koden läggs in i body
	$('body').append("<div>" +
	    "<div class='col-sm-12' id='HommeleteGrey' style='background-color:lavender;'> " +   
	      "<h1>Hommeleteblabla</h1>" +
	      "- From best chefs in the world directly to your kitchen" +
	    "</div>" +
	    "<div class='col-sm-12' id='selectdish'>" +
	      "<div class='col-sm-6'>" +
	        "<h1>My Dinner: x people</h1>" +
	     " </div>" +
	      "<div class='col-sm-6'>" +
	          "<button id='dinnerOverviewToSelectDish' type='button' style='float:right; padding:10pt; background:orange'>Go back and edit dinner</button>" +
	      "</div>" +
	    "</div>" +
	    "<div class='col-sm-12' id='dishOverviewPicturesDiv'>" +
	    	"<div class='col-sm-12 col-centered' id='dishOverview'>" +
	        	"<div style='padding:10pt' id='overviewPict'>" +
	        	"</div>" +
	    	"</div>" +
	    "</div>" +
	    "<div class='col-sm-12'>" +
	        "<button id='dinnerOverviewToDinnerPreparation' type='button' style='padding:10pt; background:orange'>Print Full Recipe</button>" +
	    "</div>" +
	  "</div>");

	var index = 0;
		while(index < menu.length){
		    $('#overviewPict').append("<div class='img'>" +
			"<a id='" + menu[index].id + "' class='clickAbleDish'>" +
				"<img src=" + "images/" + menu[index].image + " width='110' height='90'>" +
				"<div class='desc'>" + menu[index].name + "</div>" + 
			"</div>" +
			"<script>" +
			"$('#" + menu[index].name + "').click(function() {" +
			"});" +
			"</script>");
			index++;
		}







}