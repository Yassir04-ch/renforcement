let notes = [12, 8, 15, 6, 18, 9, 14];


let somme = 0;
let max = notes[0];
let min = notes[0];
let moy = 0;

for (let i = 0 ;i < notes.length ; i++) {
   somme += notes[i];

  if (notes[i] > max) {
    max = notes[i];

  }
  if (notes[i] < min) {
    min = notes[i];
  }
  if (notes[i] >= 10) {
    moy++;
}
}

let moyenne = somme / notes.length;

console.log("somme :", somme);
console.log("moyenne :", moyenne);
console.log("max :", max);
console.log("min :", min);
console.log("moyenne >= 10:", moy);