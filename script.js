var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gradient=ctx.createLinearGradient(0,0,100,100);
gradient.addColorStop(0 , "red");
gradient.addColorStop(1, "orange");


ctx.fillStyle = gradient;

ctx.fillRect (0,0,1000,1000);

var canvasYell = document.getElementById('canvasYell');
var context = canvasYell.getContext('2d');

var gradientYe = context.createLinearGradient(0,0,100,100);

gradientYe.addColorStop(0, "orange");

gradientYe.addColorStop(1, "yellow");

context.fillStyle = gradientYe;

context.fillRect(0,0,1000,1000);