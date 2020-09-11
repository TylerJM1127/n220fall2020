let diameter = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
    clear();
  circle(400, 300, diameter++);
  if (diameter > 200) {
    diameter = 1;
  }
}
