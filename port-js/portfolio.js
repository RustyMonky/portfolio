$(document).ready(function(){

	$(".contact-me").on("click", function(){
		console.log("It's working");
		$("#contact-form").removeClass("hide");
	});

	$("#hide-contact").on("click", function(){
		$("#contact-form").addClass("hide");
	});

})