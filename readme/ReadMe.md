# AudioVisualiser

### I Made This: 
http://previous-toad.surge.sh/ "Bubbles/No Audio Controls" 
![Bubbles/No Audio Controls](https://github.com/siaraclemente/wdiproject1game/blob/master/readme/screenshot3.jpg)

http://cloistered-doll.surge.sh/ "No Bubbles/Audio Controls" 
![No Bubbles/Audio Controls](https://github.com/siaraclemente/wdiproject1game/blob/master/readme/screenshot1.jpg) 

### What is It?: 
An audio visualizer. Play your favorite songs, and watch the random, colorful bars fill your screen and synchronize to the beat!

### Purpose: 
Music/Entertainment and/or Stress-reliever/Break from reality

### This is For: 
People of any age who enjoy music and visualizing the beat. This isn’t so much a game as it is for entertaining yourself, or friends at parties, or a break from reality, or an attention grabber for young children.

### Instructions: 
Play your favorite songs, and watch the music synchronize to the colorful bars!

### What It Has/What Was Used:
* Linked to Audio (in a loop)
* Audio Player Controls
* Web Audio API
* Canvas
* Mouse Click 
* Mouseover

### Issues I Ran Into:
* Had to learn Canvas, plus additional requirements regarding music analysers.

* This: 
Access to audio at 'file:///Users/siara/Desktop/GA-Projects/Game2/MP3/game.mp3' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https. 

** In short CORS blocked me from synchronizing the music to my canvas element, leaving the canvas running consistently at the default rate. SetTimeout slowed it down to start, but SetInterval was blatantly ignored, code would’ve had to be completely re-written. I may have found another alternative as well, potential work around with ArrayBuffer, which I believe would allow me set things accordingly, vs working with a default.

* Chrome defaults to autoPlay being being disabled (when controls aren’t provided), thus leaving me with the decision of wanting controls or not on my visualizer/analyzer. Chrome states that should a click event be provided, autoPlay will then play without any issue. Although all events, along with resume are console logging properly, unless autoPlay was enabled on Chrome, I couldn’t get the music to play upon opening project. [For the purposes of this project, I did decide to add controls, in html.

* While attempting to add animation to my bubbles, so they were floating in the background, everything stopped working. Thus forcing me to comment out the bubbles, and leaving only the colorful bars.

* Could only link one song, ideally would’ve liked to link a playlist, however long-term, would like to have it set up so the user’s music of choice can be linked to it.


* Completely changed my idea on the second day of work, thus starting over:
### Initial Wireframe:
![Floating Bubbles of Random Sizes](https://github.com/siaraclemente/wdiproject1game/blob/master/readme/wdigameproject--wirefram1.jpg)

### Future Plans:
* Have bubbles appear in background with animation, as if they're simply floating.
* Get rid of controls and have AutoPlay properly work regardless of default settings in chrome, potentially add a mute button. (User friendly in all browsers would be ideal.)
* Figure out an alternative to having CORS blocking the sychronization due to the file, maybe using an alternative source of music.
* Having more than just one song file, preferably a playlist, but ideally, have it be user friendly and allow users to connect their own music.
* Adding additionally animation to the entire product; something regarding mouseover, and/or adding keyboard controls.
