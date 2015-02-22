var startHTMLView = function (model) {
  $("body").empty();
  var type = "main dish"

  var model = model;
  var menu = model.getFullMenu();

  var selectedDish = menu[2];

  var dishes = model.getAllDishes(type);
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();
$('body').append("  <body background='http://i.huffpost.com/gen/1534838/thumbs/o-FAMILY-DINNER-facebook.jpg'>" +
    "<div id='Hommelete'>" +
     "<h1>Hommelette</h1>" +
     "- From best chefs in the world directly to your kitchen" +
    "</div>" +
    "<div id='Textbox'>" +
    "<h1>" +
      "A Home Dinner Service" +
      "</h1>" +
      "<hr>" +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
      "<p>" +
        "<button id='startToSelectDish' type='button' class='btn btn-warning' style='padding:10pt;'>Create a new dinner</button>" +
      "</p>" +
    "</div>" +
  "</body>");


$("#startToSelectDish").click(function() {
  
  mainView.page = "selectDish"
  mainView.refresh();})


}




