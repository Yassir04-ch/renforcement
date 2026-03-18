
let articles = [
  { nom: "articl1", q: 2, prix: 10 },
  { nom: "articl2", q: 3, prix: 15 },
  { nom: "articl3", q: 1, prix: 20},
  { nom: "articl4", q: 1, prix: 25 },
  { nom: "articl5", q: 2, prix: 5 }
];

let total = 0;

for (let i = 0 ; i < articles.length ; i++ ) {

  let totalprix = articles[i].q * articles[i].prix;
  total += totalprix;

  console.log(articles[i].nom +" x "+articles[i].q +" = "+ totalprix);
}

let tva = total * 0.2;
let totaltva = total + tva;
console.log(total + " DH ");
console.log("tva "+ tva +" DH ");
console.log("total "+ totaltva + " DH");
