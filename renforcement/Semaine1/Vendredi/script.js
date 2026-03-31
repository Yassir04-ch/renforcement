let users = [];
 
function ajouterUser(id,email,password,role,solde,pseudo){
    let user={
        id:id,
        email:email,
        password:password,
        role:role,
        solde:solde,
        pseudo:pseudo,
        note:0
    };

   users.push(user); 
   console.log('user a été ajoutée avec success');
}
// console.log(users); 

let annonces = [];
function publierAnnonce(id,vendeur_id, titre, description, prix, categorie, etat){

    let vendeur = users.find(e=>e.id == vendeur_id);
    if(!vendeur){
        console.log("vendeur non trouvée");
        return;
    }
    let annonce = {
        id:id,
        vendeur_id:vendeur_id,
        titre:titre,
        description:description,
        prix:prix,
        categorie:categorie,
        etat:etat
    };
    annonces.push(annonce);
    console.log("annonce a été ajoutée");
}
console.log(annonces);

function modifierPrix(id,prix){
 let annonce = annonces.find(e=>e.id == id);
 if(!annonce){
    console.log("annonce non trouvée");
         return;
 }
 annonce.prix = prix;
 console.log("prix du annonce a été modifier");
}

function retireAnnonce(id){
 let index = annonces.findIndex(e=>e.id == id);
 if(index == -1){
    console.log("annonce non trouvée");
   return;
 }
 annonces.splice(index,1);
 console.log("annonce a été supprinée");
}

function filtrerAnnonces(filtre) {
 
    if (filtre.description) {
      let annonce = annonces.filter(e=>e.description == filtre.description);
      return annonce;
    }

    if (filtre.categorie ) {
      let annonce = annonces.filter(e=>e.categorie == filtre.categorie);
      return annonce;
    }

    if (filtre.prixmin) {
         let annonce = annonces.filter(e=>e.prix <= filtre.prixmin);
         return annonce;
     }

    if (filtre.prixmax) {
       let annonce = annonces.filter(e=>e.prix >= filtre.prixmax);
       return annonce;
    }

    if (filtre.etat) {
      let annonce = annonces.filter(e=>e.etat == filtre.etat);
      return annonce;
    }

    if (filtre.vendeur_id) {
      let annonce = annonces.filter(e=>e.vendeur_id == filtre.vendeur_id);
         return annonce;
    }
}
let anno = filtrerAnnonces({prixmax: 1000});
console.log(anno);


function triannonce(anno,type){

    if(type == "prix"){
      anno.sort((a, b) => a.prix - b.prix);
    }
    if(type == "date"){
      anno.sort((a,b)=>new Date(a.date) - new Date(b.date));
    }
    if(type == "note"){
        anno.sort((a,b)=>a.note - b.note);
    }
    return anno;
}

let annotri = triannonce(anno,"prix");
console.log(annotri);


let transactions = [];
function acheterAnnonce(acheteur_id,annonce_id){

    let acheteur = users.find(e=>e.id == acheteur_id);
    let annonce = annonces.find(e=>e.id == annonce_id);

    let vendeur = users.find(e=>e.id == annonce.vendeur_id);
    if(!acheteur){
        console.log("user non trouvée");
         return;
    }
    if( acheteur.solde < annonce.prix){
        console.log("solde insuffisant ");
        return;
    }

    if (!annonce) {
    console.log("Annonce non trouvée !");
    return;
  }
   if (annonce.etat != "desponible") {
    console.log("Annonce déja vendu !");
    return;
  }
   
  let commission = annonce.prix * 0.05;
  let mantont = annonce.prix - commission;

  acheteur.solde -= annonce.prix;
  vendeur.solde += mantont; 

  annonce.statut = "vendu";

  let transaction = {
    acheteur_id: acheteur.id,
    vendeur_id: vendeur.id,
    annonce_id: annonce.id,
    montant: annonce.prix,
    commission: commission
    };

    transactions.push(transaction);

    console.log("annoce est cheter");
}
// acheterAnnonce(2, 1);



let avis =[];
function avis(acheteur_id, annonce_id, note, commentaire){

    let  transaction = transactions.find(e=>e.acheteur_id == acheteur_id && e.annonce_id == annonce_id);
    if (!transaction) {
    console.log("transaction non trouvée");
    return;
    }

    let avi ={
        transaction_id: annonce_id,
        acheteur_id: acheteur_id,
        vendeur_id: transaction.vendeur_id,
        note: note,
        commentaire: commentaire
    };
    avis.push(avi);
    let vendeuravis = avis.filter(a => a.vendeur_id === transaction.vendeur_id);
    let some = 0;
    for(let i = 0;i<vendeuravis.length ; i++){
        some +=vendeuravis[i].note;
    }
    let moyyen = some/vendeuravis.length;
    let vendeur = users.find(e => e.id === transaction.vendeur_id);
    vendeur.note = moyyen;

    console.log("avi a été ajouter");
    profil(vendeur.id);
}

function profil(vendeur_id) {

  let vendeur = users.find(u => u.id === vendeur_id);
  if (!vendeur) {
    console.log("vendeur introuvable !");
    return;
  }

  let vendeuravis = avis.filter(a => a.vendeur_id === vendeur_id);

  console.log("pseudo:" + vendeur.pseudo + "note moyyene : " + vendeur.note);
  
  for (let i = 0; i < vendeuravis.length; i++) {
      let acheteur = users.find(e => e.id === vendeuravis[i].acheteur_id);
    console.log(acheteur.pseudo+ " : " + a.note + " /5" + a.commentaire);
  }
}

 