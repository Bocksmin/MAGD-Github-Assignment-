let img1;
let img2;
let f1;
let f2;
let r, g, b;
//Preloads the images and fonts.
function preload() {
  img1 = loadImage('dio.jpg');
  img2 = loadImage('menacing.png');
  f1 = loadFont('Oswald-Regular.ttf');
  f2 = loadFont('Oswald-Medium.ttf');
}

function setup() {
  createCanvas(700, 650);
}

function draw() {
  background(0);
  image(img1,0,0);
    //Tints the drawing to lighten it up.
  tint(255,255);
  image(img2,45,55);
  image(img2,305,65);
    //Resizes and puts a gray filter over the image.
  img2.resize(50,50);
  img2.filter(GRAY);

  textFont(f2);
  textSize(64);
  textAlign(LEFT);
  text("BroBro's Bizzare Adventure", 0, 500)
  fill(0+r , 0+g , 0+b)
  
  textFont(f1);
  textSize(64);
  textAlign(LEFT);
  text("Dio's mío!", 460, 560)
  fill(0+r , 0+g , 0+b)
}
//Randomizes the color of the text
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}

