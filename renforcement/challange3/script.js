let personne = {
  nom: "cherqui",
  prenom: "Yassir",
  age: 28,
  ville: "houara",
  email: "yassir@email.com"
};

console.log(personne.prenom +" "+ personne.nom +" - "+personne.age +" ans "+ "- " + personne.ville);

personne.ville = "eljadida";

personne.telephone = "0123456789";

for (let i in personne) {
  console.log(i +":"+ personne[i]);
}