var MainController = function(model, mainView){
  $("#confirmDish").click(function() {
  mainView.page = "selectDish"
  mainView.refresh();})

}