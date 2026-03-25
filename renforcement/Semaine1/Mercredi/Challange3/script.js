
let equipes = [
  { nom: "chabab houara", points: 18, buts_pour: 20, buts_contre: 10, matchs_joues: 8 },
  { nom: "Raja Casablanca", points: 25, buts_pour: 27, buts_contre: 11, matchs_joues: 8 },
  { nom: "Wydad Casablanca", points: 22, buts_pour: 25, buts_contre: 9, matchs_joues: 8 },
  { nom: "Difaa Hassani Eljadidi", points: 10, buts_pour: 12, buts_contre: 15, matchs_joues: 8 },
  { nom: "Kokab Marrakech", points: 12, buts_pour: 14, buts_contre: 13, matchs_joues: 8 },
  { nom: "Itihad Tangier", points: 8, buts_pour: 9, buts_contre: 16, matchs_joues: 8 },
  { nom: "Hassniat Agadir", points: 20, buts_pour: 22, buts_contre: 11, matchs_joues: 8 },
  { nom: "Nahdat Zmamra", points: 5, buts_pour: 7, buts_contre: 19, matchs_joues: 8 }
];


// 2
function calculdef(nom){
    let equip = equipes.find(e=>e.nom == nom);
     let def = equip.buts_pour - equip.buts_contre;
     return def; 
}
// console.log(calculdef("chabab houara"));



// 3
function sortequipes(){
equipes.sort((a,b)=>b.points - a.points);
}
console.log(equipes)


// 4

function afficherclass(){
    sortequipes();
    for (let i = 0; i < equipes.length; i++) {
        let def = calculdef(equipes[i].nom);
        let signe = "+";
        if(def < 0){
          signe ="";
        }
        console.log(i+1+"."+equipes[i].nom+" — "+equipes[i].points+"pts "+"(diff:"+signe+def+")");
    }

}
afficherclass();


// 5
function similermatch(eq1,eq2,scor1,scor2){

  let equip1 = equipes.find(e=>e.nom == eq1);
  let equip2 = equipes.find(e=>e.nom == eq2);
  console.log(equip1.nom +" : "+ scor1 +" -- "+equip2.nom+ " : " + scor2);
  equip1.matchs_joues ++;
  equip2.matchs_joues ++;
  equip1.buts_pour +=scor1;
  equip2.buts_pour +=scor2;
  equip1.buts_contre +=scor2;
  equip2.buts_contre +=scor1;

  if (scor1 > scor2) {
    equip1.points += 3;
  } else if (scor2 > scor1) {
    equip2.points += 3;
  } else {
    equip1.points += 1;
    equip2.points += 1;
  }

  console.log(equipes);

}
// similermatch("chabab houara","Wydad Casablanca",2,0);

