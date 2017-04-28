$(document).ready(function() {
	$(".hide").click(function() { 
		$(".header").fadeOut(1000);
		$(".hide").fadeOut(1000);
		$(".tip").fadeOut(1000);
	});
});

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillRect(100, 0, 25, 600);