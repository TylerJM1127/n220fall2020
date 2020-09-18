function setup() {
  createCanvas(400, 300);
}

function draw() {
  noFill();

  for (var i = 0; i < 30; i++) {
    circle(150, 150, i * 5);
  }
  console.log("Afterwards: " + i);
}
