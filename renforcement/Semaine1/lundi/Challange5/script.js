
let etudiants =[
    {nom:"cherqui",prenom:"yassir",age:21,moyenne:12},
    {nom:"arho",prenom:"said",age:23,moyenne:15},
    {nom:"samson",prenom:"anas",age:18,moyenne:10},
    {nom:"harwal",prenom:"moad",age:22,moyenne:13},
    {nom:"zamzam",prenom:"aymane",age:20,moyenne:11},
    {nom:"salah",prenom:"salah",age:19,moyenne:9}
];

for(let i = 0 ; i<etudiants.length ; i++){
    if(etudiants[i].moyenne >= 12){
        console.log(etudiants[i].nom + " "+ etudiants[i].prenom +" age :"+etudiants[i].age + " moyenne :"+etudiants[i].moyenne);
    }
}

let sortudiants = etudiants.sort((a,b)=>a.age - b.age)
console.log(sortudiants);


function searchnom(nom){
  let etudiant = etudiants.find(etudiant => etudiant.nom == nom);
  if(!etudiant){
    return "Étudiant non trouvé";
  }
  return etudiant;
}

console.log(searchnom('cherqui'));

