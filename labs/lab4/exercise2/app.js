let positions = [0, 0, 0, 0];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(50);
  positions.push(mouseX);
  positions.shift();

  for (var i = 0; i < 10; i++) {
    circle(positions[i], 150, 20);
  }
}
