var colors = ["#fcba03","#0341fc", "#eb0221", "#000000", "#2fff00", "#cc00ff"]
console.log(colors)
let xPos = 0;
let yPos = 40;

let xSpeed = 10;
let ySpeed = 0;

function setup(){
    createCanvas(400,300);
}


function draw(){
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    for(var i = 0; i < colors.length; i++){
        fill(colors[0,1,2,3,4,5]);
        circle(xPos, yPos, 15);
    }
}
