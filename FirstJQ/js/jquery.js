/*=====================================*/
$(document).ready(function () {
	// hide function
	$("#hide").click(function () {
		$(".h1-1").hide(500);
		$("#img1").hide(500);
	});
	// show function
	$("#show").click(function(){
		$(".h1-1").show(500);
		$("#img1").show(500);
	});
	// toggle function
	$("#toggle").click(function(){
		$(".h1-1").toggle(500);
		$("#img1").toggle(500);
	});
	// callback function
	$("#callback").click(function () {
		$(".h1-1").hide(500,function(){
			$(".h1-1").show(1000);
		});
		$("#img1").hide(500,function(){
			$("#img1").show(1000);
		});
	});
/*=====================================*/
	// fadeIn function()
	$("#fadein").click(function(){
		$(".h1-2").fadeIn(1000);
		$("#img2").fadeIn(1000);
	});
	// fadeIn function()
	$("#fadeout").click(function(){
		$(".h1-2").fadeOut(1000);
		$("#img2").fadeOut(1000);
	});
	$("#fadetoggle").click(function(){
		$(".h1-2").fadeToggle(1000);
		$("#img2").fadeToggle(1000);
	});
	$("#fadeto").click(function(){
		$(".h1-2").fadeTo(2000,0);
		$("#img2").fadeTo(2000,0);
	});
/*=====================================*/
	// slideDown() function
	$("#slidedown").click(function(){
		$(".h1-3").slideDown();
		$("#img3").slideDown();
	});
	// slideUp() function
	$("#slideup").click(function(){
		$(".h1-3").slideUp();
		$("#img3").slideUp();
	});
	// slideToggle() function
	$("#slidetoggle").click(function(){
		$(".h1-3").slideToggle(2000);
		$("#img3").slideToggle(2000);
	});
/*=====================================*/
/*=====================================*/
/*=====================================*/
});