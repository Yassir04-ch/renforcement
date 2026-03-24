
let chansons =[
  { title:"chansons1", artist: "artist1", duration: 210, genre: "rock" },
  { title: "chansons2", artist: "artist2", duration: 180, genre: "jazz" },
  { title: "chansons3", artist: "artist3", duration: 190, genre: "chaabi" },
  { title: "chansons4", artist: "artist4", duration: 280, genre: "ray" },
  { title: "chansons5", artist: "artist5", duration: 170, genre: "rap" },
  { title: "chansons6", artist: "artist6", duration: 130, genre: "rock" },
  { title: "chansons7", artist: "artist7", duration: 210, genre: "charqui" },
  { title: "chansons8", artist: "artist8", duration: 230, genre: "rap" },
  { title: "chansons9", artist: "artist9", duration: 180, genre: "rap" },
  { title: "chansons10", artist: "artist10", duration: 220, genre: "rap" },
];

let titles = [];
for(let i = 0 ; i<chansons.length ; i++){
    titles.push(chansons[i].title);
}
console.log(titles);