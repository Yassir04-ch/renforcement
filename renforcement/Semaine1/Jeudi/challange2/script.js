let panie = [];

let produits = [
    { id: 1, nom: "iphone", prix: 850, stock_disponible: 22 },
    { id: 2, nom: "laptop", prix: 1500, stock_disponible: 12 },
    { id: 3, nom: "clavier", prix: 45, stock_disponible: 18 },
    { id: 4, nom: "pc gamer", prix: 2500, stock_disponible: 9 },
];


// 2
function ajouterproduit(id , quantity){
    let articl = panie.find(e=>e.produit.id == id);
    if(articl){
        if(articl.quantity + quantity <= articl.produit.stock_disponible ){
            articl.quantity +=quantity;
        }
        else{
            console.log("stock insufisant");
        }
    }
    else{
     let produit = produits.find(e=>e.id == id);
     if(!produit){
        console.log("produit non trouver");
     }
     else{
        if(quantity <= produit.stock_disponible){

            let articl = {
                produit:produit,
                quantity:quantity
            };
            produit.stock_disponible -= quantity;
          panie.push(articl);
          console.log("produit ajouter dans panie")
        }
        else{
          console.log("stock de produit insufisant");
        }
     }
    }
}
ajouterproduit(2,6);
ajouterproduit(1,10);
 console.log(panie);
console.log(produits);



// 3
function modifierquantity(id,quantity){
    let articl = panie.find(e=>e.produit.id == id );
    let produit = produits.find(e=>e.id == id);

    if(!articl){
        console.log('produit non trouver');
    }
    if(quantity > articl.produit.stock_disponible + produit.stock_disponible){
        console.log('stock insufiant');
    }
    else{
        produit.stock_disponible =  (produit.stock_disponible + articl.quantity) - quantity;
        articl.quantity = quantity;
        
        console.log('quantity est modifier');
    }
}

// modifierquantity(1,19)
// console.log(panie);
// console.log(produits);



// 4
function supprimerarticle(id){
    let index = panie.findIndex(e=>e.produit.id == id );
    if (index == -1) { 
        console.log("produit non trouve");
         return; 

    }
    panie.splice(index , 1);
    console.log(index);
    
    console.log("article suprimer avec success");
}

// supprimerarticle(1);
console.log(panie);




// 5
function soustotal(id){
    let articl = panie.find(e => e.produit.id == id);
    let soustotal = articl.produit.prix * articl.quantity;
    console.log("sousTotale de article est : "+soustotal);
  

}
// soustotal(2);

function totalpanier(){
  let total = 0
    for(let i = 0 ; i<panie.length;i++){
      total +=panie[i].produit.prix * panie[i].quantity;
    }
    console.log("Totale de panie est : "+total);
    console.log("nombre des articles est : " + panie.length);
}
// totalpanier();



// 6
function code(code, total) {
    if (code == "BIENVENUE") {
       total =  total - (total * 0.15);
        console.log("le total est : "+total);
    } 
    else if (code == "NOEL2025") {
        if (total > 50) {
            total = total - 10;
        console.log("le total est : "+total);
        } 
        else {
         console.log("minimum total est : 50€");
        }
    } 
    else if (code == "LIVGRATUITE") {
        total  =  total - 7;
        console.log("le total est : "+total);
    }
     else {
        console.log("error code");
    }
}

// code("LIVGRATUITE",10);