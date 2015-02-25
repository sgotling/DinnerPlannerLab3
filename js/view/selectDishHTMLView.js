//När deta objekt skapas visas fönstret för selectDish
var selectDishHTMLView = function (model) {
  $("body").empty();
  var type = mainView.selectedType;

  var model = model;
  var menu = model.getFullMenu();
	console.log("menu in selectdishview " + menu + " heherherh");
  //var selectedDish = menu[2];

  var dishes = mainView.dishes;
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();
  
  
  
  
  		$("#Search").on('keyup', function(evt){
			if(evt.keyCode == 13) {
			dishes = model.getAllDishes(mainView.selectedType, $("#Search").val());
			mainView.dishes = dishes;
			mainView.refresh();
			}
			
		});

  //HTML-koden läggs in i body
$('body').append("<div style='height: 100%'>" +
  "<div class='col-sm-12' id='HommeleteGrey' style='background-color:lavender;'>" +    
    "<h1>Hommeleteblabla</h1>" +
    "- From best chefs in the world directly to your kitchen" +
  "</div>" +
  "<div class='col-sm-4' id='MyDinner' color='#??????'>" +
      "<h1>" +
      "My Dinner" +
      "</h1>" +
      "<div style>" +
      	"<input id = 'Guests'>" +
        "<label for='sel1'>Specify number of guests</label>" +
      "</div>" +           
        "<table class='table'>" +
          "<thead>" +
            "<tr>" +
              "<th>Type</th>" +
              "<th>Dishes</th>" +
              "<th>Cost</th>" +
            "</tr>" +
          "</thead>" +
          "<tbody id='menuDishes'>" +
         "</tbody>" +
        "</table>" +
        "<button id='selectDishToDinnerOverview' type='button' style=' background:orange'>Confirm dinner</button>" +
    "</div>" +
    "<div class='col-sm-8' >" +
      "<div class='col-sm-12' id='selectdish'>" +
        "<h1>SELECT DISH</h1>" +
			"<hr width='100%' style='color:#000000'>" +
          		"<div class='row'>" +
  				  "<div class='col-lg-6'>" +
    				"<div class='input-group'>" +
      				  "<input id='Search' type='text' class='form-control' placeholder='Search for...'>" +
      				  "<span class='input-group-btn'>" +
        			    "<button class='btn btn-default' type='button'>Go!</button>" +
      				  "</span>" +
                    "</div><!-- /input-group -->" +
                 "</div><!-- /.col-lg-6 -->" +
               "</div><!-- /.row -->" +
          "<div style id='ChooseADish'>" +
             "<select class='form-control' id='selectType'>" +
             	"<option>Select type</option>" +
               "<option value='starter'>Starters</option>" +
               "<option value='main dish'>Main dishes</option>" +
               "<option value='dessert'>Desserts</option>" +
             "</select>" +
          "</div> " +   
      "</div> <!-- /.selectdish -->" +   
      "<div class='col-sm-12' style='background-color:white;' style='padding:10pt; float:center;' id='selectPICTdish';> " +
      "</div> <!-- /.selectPICTdish -->" +
    "</div>" +
"</div>");




  var i = 0;
    while(i < menu.length){
      var price=0;
      var j = 0;
      while(j < menu[i].ingredients.length){
        price = price + menu[i].ingredients[j].price;
        j++;
      }
      $('#menuDishes').append('<tr><td>' + menu[i].type + '</td><td>' + menu[i].name + '</td><td>' + price * numberOfGuests + ' SEK' + '</td></tr>');
      i++;
      
    }
    $('#menuDishes').append('<tr><td>' + ' ' + '</td><td>Total</td><td>' + totalPrice + ' SEK' + '</td></tr>');
      
	

  var index = 0;
  while(index < dishes.length){
    //console.log(dishes[index].name);
    $('#selectPICTdish').append("<div class='img'>" +
    "<a id='" + dishes[index].id + " ' class='clickAbleDish'>" +
      "<img  src=" + "images/" + dishes[index].image + " width='110' height='90'>" +
      "<div class='desc'>" + dishes[index].name + "</div>" + 
    "</div>");
    index++;
  }


}
