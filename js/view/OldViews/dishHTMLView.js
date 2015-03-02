//När deta objekt skapas visas fönstret för dish
var dishHTMLView = function (model) {
  $("body").empty();

  var model = model;
  var menu = model.getFullMenu();
  var selectedDish = mainView.selectedDish;
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();


//HTML-koden läggs in i body
$('body').append("<div style='height: 100%'>" +
"  <div class='col-sm-12' id='HommeleteGrey' style='background-color:lavender;'>" +    
 "     <h1>Hommeleteblabla</h1>" +
  "  - From best chefs in the world directly to your kitchen" +
  "</div>" +
"    <div class='col-sm-4' id='MyDinner' color='#??????'>" +
"      <h1>" +
"      My Dinner" +
"      </h1>" +
 "     <div style>" +
  "     <input type='number' size='10' id='Guests' name='mynumber' value='" + numberOfGuests + "' min='1' />" +
   "     <label for='sel1'>Specify number of guests</label>" +
   "   </div>        " +   
  "      <table class='table'>" +
 "         <thead>" +
              "<th>Type</th>" +
              "<th>Dishes</th>" +
              "<th>Cost</th>" +
              "<th>Remove dish</th>" +
 "           </tr>" +
 "         </thead>" +
 "         <tbody id='menuDishes'>" +
 "         </tbody>" +
 "       </table>" +
"        <button id='dishToDinnerOverview' type='button' style=' background:orange'>Confirm dinner</button>" +
"    </div> " +
"   </div> " +


"</div>");

 



  /*$('#myDinner').append("<div class='col-sm-4'  color='#??????'>" +
      + "<h1>My Dinner</h1>" +
      + "<div style>" +
        "<input> <!-- Probably to be fixed -->"+
        "<label for='sel1'>Specify number of guests</label>"+
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
    "</div>");*/   // KANSKE TA BORT!!!!!!
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
      + '</td><td><button id="removeDish" type="button" class="btn btn-danger">X</button></td></tr>');
      i++;
      
    }
    $('#menuDishes').append('<tr><td>' + ' ' + '</td><td>Total</td><td>' + totalPrice + ' SEK' + '</td></tr>');


  //Knappevent

  $("#dishToSelectDish").click(function() {
  mainView.page = "selectDish"
  mainView.refresh();})

  $("#dishToDinnerOverview").click(function() {
  mainView.page = "dinnerOverview"
  mainView.refresh();})

  





//dish end
}



