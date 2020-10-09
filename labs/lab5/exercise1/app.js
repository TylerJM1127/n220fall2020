let soccerball = {
  r: 40,
  x: 60,
  y: 70,
  color: [207, 3, 252],
};

var cx = 60;
var cy = 70;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  fill(207, 3, 252);
  circle(cx, cy, 40);
}
