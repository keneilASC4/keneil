function setup(){
    createCanvas (600,400);
    background(225)
    stroke("black"); 
    strokeWeight(5); 
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    fill("red");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);
    fill("white");
    ellipse(width/2, height/2, 50);
    fill("black");
    ellipse(width/2, height/2, 25);
}

function HP(value){
    this.value=value
}

function newAtttack(name,type,power){
    this.name= name,
    this.type= type,
    this.power=power,
}  
    var Luxray = [[new newAttacks('Thunderbolt', 'Electric','95'),new newAttacks('Thunder', 'Electric','120'), new newAttacks('Crunch', 'Dark','80'),new newAttacks('Ice Fang', 'Ice','65')], ];
    var Charizard = [[new newAttacks('Fire Blast', 'Fire','120'),new newAttacks('Flamethrower', 'Fire','95'), new newAttacks('Dragon Claw', 'Dragon','80'),new newAttacks('Wing Attack', 'Flying','65')], ];
    function draw(){
    rect(460,50,100,100);
    fill("red");
}
