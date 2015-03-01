var SelectTheDishesView = function (model) {
	var _this = this;

	this.show = function () {
 		$("#selectTheDishesDiv").show();
 	}// showMyDinnerTable end

 	this.hide = function () {
 		$("#selectTheDishesDiv").hide();
 	}// hideMyDinnerTable end


 	this.updateImages = function () {
 		$("#selectPICTdish").empty();
 		var index = 0;
 		var selectedType = $("#selectTypeForm").val()
 		var dishes = model.getAllDishes(selectedType, $("#searchBar").val());
		while(index < dishes.length){
			$('#selectPICTdish').append("<div class='img'>" +
			"<a id='" + dishes[index].id + " ' class='clickAbleDish'>" +
			  "<img  src=" + "images/" + dishes[index].image + " width='110' height='90'>" +
			  "<div class='desc'>" + dishes[index].name + "</div>" + 
			"</div>");
			index++;
		}
 	}// updateImages
}// SelectTheDishesView end