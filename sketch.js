var song;
var dog1, dog2;
let bark

function preload() { //Preloads the song and bark noise
  song = loadSound ("Wii Shop Channel Main Theme (HQ).mp3"); 
  bark = loadSound ('418105__crazymonke9__single-dog-bark-3.wav')
}

function setup() {
  createCanvas(400, 400);
  
  song.play();
  song.setVolume(0.2); //Adjusts the song's volume so it doesn't cause deafness
  
  dog1 = createImg("dogdance.gif");
  dog2 = createImg("ezgif.com-gif-maker.gif");
}

function draw() {
  let dog1RightWall = 185;
  let dog1TopWall = 250
  //Creates the constraints to help enhance the mirror effect
  let stopDog1T = constrain(mouseY, dog1TopWall, 250);
  let stopDog1L = constrain(mouseX, 50, dog1RightWall);
  
  background(200);
  quad(100,75, 375,105, 375,330, 100,300);
  
  dog1.position(stopDog1L - 100, stopDog1T);
  dog2.position(stopDog1L + 55, stopDog1T - 60);
}

function mousePressed() { //Plays a dog bark and pans it depending on the dog1 location
  let panning = map(mouseX,50,185,-1.0,1.0);
  bark.pan (panning);
  bark.play();
}