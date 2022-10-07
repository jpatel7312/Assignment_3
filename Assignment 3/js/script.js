$(document).ready(function () {
	getJsonData(); //calling Method 1 
	//usingAjaxCall(); //calling Method 2	
});

var getJsonData = function () {
	$.getJSON("team.json", function(data){
			$.each(data.persons, function(){
			$("#team").append("<h2>" +this['name']+ "</h2>"+ "<h5>" +this['position']+ "</h5>"+ "<p>" +this['bio']+ "</p>"+"<br>");					
			});        
	});
}

var usingAjaxCall = function () {
	
	document.getElementById("team").innerHTML = "Laoding....";

	$.ajax({
		url:'team.json',
		dataType: 'json',
		type: 'GET',
		success: function(data) {
			setTimeout(function() { 
				$("#team").text("").fadeIn();
				$(data.persons).each(function(index,value) {
				$("#team").append("<h2>" + value.name+ "</h2>"+ "<h5>" + value.position+ "</h5>"+ "<p>" + value.bio+ "</p>"+"<br>");					
			});        
            }, 3000);
		},
		error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        $("#team").html("content could not be retrived");
      }
	});	
}