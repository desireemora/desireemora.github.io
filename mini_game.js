let fr = 60;

let r_array = [255,255,255,0,0,46,139];
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  x = 5;
  y = 35;
}

function draw() {
  background(255);

  fill(0);
  stroke(0);
  rect(x,y,20,20);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 10;

    if(x<windowWidth){
      x = 1;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
    if(x>windowWidth){
      x = windowWidth;
    }
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 10;
  }


}

function keyPressed() {
  /*if (keyCode === LEFT_ARROW) {
    x = x-100;
  } else if (keyCode === RIGHT_ARROW) {
    x = x+100;
  }*/

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
