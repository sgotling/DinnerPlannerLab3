var dishHTMLView = function (model) {
  $("body").empty();
  var type = "main dish"

  var model = model;
  var menu = model.getFullMenu();

  var selectedDish = menu[2];

  var dishes = model.getAllDishes(type);
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();

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
  "      <input> <!-- Probably to be fixed -->" +
   "     <label for='sel1'>Specify number of guests</label>" +
   "   </div>        " +   
  "      <table class='table'>" +
 "         <thead>" +
 "             <th>Cost</th>" +
 "             <th>Dishes</th>" +
 "           </tr>" +
 "         </thead>" +
 "         <tbody id='menuDishes'>" +
 "         </tbody>" +
 "       </table>" +
"        <button id='dishToDinnerOverview' type='button' style=' background:orange'>Confirm dinner</button>" +
"    </div> " +
"  <div class='col-sm-8' id='Dish'>" +
"    <div class='col-sm-6'>" +
"      <h1 id='dishHead'></h1>" +
"      <div width='100%' color='#000000;' id='dishImage'>" +
"      </div>" +
"    </div>" +
"    <div class='col-sm-6' id='ing'>" +
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
"    <div class='col-sm-6' id='theDish'> " +     
"    </div> <!-- /.theDish -->   " +  
"  </div>" +
"  <div class='col-sm-8' style='padding:10pt'>" +
"    <div class='col-sm-12' style='padding:10px'>" +
"        <button id='dishToSelectDish' type='button' style=' background:orange'>Go back and edit dinner</button>" +
"    </div> " +
"    <p>" +
"    <h4>PREPARATION</h4>" +
"    </p>" +
"    <p id='dishPreparation'>" +
"    </p>" +
"  </div>    " +
"</div>");




  $('#dishHead').append(selectedDish.name);
  $('#dishImage').append("<img src='images/" + selectedDish.image + "' alt='Klematis' class='img-thumbnail' alt='Cinque Terre' width='304' height='236'>");
  $('#dishPreparation').append(selectedDish.description);

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


  $("#dishToSelectDish").click(function() {
  mainView.page = "selectDish"
  mainView.refresh();})

  $("#dishToDinnerOverview").click(function() {
  mainView.page = "dinnerOverview"
  mainView.refresh();})

  $("#confirmDish").click(function() {
  mainView.page = "selectDish"
  mainView.refresh();})





//dish end
}



