//Link HTML/Canvas ID to JS
var canvas = document.getElementById('canvas');

//setting canvas to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //Declaring Additional Variables
var c = canvas.getContext('2d'); //Renders images in 2D
rectangles = []; //having rectagles fill entire window width
newBubbles = [];
var audio = new Audio();

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
    drawRectangle(){
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
        this.y = Math.floor((Math.random() * 40) / 100 * window.innerHeight);
        c.closePath();
    }
}

function drawAllRectangles(){
    for (var i = 0; i < window.innerWidth / 50; i++) {
        rectangles.push(new Rectangles(i));
        rectangles[rectangles.length - 1].drawRectangle();
    }            
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
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    }
}
//randomizing placement of bubbles to fill window
function init() {
    var vx = 0;
    var vy = 0;
    var r = 5;
    // var newBubbles = [];

    for (var i = 0; i < 500; i++) {
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        newBubbles.push(new Bubbles(x, y, vx, vy, r) );
        newBubbles[newBubbles.length -1].drawBubbles();
    }  
}

init(); //calling bubbles

//allows music to autoplay in Chrome with Event
// window.onload = function() {
//     var context = new AudioContext();
// //autoplay music on loop (doesn't work in Chrome without event)
// window.onload = function() {
//     document.getElementById('myAudio').play();    
//     }  
//   }

 //event listeners
window.addEventListener('load', updateMusic, false);
function updateMusic(){
    document.getElementById('myAudio').appendChild(audio);
    context = new AudioContext(); // AudioContext object instance
    visual = context.createAnalyser(); // AnalyserNode method
    // Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audio); 
	source.connect(visual);
	visual.connect(context.destination);
	animate();
}

// animate() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function animate(){
    window.requestAnimationFrame(animate); //requesting animation loop
    soundData = new Uint8Array(visual.frequencyBinCount);
    visual.getByteFrequencyData(soundData);
        c.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
        
        for(var j = 0; j< newBubbles.lenght; j++){
            newBubbles[i].drawBubbles();
            
        }
        //c.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < window.innerWidth / 50; i++) {
            rectangles[i].drawRectangle();  
            
        }
}
init();
drawAllRectangles();
animate();
//setInterval(animate, 2000);