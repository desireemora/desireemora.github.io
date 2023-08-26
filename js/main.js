let fr = 2000;

let r_array = [255,255,255,0,0,46,139];
let g_array = [0,127,255,255,0,43,0];
let b_array = [0,0,0,0,255,95,255];

function setup() {
  createCanvas(windowWidth/2.4, windowHeight/2);
  frameRate(fr);

  rand = random([0,1,2,3,4,5,6]);

  r = r_array[rand];
  g = g_array[rand];
  b = b_array[rand];

 print(rand);

  sr = r;
  sg = g;
  sb = b;
  toggle = 0;
}

function draw() {
  let instruct = 'Press \'c\' to clear.\nPress \'r\' for random color.\nPress \'s\' for stroke.';
  fill(0);
  textSize(22);
  textFont('Arial');
  stroke(255);
  text(instruct,50,50); // Text wraps within text box
  fill(r,g,b);
  rect(5,35,30,45);

  if (mouseIsPressed) {
    fill(r,g,b);
    stroke(sr,sg,sb);
    ellipse(mouseX, mouseY, 40, 40);
  }

  if (key == 's') {
    if(toggle == 0){
      sr = 0;
      sg = 0;
      sb = 0;
      toggle = 1;
    }
    else if(toggle == 1){
      sr = r;
      sg = g;
      sb = b;
      toggle = 0;
    }
      key = null;

  }


  if (key === 'c') {
    clear();
    key = BACKSPACE;
  }

  if (key === 'r') {
    rand = random([0,1,2,3,4,5,6]);

    r = r_array[rand];
    g = g_array[rand];
    b = b_array[rand];
    key = null;
  }

}

function windowResized() {
  resizeCanvas(windowWidth/2.4, windowHeight/2);
}
