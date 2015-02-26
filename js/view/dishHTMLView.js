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
"  <div class='col-sm-8' id='Dish'>" +
"    <div id='dishInformaiton' class='col-sm-6'>" +
"      <h1 id='dishHead'></h1>" +
"      <div width='100%' color='#000000;' id='dishImage'>" +
"      </div>" +

"     <h4>PREPARATION</h4>" +

"    </div><!-- / .dishInformaiton-->" +
"    <div class='col-sm-4' id='ingredientsDiv'>" +
"      <table class='table' id='ingTable'>" +
"            <thead>" +
"              <tr>" +
"                <th width='5%'>Quantity</th>" +
"                <th width='10%'>Ingredient</th>" +
"                <th width='40%'>Price</th>" +
"              </tr>" +
"            </thead>" +
"            <tbody id='tableElement'>" +
"            </tbody>" +
"          </table>" +
"    </div>" + 
"    <div class='col-sm-4' style='padding:10px'>" +
"        <button id='dishToSelectDish' type='button' style=' background:orange'>Go back and edit dinner</button>" +
"    </div> " +

"    </div> <!-- /.theDish -->   " + 

"  </div>" +

"</div>");

  $('#dishHead').append(selectedDish.name);
  $('#dishImage').append("<img src='images/" + selectedDish.image + "' alt='Klematis' class='img-thumbnail' alt='Cinque Terre' width='304' height='236'>");
  $('#dishInformaiton').append(selectedDish.description);

  var i = 0;
  while(i < selectedDish.ingredients.length){
    //console.log(selectedDish.ingredients[i].name);
    $('#tableElement').append('<tr><td>' + selectedDish.ingredients[i].quantity + 
     " " + selectedDish.ingredients[i].unit + '</td><td>' + selectedDish.ingredients[i].name + '</td>' +
     '<td>' + selectedDish.ingredients[i].price + " SEK" + '</td></tr>');

    i++;
  }
  $('#tableElement').append("<button id='confirmDish' type='button' style='background:orange'>Confirm dish" + 
    "</button></a>");



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



