//När deta objekt skapas visas fönstret för selectDish
var selectDishHTMLView = function (model) {
  $("body").empty();
  var type = mainView.selectedType;
  var model = model;
  var menu = model.getFullMenu();
  //var selectedDish = menu[2];

  var dishes = mainView.dishes;
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();
  
  
  


  //HTML-koden läggs in i body
$('body').append("<div style='height: 100%'>" +
  "<div class='col-sm-12' id='HommeleteGrey' style='background-color:lavender;'>" +    
    "<h1>Hommeleteblabla</h1>" +
    "- From best chefs in the world directly to your kitchen" +
  "</div>" +
 
    "<div class='col-sm-2' >" +
    "</div>" +
    
"</div>");


$("body").css("background-image", "url(http://uq.edu.au/sustainability/images/custom/sustainablefood/VegetableBasket.jpg)");  



  


    
      
	



}
