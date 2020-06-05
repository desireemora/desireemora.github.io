let song;

function preload() {
  song = loadSound('cv.mp3');
}

function setup() {
  song.play();
}

function Draw() {
  background(255);
}
/*function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function btnClick (){
  song.play();
}
*/
