function setup(){
    createcCanvas(1000,1000);
    background(51);
}

function mouseDragged(){
  ellipse(mouseX, mouseY, 25, 25);
  return false;
}