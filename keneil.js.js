// generates a random number between 
//0 and one of your choosing 
function rand(num) {
    var randDec = Math.random() * num;
    var randint = Math.floor(randDec);
    console.log (randint);
    return randint;
}
 
  rand(16)