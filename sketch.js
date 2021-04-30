var r;
var g;
var b;

var rB;
var gB;
var bB;

let xBall = 350;
let yBall = 150;
let xspeed = 3;
let yspeed = 1;

function setup() {
  createCanvas(600,400);
  
  button = createButton('1');
  button.position(54,160);
  button.mouseClicked(changeR);
  
  button = createButton('2');
  button.position(78.3,160);
  button.mouseClicked(changeO);
  
  button = createButton('3');
  button.position(103,160);
  button.mouseClicked(changeY);
  
  button = createButton('4');
  button.position(54,190);
  button.mouseClicked(changeG);
  
  button = createButton('5');
  button.position(78.3,190);
  button.mouseClicked(changeB);
  
  button = createButton('6');
  button.position(103,190);
  button.mouseClicked(changeI);
  
  button = createButton('7');
  button.position(54,220);
  button.mouseClicked(changeV);
  
  button = createButton('8');
  button.position(78.3,220);
  button.mouseClicked(changeP);
  
  button = createButton('9');
  button.position(103,220);
  button.mouseClicked(changeM);
  
  button = createButton('0');
  button.position(78.3,250);
  button.mouseClicked(changeEgg);
  
  r=0
  g=0
  b=0
  rB=0
  gB=0
  bB=0
  
}

function draw() {
  background(255);

  //Remote
  fill(220)
  strokeWeight(3)
  rect(50,100,80,200)
  
  //Circle Button
  fill(207,61,41)
  ellipse(90,110,50)
  
  //TV
  fill(100)
  rect(300,100,200,200,10)
  fill(r,g,b)
  rect(325,125,150,150,20)

  //Bouncing Ball
  fill(rB,gB,bB);
  let ellipseBall = ellipse(xBall,yBall,10,10)
  
  xBall += -xspeed
  if((xBall < 330) || (xBall >= 470)){
    xspeed = -xspeed;
  }
  
  yBall += -yspeed
  if((yBall < 130) || (yBall >= 270)){
    yspeed = -yspeed;
  }
  
}

//Numbered Buttons
  function changeR(){
    r=255
    g=0
    b=0
  }
  
  function changeO(){
    r=255
    g=165
    b=0
  }
  
  function changeY(){
    r=255
    g=255
    b=0
  }
  
  function changeG(){
    r=0
    g=255
    b=0
  }
  
  function changeB(){
    r=0
    g=0
    b=255
  }
  
  function changeI(){
    r=75
    g=0
    b=130
  }
  
  function changeV(){
    r=127
    g=0
    b=255
  }
  
  function changeP(){
    r=128
    g=0
    b=128
  }
  
  function changeM(){
    r=random(255)
    g=random(255)
    b=random(255)
  }
  
  function changeEgg(){
  print('Here is an Easter Egg!')
  }

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 90, 110);
  if (d < 25) {
    // Pick new random color values
    rB = random(255);
    gB = random(255);
    bB = random(255);
  }
}