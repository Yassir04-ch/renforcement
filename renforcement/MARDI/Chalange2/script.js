
let ventes = [
  { mois: "janvier", chiffre_affaires: 45000, nb_clients: 210, ville: "Casa" },
  { mois: "fevrier", chiffre_affaires: 52000, nb_clients: 240, ville: "Rabat" },
  { mois: "mars", chiffre_affaires: 48000, nb_clients: 230, ville: "Agadir" },
  { mois: "avril", chiffre_affaires: 60000, nb_clients: 260, ville: "tanger" },
  { mois: "mai", chiffre_affaires: 55000, nb_clients: 250, ville: "eljadida" },
  { mois: "juin", chiffre_affaires: 62000, nb_clients: 270, ville: "houara" },
  { mois: "juillet", chiffre_affaires: 58000, nb_clients: 260, ville: "Casa" },
  { mois: "aout", chiffre_affaires: 50000, nb_clients: 240, ville: "Rabat" },
  { mois: "septembre", chiffre_affaires: 47000, nb_clients: 220, ville: "Agadir" },
  { mois: "octobre", chiffre_affaires: 65000, nb_clients: 280, ville: "sidi kasem" },
  { mois: "novembre", chiffre_affaires: 60000, nb_clients: 270, ville: "youssoufia" },
  { mois: "decembre", chiffre_affaires: 70000, nb_clients: 300, ville: "Agadir" },
];

let total = 0;
for(let i = 0 ; i<ventes.length ; i++){
    total = total + ventes[i].chiffre_affaires;
}
console.log(total);



let moyyen = total/ventes.length;
console.log(moyyen);


let maxchiffre = ventes[0];
for(let i = 0;i<ventes.length;i++){
    if(ventes[i].chiffre_affaires > maxchiffre.chiffre_affaires ){
        maxchiffre = ventes[i];
    }
}
console.log(maxchiffre);




let min = ventes[0];
for(let i = 0;i<ventes.length;i++){
    if(ventes[i].nb_clients > maxchiffre.nb_clients ){
        min = ventes[i];
    }
}
console.log(min);



let ventesfil = ventes.filter(e => e.chiffre_affaires > 50000)
console.log(ventesfil);



let villes = {};
for (let i = 0; i < ventes.length; i++) {
  let ville = ventes[i].ville;

  if (!villes[ville]) {
    villes[ville] = { total_ca: 0, total_clients: 0 };
  }
  villes[ville].total_ca += ventes[i].chiffre_affaires;
  villes[ville].total_clients += ventes[i].nb_clients;
}
console.log(villes);



let sortventes = ventes.sort((a, b) => b.chiffre_affaires - a.chiffre_affaires);
console.log(ventes);




let croissance = 0;
for(let i=1 ; i<ventes.length ; i++){
    croissance = ventes[i].chiffre_affaires - ventes[i-1].chiffre_affaires;

    console.log(ventes[i].mois +":"+croissance);
}





