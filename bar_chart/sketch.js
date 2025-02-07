let values = [80, 70, 140, 210, 50, 40]

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
}

function draw() {
  background(220);
  fill(0, 0, 255);
  let barWidth = 10;
  x = 10
  y = 300
  for (let i = 0; i < values.length; i++) {
    rect(x, y - values[i], barWidth, values[i]);
    x += barWidth
  }
}
