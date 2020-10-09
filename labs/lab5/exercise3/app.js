var circles = [
  { x: 100, y: 20, r: 5 },
  { x: 20, y: 50, r: 50 },
  { x: 150, y: 200, r: 25 },
  { x: 300, y: 250, r: 100 }
]

console.log(circles);

function setup() {
  createCanvas(400, 300);
}

function draw() {
  for (var i = 0; i < circles.length; i++) {
    circles(circles[i].x, circles[i].y, circles[i].r);
  }
}
