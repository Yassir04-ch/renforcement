let taux = {
    USD: 1.08,
    GBP: 0.86,
    MAD: 10.85,
    JPY: 162.5,
    CAD: 1.47
};

let historiques = [];

// 2
function convertir(montant, deviseSource, deviseCible){
let eur = montant * taux[deviseSource];
let result = eur * taux[deviseCible];

  let historique ={
        date: "26-03-2026",
        montant: montant,
        deviseSource: deviseSource,
        deviseCible: deviseCible,
        resultat: result,
     };

 historiques.push(historique);

return result;
 }

// 3
// function convertirpanier(panier, deviseSource, deviseCible){
//      let result = [];
//     for (let i = 0; i < panier.length; i++) { 
//      let cover =   convertir(panier[i],deviseSource,deviseCible);
//         result.push(cover);
//     }
//     console.log(result)
// }

// convertirpanier([3000, 1000, 200], "USD", "MAD");



// 4
function meilleurTaux(montant, deviseSource){
    let meilleu = 0;
    let tau = "";
    for(key in taux){
        let result = convertir(montant,deviseSource,key);
        if(meilleu < result){
            meilleu = result;
            tau = key;
        }
    }
     console.log(meilleu +" "+ tau);

}

meilleurTaux(100, "USD");



// 5


 function afficherhistorique(){
    for (let i = 0; i < historiques.length; i++) {
        console.log(historiques[i]);
    }
 }
//  afficherhistorique();
