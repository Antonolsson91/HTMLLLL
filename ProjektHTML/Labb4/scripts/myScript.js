$(document).ready(function () {
    //console.log("ready!"); 
    draw();
});

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d')



    var my_gradient = ctx.createLinearGradient(10, 10, 10, 400);
    my_gradient.addColorStop(0, "white");
    my_gradient.addColorStop(0.5, "blue");
    my_gradient.addColorStop(1, "brown");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


}