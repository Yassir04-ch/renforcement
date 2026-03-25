let stock = [
  { nom: "Tomate", quantite: 8, unite: "kg", prix_unitaire: 5, seuil_alerte: 9, categorie: "légume" },
  { nom: "Carotte", quantite: 8, unite: "kg", prix_unitaire: 3, seuil_alerte: 4, categorie: "légume" },
  { nom: "Salade", quantite: 5, unite: "pièces", prix_unitaire: 2, seuil_alerte: 3, categorie: "légume" },

  { nom: "Poulet", quantite: 15, unite: "kg", prix_unitaire: 10, seuil_alerte: 5, categorie: "viande" },
  { nom: "Boeuf", quantite: 12, unite: "kg", prix_unitaire: 12, seuil_alerte: 6, categorie: "viande" },
  { nom: "Porc", quantite: 7, unite: "kg", prix_unitaire: 11, seuil_alerte: 4, categorie: "viande" },

  { nom: "Sel", quantite: 2, unite: "kg", prix_unitaire: 1, seuil_alerte: 1, categorie: "épice" },
  { nom: "Poivre", quantite: 1, unite: "kg", prix_unitaire: 4, seuil_alerte: 1, categorie: "épice" },
  { nom: "Paprika", quantite: 0.5, unite: "kg", prix_unitaire: 6, seuil_alerte: 0.5, categorie: "épice" },

  { nom: "Eau", quantite: 50, unite: "litres", prix_unitaire: 0.5, seuil_alerte: 10, categorie: "boisson" },
  { nom: "Jus d'orange", quantite: 20, unite: "litres", prix_unitaire: 2, seuil_alerte: 5, categorie: "boisson" },
  { nom: "Vin", quantite: 10, unite: "litres", prix_unitaire: 8, seuil_alerte: 3, categorie: "boisson" }
];

// 2
for (let i = 0; i < stock.length; i++) {
if (stock[i].quantite < stock[i].seuil_alerte) {
    console.log(stock[i]);
  }    
}



// 3
let total = 0;

for (let i = 0; i < stock.length; i++) {
 total += stock[i].quantite * stock[i].prix_unitaire 
}
console.log(total);



// 4
let valeur = {};
for (let i = 0; i < stock.length; i++) {
  let categorie = stock[i].categorie;

  if (!valeur[categorie]) {
    valeur[categorie] = 0;
  }
  valeur[categorie] += stock[i].quantite * stock[i].prix_unitaire;
}
console.log(valeur);


// 5
function commander(plat) {
  let manque = [];

  for (let i = 0; i < plat.length; i++) {
    let rep = plat[i];
    let stockfind = stock.find(e => e.nom === rep.nom);
    if (!stockfind || stockfind.quantite < rep.quantite) {
       manque.push(rep.nom);
    }
  }

  if (manque.length > 0) {
    console.log("stock redients manquant: " + manque);
  } else {
    for (let i = 0; i < plat.length; i++) {
      let rep = plat[i];
      let stockfind = stock.find(i => i.nom === rep.nom);
      stockfind.quantite -= rep.quantite;
    }
    console.log("commande effectuee");
  }
}


// 6
let stockfilter = stock.filter(e => e.quantite < e.seuil_alerte);
let courses = {};
for (let i = 0; i < stockfilter.length; i++) {
  let nom = stockfilter[i].nom;
   if (!courses[nom]) {
    courses[nom] = 0;
   }
   courses[nom] = stockfilter[i].seuil_alerte * 2;
}
console.log(courses);
