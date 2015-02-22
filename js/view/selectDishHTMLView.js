var selectDishHTMLView = function (model) {
  $("body").empty();
  var type = "main dish"

  var model = model;
  var menu = model.getFullMenu();

  var selectedDish = menu[2];

  var dishes = model.getAllDishes(type);
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();
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
      	"<input> <!-- Probably to be fixed -->" +
        "<label for='sel1'>Specify number of guests</label>" +
      "</div>" +           
        "<table class='table'>" +
          "<thead>" +
            "<tr>" +
              "<th>Cost</th>" +
              "<th>Dishes</th>" +
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
			"<hr width='100%' color='#000000;'>" +
          		"<div class='row'>" +
  				  "<div class='col-lg-6'>" +
    				"<div class='input-group'>" +
      				  "<input type='text' class='form-control' placeholder='Search for...'>" +
      				  "<span class='input-group-btn'>" +
        			    "<button class='btn btn-default' type='button'>Go!</button>" +
      				  "</span>" +
                    "</div><!-- /input-group -->" +
                 "</div><!-- /.col-lg-6 -->" +
               "</div><!-- /.row -->" +
          "<div style id='ChooseADish'>" +
             "<select class='form-control' id='sel1'>" +
              "<option>Main dishes</option>" +
              "<option>Starters</option>" +
              "<option>Desserts</option>" +
              "<option>Drink</option>" +
              "<option>Alkohol</option>" +
              "<option>" +
                "<a href='www.example.com'>Example Site</a>" +
              "</option>" +
             "</select>" +
          "</div> " +   
      "</div> <!-- /.selectdish -->" +   
      "<div class='col-sm-12' style='background-color:white;' style='padding:10pt; float:center;' id='selectPICTdish';> " +
      "</div> <!-- /.selectPICTdish -->" +
    "</div>" +
"</div>");


    $('#myDinner').append("<div class='col-sm-4'  color='#??????'>" +
          + "<h1>My Dinner</h1>" +
          + "<div style>" +
            "<input> <!-- Probably to be fixed -->"+
            "<label for='sel1'>Specify number of guests</label>"+
          "</div>" +           
            "<table class='table'>" + 
              "<thead>" + 
                "<tr>" + 
                  "<th>Cost</th>" + 
                  "<th>Dishes</th>" + 
                "</tr>" + 
              "</thead>" + 
              "<tbody id='menuDishes'>" + 
              "</tbody>" + 
            "</table>" + 
        "</div>"); 


  var i = 0;
    while(i < menu.length){
      var price=0;
      var j = 0;
      while(j < menu[i].ingredients.length){
        //console.log(menu[i] + menu[i].ingredients[j].price);
        price = price + menu[i].ingredients[j].price;
        //console.log(price);
        j++;
      }
      $('#menuDishes').append('<tr><td>' + price * numberOfGuests + ' SEK' + '</td><td>' + menu[i].name + '</td></tr>');
      i++;
    }
    $('#menuDishes').append('<tr><td>' + totalPrice + ' SEK' + '</td><td>Total</td></tr>');
      i++;


  var index = 0;
  while(index < dishes.length){
    //console.log(dishes[index].name);
    $('#selectPICTdish').append("<div class='img'>" +
    "<a id='" + dishes[index].name + " ' class='clickAbleDish'>" +
      "<img src=" + "images/" + dishes[index].image + " width='110' height='90'>" +
      "<div class='desc'>" + dishes[index].name + "</div>" + 
    "</div>");
    index++;
  }

$("#selectDishToDinnerOverview").click(function() {
  mainView.page = "dinnerOverview";
  mainView.refresh();})


$("#selectDishToDinnerOverview").click(function() {
  mainView.page = "dinnerOverview";
  mainView.refresh();})


$(".clickAbleDish").click(function() {
  mainView.page = "dish";
  mainView.refresh();})




}
