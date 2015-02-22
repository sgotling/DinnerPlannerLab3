  


var DishesView = function(model){

var type = "starter"
//var model = new DinnerModel;
model.addDishToMenu(3);
model.addDishToMenu(1); 
model.addDishToMenu(2); 
var menu = model.getFullMenu();
var dishes = model.getAllDishes(type);
var totalPrice = model.getTotalMenuPrice();
var numberOfGuests = model.getNumberOfGuests();
var selectedDish = menu[2];

//this.headerGrey = function() {

    $('#header').append("<div class='col-sm-8' id='Dish'>"+
    "<div class='col-sm-6'>"+
      "<h1 id='dishHead'></h1>"+
      "<div width='100%' color='#000000;' id='dishImage'>"+
      "</div>"+
    "</div>"+
    "<div class='col-sm-6' id='ing'>"+
      "<table class='table' id='ingTable'>"+
            "<thead>"+
              "<tr>"+
                "<th width='5%'>Quantity</th>"+
                "<th width='10%'>Ingredient</th>"+
                "<th width='40%'>Price</th>"+
              "</tr>"+
            "</thead>"+
            "<tbody id='tableElement'>"+
            "</tbody>"+
          "</table>"+
    "</div>"+
    "<div class='col-sm-6' id='theDish'>    "+  
    "</div> <!-- /.theDish -->   "+  
  "</div>"+
  "<div class='col-sm-8' style='padding:10pt'>"+
    "<div class='col-sm-12' style='padding:10px'>"+
      "<a href='selectdish.html'>"+
        "<button type='button' style=' background:orange'>Go back and edit dinner</button>"+
      "</a>"+      
    "</div> "+
    "<p>"+
    "<h4>PREPARATION</h4>"+
    "</p>"+
    "<p id='dishPreparation'>"+
    "</p>"+
  "</div>");

}//DishesView end