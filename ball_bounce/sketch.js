// 200 200
// 2 px X- 3 px Y-
// Wall: bounce at 90 degree
// height, width
let x = 200;
let y = 200;
let x_move = 2;
let y_move = 3;
let ballColor;

function setup() {
  createCanvas(400, 400);
  background(80, 50, 80);
  ballColor = color(225, 0, 0);
  fill(ballColor);
  ellipse(x, y, 20, 20)
}

function draw() {
  background(80, 50, 80);
  fill(ballColor); // Red color
  x += x_move;
  y += y_move;
  ellipse(x, y, 20, 20);
  if (x <= 0 || x >= width) {
    x_move *= -1;
  }
  if (y <= 0 || y >= height) {
    y_move *= -1;
  }
  // if (mouseIsPressed) {
  //   ballColor = color(random(255), random(255), random(255));
  // }
}

function mouseClicked() {
  console.log("Click!")
  ballColor = color(random(255), random(255), random(255))
}
