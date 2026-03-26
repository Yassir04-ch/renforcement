let reservation = [];


// 2
function ajouterReserv(reserv){
    let total = 0;
    for(let i = 0 ; i<reservation.length ; i++){
      if (reservation[i].date == reserv.date && reservation[i].heure == reserv.heure && reservation[i].statut == "confirmée" )
        {
         total += reservation[i].nombre_personnes;
        }    
    }
      if (total + reserv.nombre_personnes <= 30) {
            reserv.statut = "confirmée";
        } 
        else {
            reserv.statut = "en attente";
        }
    reservation.push(reserv);
    console.log(reserv)
}

let reserv = {
    id:1,
    nom_client:"yassir",
    date:"20-01-2026",
    heure:"19:20",
    telephone:"0678356735",
    nombre_personnes:20
}


let reserv2 = {
    id:2,
    nom_client:"anas",
    date:"21-01-2026",
    heure:"11:20",
    telephone:"0678356735",
    nombre_personnes:2
}
let reserv3 = {
    id:3,
    nom_client:"ayoub",
    date:"20-01-2026",
    heure:"12:20",
    telephone:"0678356735",
    nombre_personnes:15
}
let reserv4 = {
    id:3,
    nom_client:"ahmed",
    date:"21-01-2026",
    heure:"12:20",
    telephone:"0678356735",
    nombre_personnes:25
}
ajouterReserv(reserv);
ajouterReserv(reserv2);
ajouterReserv(reserv3);
ajouterReserv(reserv4);
console.log(reservation)



// 3
function annulerreservation(id){
    let total = 0;
    let reserv = reservation.find(e=>e.id == id);
    if(!reserv){
        console.log("reservation non trouvee");
    }
    else{
        reserv.statut = "annulée"
        console.log("reservation et annulee");
        for (let i = 0; i < reservation.length; i++) {
           if(reservation[i].date == reserv.date && reservation[i].heure == reserv.heure && reservation[i].statut == "confirmée"){
            total += reservation[i].nombre_personnes;
        }
        }  

        for (let i = 0; i < reservation.length; i++) {
        if (reservation[i].date == reserv.date && 
            reservation[i].heure == reserv.heure && 
            reservation[i].statut == "en attente") {
            if (total + reservation[i].nombre_personnes <= 30) {
                reservation[i].statut = "confirmée";
                total += reservation[i].nombre_personnes;
                console.log(reservation[i].nom_client + " confirmée");
            }
        }
    }   

    }
    

}
annulerreservation(1);


// 4
function listreservations(date){
    let reservations = reservation.filter(e=>e.date == date);
     reservations.sort((a,b)=>a.heure.localeCompare(b.heure));
      console.log(reservations);        
    
}
listreservations("20-01-2026");




// 5
function tauxoccupation(date){
let occupa = {};
let h = "";
for (let i = 0; i < reservation.length; i++) {
  if(reservation[i].date == date && reservation[i].statut == "confirmée") {
    h = reservation[i].heure; 
    occupa[h] =  0
    occupa[h] =  occupa[h]  + reservation[i].nombre_personnes; 
    let taux = (occupa[h] / 30) * 100;
    occupa[h].taux = taux;

  } 
}
     console.log(occupa);

}


// tauxoccupation("21-01-2026")
