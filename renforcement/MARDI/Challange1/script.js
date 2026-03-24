
let chansons =[
  { title:"chansons1", artist: "artist1", duree: 210, genre: "rock" },
  { title: "chansons2", artist: "artist2", duree: 180, genre: "jazz" },
  { title: "chansons3", artist: "artist3", duree: 190, genre: "chaabi" },
  { title: "chansons4", artist: "artist4", duree: 280, genre: "ray" },
  { title: "chansons5", artist: "artist5", duree: 170, genre: "rap" },
  { title: "chansons6", artist: "artist6", duree: 130, genre: "rock" },
  { title: "chansons7", artist: "artist7", duree: 210, genre: "charqui" },
  { title: "chansons8", artist: "artist8", duree: 370, genre: "rap" },
  { title: "chansons9", artist: "artist9", duree: 180, genre: "rap" },
  { title: "chansons10", artist: "artist10", duree: 220, genre: "jazz" },
];

let titles = [];
for(let i = 0 ; i<chansons.length ; i++){
    titles.push(chansons[i].title);
}
console.log(titles);


let rock = chansons.filter( chans => chans.genre == "rock");
console.log(rock);



let convertie = [];
for(let i = 0 ; i<chansons.length ; i++){
    let minut = Math.floor(chansons[i].duree / 60);
    let second = Math.floor(chansons[i].duree % 60);
    // console.log(minut + ":"+second);
    convertie.push({
        title: chansons[i].title,
        artist: chansons[i].artist,
        duration: minut +":" + second,
        genre: chansons[i].genre
    });

}
console.log(convertie);



let total = 0;
for(let i = 0 ; i<chansons.length ; i++){
    total =total + chansons[i].duree;
}
let minut = Math.floor(total / 60);
let second = total % 60;
console.log(minut + ":" + second);




let longue = chansons[0];

for(let i = 0 ; i<chansons.length ;i++){
    if(chansons[i].duree > longue.duree){
        longue = chansons[i];
    }
}
console.log(longue);



let message = "tout est bien";
for (let i = 0; i < chansons.length; i++) {
  if (chansons[i].duree >= 360) {
     message = "au moins une chanson duree plus de 6 minutes"
  }
}
console.log(message);



let errur = "tout est bien";
for (let i = 0; i < chansons.length; i++) {
  if (chansons[i].genre == "jazz") {
     errur = "au moins une chanson est du genre jazz"
  }
}
console.log(errur);



let sortchans = chansons.sort((a,b)=> a.duree - b.duree);
console.log(sortchans);



