//Link HTML/Canvas ID to JS
var canvas = document.getElementById('canvas');

//setting canvas to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //Declaring Additional Variables
var c = canvas.getContext('2d'); //Renders images in 2D
var rectangles = []; 
var newBubbles = []; 
var ctx = new AudioContext();
var analyser = ctx.createAnalyser();

//music
var audio = new Audio();
// audio.src = 'MP3/game.mp3';
// audio.controls = true;
// audio.loop = true;
// audio.autoplay = true;
// audio.crossOrigin = 'anonymous'; //Attempt at CORS work around

//creation of rectangles
class Rectangles {
    constructor(x){
        this.x = x * 50;
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

//having rectagles fill entire window width
function drawAllRectangles(){ 
    for (var i = 0; i < window.innerWidth / 50; i++){
        rectangles.push(new Rectangles(i));
        rectangles[rectangles.length - 1].drawRectangle();
    }            
}

//creation of bubbles
class Bubbles {
    constructor(x, y, vx, vy, r){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = 5;
    }

    // actually drawing one circle/bubble on canvas
    drawBubbles(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 2 * Math.PI, false);
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    }



    //drawing animation of bubbles
    float(){
        
        //collision detection
        if (this.x + this.r > innerWidth || 
            this.x - this.r < 0){
                this.x = -this.vx;
            } 
        if (this.r + this.y > innerHeight ||
            this.y - this.drawBubbles.r < 0){
                this.y = -this.vx;
            }
            this.x += this.vx; 
            this.y += this.vx;
    }  
}

//repetively drawing bubbles to fill window
function init(){
    var vx = .05;
    var vy = .05;
    var r = 5;

    for (var i = 0; i < 500; i++){
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        newBubbles.push(new Bubbles(x, y, vx, vy, r));
    }  
} 

//event listeners
window.addEventListener('mousemove', function (event){
    console.log('hi');
     });
    
//allows music to autoplay in Chrome with Event
//autoplay music on loop (doesn't work in Chrome without event)
window.addEventListener('click', function(){
    ctx.resume().then()
      console.log('Playback resumed successfully');
  });

window.addEventListener('load', updateMusic, false);
function updateMusic(){
    analyser = ctx.createAnalyser(); // AnalyserNode method
    // Re-route audio playback into the processing graph of the AudioContext
	source = ctx.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(ctx.destination);
	animate();
}

// animate() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function animate(){
    window.requestAnimationFrame(animate); //requesting animation loop
    soundData = new Uint8Array(analyser.frequencyBinCount); //array representation of data sound frequency //making animation happen
    analyser.getByteFrequencyData(soundData);
    c.clearRect(0, 0, canvas.width, canvas.height); //clear canvas every time function loops
        
        //looping bubbles consistently
        for (let i = 0; i < newBubbles.length; i++){
         newBubbles[i].drawBubbles();
           newBubbles[i].float();
        }

        //looping rectangles consistently
        rectangles = [];
        for (var i = 0; i < window.innerWidth / 50; i++){
            rectangles.push(new Rectangles(i));
            rectangles[rectangles.length - 1].drawRectangle();
        }         
}

init();
// drawBubbles(); BROKE IT
drawAllRectangles();
animate();