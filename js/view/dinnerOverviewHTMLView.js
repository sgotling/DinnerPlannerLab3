
var dinnerOverviewHTMLView = function(model){
	$("body").empty();
  var type = "main dish"

  var model = model;
  var menu = model.getFullMenu();

  var selectedDish = menu[2];

  var dishes = model.getAllDishes(type);
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();
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
	        "<a href='selectdish.html'>" +
	          "<button  type='button' style='float:right; padding:10pt; background:orange'>Go back and edit dinner</button>" +
	        "</a>" +
	      "</div>" +
	    "</div>" +
	    "<div class='col-sm-12 col-centered' id='dishOverview'>" +
	        "<div style='padding:10pt' id='overviewPict'>" +
	        "</div>" +
	    "</div>" +
	    "<div class='col-sm-12'>" +
	      "<a href='dinner_preparation.html'>" +
	        "<button  type='button' style='padding:10pt; background:orange'>Print Full Recipe</button>" +
	      "</a>" +
	    "</div>" +
	  "</div>");

	var index = 0;
		while(index < menu.length){
		    $('#overviewPict').append("<div class='img'>" +
			"<a href='dish.html' id='" + menu[index].name + "'>" +
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