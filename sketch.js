let fruit = []

function setup() {
  createCanvas(400, 400);
  //This allows for the random placement of the fruits
  for (let i = 0; i < 12; i++) {
    let x = 150 + 20 * i;
    let y = 150 + 20 * i;
    fruit[i] = new Fruit(x, y, 15);
  }

  rectMode(CENTER);
  ellipseMode(CENTER);
}

//This creates the tree, sky, grass, and apples
function draw() {
  background(135, 206, 235);

  fill(56, 202, 92);
  ellipse(200, 390, 450, 100)

  fill(83, 37, 22);
  rect(200, 300, 50, 250)

  noStroke();
  fill(58, 95, 11);
  ellipse(200, 220, 100, 100);
  ellipse(175, 205, 100, 100);
  ellipse(225, 205, 100, 100);
  ellipse(200, 175, 100, 100);

//This allows for the fruit function to be called on, and allows any amount of fruits
//to be made with the "fruit.length"
  for (let i = 0; i < fruit.length; i++) {
    fruit[i].show();
  }

}


//This creates the class for the fruits
class Fruit {
  constructor() {
    this.x = random(150, 250);
    this.y = random(150, 250);
  }
  
  show() {
    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    ellipse(this.x, this.y, 15, 15)
  }

}