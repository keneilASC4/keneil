function pokemonObjects(Name,Type,HP,Def,Atk,Legend){
this.Name = Name,
this.type = type,
this.Hp = Hp,
this.Def = Def,
this.Atk = Atk,
this.Legend = Legend

}

var charmander = new pokemonObjects('charmander','fire',39,43,60,'false');
var venusaur = new pokemonObjects('venusaur','grass and postion',80,83,83,'109','false');   
var charizard = new pokemonObjects('charizard','fire and flying',78,78,'false');
var Torracat = new pokemonObjects('Torracat','fire','65','50','80','false');


console.log(charmander);

