let fruits = ["orange", "banane", "pomme"]
console.log(fruits[1]);
fruits.push("violet")
console.log(fruits.length);

let personne = {
    nom: "alice",
    age: 25,
    ville: "paris"
}

console.log(personne.nom);

let animaux = ['animaux1', 'animaux2', 'animaux3', 'animaux4','animaux5']
for (let i = 0; i < animaux.length; i++) {
    console.log(animaux[i]);
}

let cours = [
    {
        nom: 'math',
        prix: 150
    },
     {
        nom: 'physique',
        prix: 150
    }
]
let total = 0
for (let i = 0; i < cours.length; i++) {
    total += cours[i].prix
}

console.log(total);