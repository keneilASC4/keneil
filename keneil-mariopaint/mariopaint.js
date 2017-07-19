function setup(){
    createCanvas(2000,2000);
    background(51);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 50, 50);
  fill(random(0,255),random(0,255),random(0,255));
  return false;
}