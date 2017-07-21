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
        x-=8;
        while (x>1){
        x+=10;
    }
    }
    if (keyIsDown(RIGHT_ARROW)){
        x +=8;
     while (x<1000){
        x-=10;
    }
    }
}


