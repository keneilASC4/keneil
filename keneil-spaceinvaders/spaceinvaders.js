function setup(){
   createCanvas(600,600); 
}
var x = 250;
function draw(){
    background("blue");
    rect(x, 530, 37, 55);

    rect(255, 19, 37, 55);
    rect(68, 19, 37, 55);
    rect(500, 19, 37, 55);
    if (keyIsDown(LEFT_ARROW)){
        if (x>0) {
            x-=8;
        }
    }
    if (keyIsDown(RIGHT_ARROW)){
     if (x<600-37){
        x+=8;
    }
    }
}


