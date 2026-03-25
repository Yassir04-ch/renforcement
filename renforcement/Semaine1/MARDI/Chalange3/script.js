let avis = [
  { pseudo: "yassir", note: 5, commentaire: "commentaire1", date: "2026-03-15" },
  { pseudo: "anas", note: 4, commentaire: "commentairehhhh2", date: "2026-03-14" },
  { pseudo: "salah", note: 3, commentaire: "commentairehhhhhh3", date: "2026-03-12" },
  { pseudo: "salma", note: 2, commentaire: "commentairehhhhhhhhh4", date: "2026-03-10" },
  { pseudo: "aya", note: 5, commentaire: "commentairehhhhhhh5", date: "2026-03-09" },
  { pseudo: "aymane", note: 1, commentaire: "commentairehhhh6", date: "2026-03-08" },
];
// 1
let total = 0;
for(let i = 0 ; i<avis.length ; i++){
   total = total + avis[i].note ;
}
let moyyen = total/avis.length;
console.log(moyyen);


// 3
let positifs = avis.filter(e => e.note >= 4);
console.log(positifs);
let negatifs  = avis.filter(e => e.note <= 2);
console.log(negatifs );


// 4
let sortavis = avis.sort((a,b)=>new Date(a.date) - new Date(b.date));
console.log(sortavis);


// 5
let avislong = avis[0];
for(let i = 0 ; i<avis.length ; i++){
    if(avis[i].commentaire.length > avislong.commentaire.length){
        avislong = avis[i];
    }
}
console.log(avislong);


// 6

let nbavis = avis.length;
let nbavisposi = positifs.length;
let nbavisnega = negatifs.length;
let nbavisneut = 0;

for(let i = 0 ; i<avis.length;i++){
    if(avis[i].note == 3){
        nbavisneut ++;
    }
}
console.log(moyyen+"/5 basé sur"+ "\n"+"nombre des avis :" + nbavis +"\n"+"nombre des avis positif :"+nbavisposi+"\n"+"nombre des avis negatif :"+nbavisposi +"nombre des avis positif :"+nbavisposi+"\n"+"nombre des avis neutres :"+nbavisneut)