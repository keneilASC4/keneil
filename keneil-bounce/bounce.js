function setup(){
   createCanvas(600,600);
   background("black");
}
var xPos = 60;
var yPos = 21;
var x = 5;
var y = 3;
function draw(){
    background("black");
    if(xPos<0 || xPos>600) x= -x;
    if(yPos<0 || yPos>600) y= -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, (40),(40));
    fill(random(0,100),random(0,255),random(0,255));
}
