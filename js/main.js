//Link HTML/Canvas ID to JS
var canvas = document.getElementById('canvas');

//setting canvas to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //Declaring Additional Variables
var c = canvas.getContext('2d'); //Renders images in 2D

//creation of rectangles
class Rectangles {
    constructor(x) {
        this.x = x*50;
        this.y = Math.floor((Math.random() * 40) / 100 * window.innerHeight);
        this.w = 50;
        this.h = 500;
        this.color = 'rgb(' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) 
                    + ',' + (Math.floor(Math.random() * 256)) + ')';
        }

    //actually drawing rectangles on canvas w/random colors
    drawRectangles(){
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
        this.x += this.w;
        this.y = Math.floor((Math.random() * 40) / 100 * window.innerHeight);
    }
}
    rectangles = []; //having rectagles fill entire window width
        for (var i = 0; i < window.innerWidth / 50; i++) {
        rectangles.push(new Rectangles(i));
        rectangles[rectangles.length - 1].drawRectangles();
}
    
//creation of bubbles
class Bubbles {
    constructor(x, y, vx, vy, r) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = 5;
    }
    //actually drawing circles/bubbles on canvas
    drawBubbles() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 2 * Math.PI, false);
        c.strokeStyle = 'rgba(255, 255, 255)';
        c.stroke();
        c.closePath();
    }
}
//randomizing number/amount of bubbles
function init() {
    var vx = 0;
    var vy = 0;
    var r = 5;
    var newBubbles = [];

    for (var i = 0; i < 500; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        newBubbles.push(new Bubbles(x, y, vx, vy, r) );
        newBubbles[newBubbles.length -1].drawBubbles();
    }
    
}

init(); //calling bubbles
// // Create a new instance of an audio object and adjust some of its properties





