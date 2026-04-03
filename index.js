let marketplace = [
  {
    id: 1,
    vendeur: { id: 1, nom: "Ali", stats: { ventes: 10 } },
    annonces: [
      { titre: "iPhone X", price: 10, etat: "neuf" },
      { titre: "Samsung S20", price: 250, etat: "bon" }
    ]
  },
  {
    id: 2,
    vendeur: { id: 2, nom: "Sara", stats: { ventes: 5 } },
    annonces: [
       { titre: "Jean", price: 70, etat: "acceptable" }
    ]
  },
  {
    id: 3,
    vendeur: { id: 3, nom: "Yassine", stats: { ventes: 8 } },
    annonces: [
      { titre: "PC Gamer", price: 800, etat: "très bon" },
      { titre: "Clavier", price: 60, etat: "neuf" }
    ]
  }
];

let titre = [];

for (let i = 0; i < marketplace.length; i++) {
    for (let j = 0; j < marketplace[i].annonces.length; j++) {
        if(marketplace[i].annonces[j].price < 100){
            titre.push(marketplace[i].annonces[j].titre);
        }
    }    
}
console.log(titre);

let vendeur ={}
for (let i = 0; i < marketplace.length; i++) {
    let total = 0
  
  if(!vendeur[marketplace[i].vendeur.nom]){
    vendeur[marketplace[i].vendeur.nom] = {};
   }    
  for (let j = 0; j < marketplace[i].annonces.length; j++) {
    let vv = marketplace[i].annonces[j]
    total += vv.price
  }
    vendeur[marketplace[i].vendeur.nom].revenu = total;
}
console.log(vendeur);
 

let etat ={};
for (let i = 0; i < marketplace.length; i++) {
   for (let j = 0; j < marketplace[i].annonces.length; j++) {
    let eta = marketplace[i].annonces[j].etat;
      if(!etat[eta]){
        etat[eta] = {annonces:[]};
      }
      etat[eta].annonces.push(marketplace[i].annonces[j]);
   }    
}

console.log(etat);

let produit = marketplace[0].annonces[0];
 
for (let i = 0; i < marketplace.length; i++) {
  for (let j = 0; j < marketplace[i].annonces.length; j++) {
    let v = marketplace[i].annonces[j];
    if(v.price > produit.price ){
        produit = v;
    }    
  }    
}
console.log(produit)


  
for (let i = 0; i < marketplace.length; i++) {
     let v = marketplace[i];
    if(v.annonces.length > 1 ){
        console.log(marketplace[i].vendeur.nom);
    }    
  }    

 
let  c =[]
for (let i = 0; i < marketplace.length; i++) {
  for (let j = 0; j < marketplace[i].annonces.length; j++) {
    let v = marketplace[i].annonces[j];
    if(v.price >= 300  ){
     c =  marketplace[i].annonces.splice(j,1)
     }    
  }    
}
console.log(c)
let annnn = marketplace.map(e=>e.annonces)
console.log(annnn);



let  annoceee =[]
for (let i = 0; i < marketplace.length; i++) {
  for (let j = 0; j < marketplace[i].annonces.length; j++) {
    let v = marketplace[i].annonces[j];
    if(v.price < 300 && v.etat === "neuf" ){
     annoceee.push(v);
     }    
  }    
}

console.log(annoceee);

