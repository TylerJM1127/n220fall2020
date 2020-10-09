var cx = 20;
var cy = 30;
var circleColor = [157, 219, 74];

var myCircle = {
  x: 30,
  y: 20,
  color: [157, 219, 74],
};

function setup() {
  createCanvas(400, 300);
}

function draw() {
  fill(circleColor);
  cx += 2;
  circleColor(cx, cy, 20);
}
