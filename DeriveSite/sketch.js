let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage("background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  smallPoint = 4;
  largePoint = 500;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
