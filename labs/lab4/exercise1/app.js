let colors = ["#654321", "#f7bcf0", "#ffffff"];

function setup() {
  createCanvas(400, 300);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0 + 120 * i, 20, 150, 40);
  }
}
