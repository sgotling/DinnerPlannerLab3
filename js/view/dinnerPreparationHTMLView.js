//När deta objekt skapas visas fönstret för dinnerPreparation

var dinnerPreparationHTMLView = function(model){
  $("body").empty();

  var model = model;
  var menu = model.getFullMenu();
  var totalPrice = model.getTotalMenuPrice();
  var numberOfGuests = model.getNumberOfGuests();

  //HTML-koden läggs in i body
  $('body').append("<div class='inner'>" +
      "<div class='col-sm-12' id='HommeleteGrey' style='background-color:lavender;'>    " +
        "<h1>Hommeleteblabla</h1>" +
        "- From best chefs in the world directly to your kitchen" +
      "</div>" +
      "<div class='col-sm-12' id='selectdish'>" +
        "<div class='col-sm-6'>" +
          "<h1>My Dinner: x people</h1>" +
        "</div>" +
        "<div class='col-sm-6'>" +
            "<button id='dinnerPreparationToSelectDish' type='button' style='float:right; padding:10pt; background:orange'>Go back and edit dinner</button>" +
        "</div>" +
      "</div>" +
      "<div id='preparationList' ></div>" +
    "</div>");
  var i = 0;

  while(i < menu.length){
    //console.log(selectedDish.ingredients[i].name);
    $('#preparationList').append("<div class='col-sm-12' id='Dish1'>" +
        "<div class='col-sm-6' id='pictAndDescrip'>" +
          "<div class='col-sm-6' style='padding:10pt' id='pict'>" +
              "<img src='images/" + menu[i].image +"' width='110' height='90'>" +
          "</div>" +
          "<div class='col-sm-6' id='descrip'>" +
            "<p>" +
              "<h3>" + menu[i].name + "</h3>" +
            "</p>" +
            "<p>" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
            "</p></div></div>" +
        "<div class='col-sm-6' id='preparation'>" +
          "<p>" +
            "<h4>PREPARATION</h4>" +
          "</p><p>" +
          menu[i].description +
          "</p></div></div>");
    i++;
  }





}