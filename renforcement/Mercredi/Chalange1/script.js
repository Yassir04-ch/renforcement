let contacts = [
  {
    nom: "Yassir Cherqui",
    entreprise: "Cegedim",
    email: "yassir@gmail.com",
    telephone: "0612345678",
    ville: "agadir",
    adresse: {
      rue: "12 Rue tikiwin",
      code_postal: "20000",
      ville: "agadir",
      pays: "Maroc"
    }
  },
  {
    nom: "Salah salhi",
    entreprise: "youcode",
    email: "salah@gmail.com",
    telephone: "0623456789",
    ville: "Rabat",
    adresse: {
      rue: "Avenue Mohammed",
      code_postal: "10000",
      ville: "Rabat",
      pays: "Maroc"
    }
  },
  {
    nom: "Yassine hamdon",
    entreprise: "TechSoft",
    email: "yassine@gmail.com",
    telephone: "0634567890",
    ville: "casa",
    adresse: {
      rue: "sidikasem",
      code_postal: "20050",
      ville: "Casablanca",
      pays: "Maroc"
    }
  },
  {
    nom: "anas zniti",
    entreprise: "capgimini",
    email: "anas@gmail.com",
    telephone: "0645678901",
    ville: "Marrakech",
    adresse: {
      rue: "10 Rue santos",
      code_postal: "40000",
      ville: "Marrakech",
      pays: "Maroc"
    }
  },
  {
    nom: "hobo kobu",
    entreprise: "WebSolutions",
    email: "kobo@gmail.com",
    telephone: "0656789012",
    ville: "Tanger",
    adresse: {
      rue: "22 Rue tawjtat",
      code_postal: "90000",
      ville: "Tanger",
      pays: "Maroc"
    }
  },
   {
    nom: "zaki raki",
    entreprise: "SmartDev",
    email: "zaki@gmail.com",
    telephone: "0656789012",
    ville: "Rabat",
    adresse: {
      rue: "22 Rue hoda",
      code_postal: "90000",
      ville: "Rabat",
      pays: "Maroc"
    }
  }
];


// 2
for (let i = 0; i < contacts.length; i++) {
  console.log("le Nom : "+ contacts[i].nom + " -- Ville :"+ contacts[i].ville); 
}



// 3
let villes = {};
for (let i = 0; i < contacts.length; i++) {
  let ville = contacts[i].ville;

  if (!villes[ville]) {
    villes[ville] = [];
  }
  villes[ville].push(contacts[i].nom)
}
console.log(villes);



// 4
function recherchecontact(entreprise){
    let cont = contacts.filter(e=>e.entreprise == entreprise)
    return cont
}
// console.log(recherchecontact("capgimini"));



// 5

function modifier(nom ,rue,code_postal,ville,pays){
    let message = "";
    let contact =  contacts.find(e =>e.nom == nom);
    if(!contact){
        message = "contact non truvee";
    }
    else{
        contact.adresse.code_postal = code_postal,
        contact.adresse.rue = rue,
        contact.adresse.ville = ville,
        contact.adresse.pays = pays,
    
        message = "Update success";
    }
    return message ;

}
// console.log(modifier("anas zniti","teste","hhhhh","ggggg","bbbbbbb"));
// console.log(contacts);


// 6
for (let i = 0; i < contacts.length; i++) {
   contacts[i].dernierContact = "2026-03-23"    
}
console.log(contacts);



// 7
for(let i = 0 ; i<contacts.length ; i++){
 let def = new Date() - new Date(contacts[i].dernierContact);
 let day = def / (1000 * 60 * 60 * 24);
    if(day > 30){
        console.log(contacts[i]);
    }

}






