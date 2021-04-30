let angle = 0
let planet
let ring
let moon

function preload() {
  shine = loadJSON("shine.json");
  
  planet = loadImage('planet.jpg');
  ring = loadImage('ring.jpg');
  moon = loadImage('moon.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  print('Use the Left Click to rotate the objects.');
  print('Use the Right Click to move along the X and Z axes.');
  print('Use the Scroll Wheel to zoom in and out.');
  
  
}

function draw(){
  background(0);
  
  rectMode(CENTER);
  
  orbitControl();
  
  let lightX = (mouseX / width - 0.5) * 2;  
  let lightY = (mouseY / height - 0.5) * 2; 
  //Attempted to create my own light formula, but it was to jittery, formula here is from 
  //the p5.js directionalLight() tutorial, with the color's modified by my .json.
  //https://p5js.org/reference/#/p5/directionalLight
  directionalLight(shine.r, shine.g, shine.b, -lightX, -lightY, -1);
  
  ambientLight(150);
  
  noStroke();
  texture(planet);
  sphere(30);
  
  rotateX(angle*1.5);
  rotateY(angle*0.2);
  rotateZ(angle*1.5);
  texture(ring);
  torus(50,7);
  
  rotateX(angle*0.5);
  rotateY(angle*0.3);
  rotateZ(angle*1.5);
  translate(-200 + width/2, -100 + height/2, 0)
  texture(moon);
  sphere(10);
  
  angle+=0.02;
  
  
}

