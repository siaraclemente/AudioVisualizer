//Link HTML/Canvas ID to JS
var canvas = document.getElementById('canvas');

//setting canvas to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //Declaring Additional Variables
var c = canvas.getContext('2d'); //Renders images in 2D

//rectangles
var rectX = 0;
var rectY = Math.floor((Math.random() * 40) / 100 * window.innerHeight);
var rectW = 50;
var rectH = 500;

var rectColor = 'rgb(' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) + ')';


for (var i = 0; i < window.innerWidth/50; i++) {
    c.beginPath();
    c.fillStyle = rectColor;
    c.fillRect(rectX, rectY, rectW, rectH);
    rectX += rectW;
    rectY = Math.floor((Math.random() * 40) / 100 * window.innerHeight);
    rectColor = 'rgb(' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) + ')';
    console.log(rectColor);
}

// circles
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'green';
// c.stroke();

// var x = 200;
// var y = 200;
// var vx = 4;
// var vy = 4;
// var radius = 30;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, 200, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'green';
//     c.stroke();

//     if (x + radius  > innerWidth || x - radius < 0) {
//         vx = -vx;
//     }

//     // if (y + radius > innerHeight || y - radius < 0) {
//     //     vy = -vy;
//     // }

//     x += vx;
//     y += vy;
// }

// animate();
// console.log('hi');

//create bubbles
for (var i = 0; i < 500; i++) {
    var bubbleX = Math.random() * window.innerWidth;
    var bubbleY = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(bubbleX, bubbleY, 5, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(255, 255, 255)';
    c.stroke();
}


