$(document).ready(function() 
{
	$(".hidden").hide();
	/*$(".hide").click(function() 
	{ 
		$(".header").fadeOut(1000);
		$(".hide").fadeOut(1000);
		$(".tip").fadeOut(1000);
	});*/
});

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillRect(0, 200, 600, 25);
ctx.fillRect(0, 400, 600, 25);

var img = document.getElementById("man");
//ctx.drawImage(img,10,10);


var y = 10
var x = 10
var z = 25

setInterval(function() { 
	if(y < 67) {
		ctx.clearRect(0,0,600,200);
		y += 0.2
		x -= 1
		z += 0.2
		//ctx.drawImage(img, 10, 10, 20, 25, 10, 10, 50, 60);
		ctx.drawImage(img, y, 10, 20, 25, y, 10, 50, 60);
	}
},0.0000000005);
var flag=1;
function fade()
{
	var el=document.querySelector("#headcontainer");
	var win=document.querySelector("#canvas")
	if(this.innerHTML=="Fullscreen")
	{
		this.innerHTML="Exit Fullscreen";	
		el.style.opacity="0";
		win.style.width="700px";
		win.style.height="750px";
		win.style.top="10px";
	}
	else
	{
		this.innerHTML="Fullscreen";
		el.style.opacity="1";
		win.style.width="600px";
		win.style.height="600px";
		win.style.top="150px";
	}
}

document.querySelector(".hide").addEventListener("click",fade,false);
