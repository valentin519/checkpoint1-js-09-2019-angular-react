/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

const cols = []
const sit = []
let salle = []

for (let i=1 ; i < 26 ; i++){
  cols.push(i)
}

for (let j=1 ; j < 101 ;j++){
  sit.push(j)
}
function calculSit () {
  for (let i=0; i<cols.length; i++){
    for (let j=0; j<sit.length; j++){
      salle.push(`${cols[i]} - ${sit[j]}`)
    }
  }
}
calculSit()
console.log(salle)



// L'idée est de faire deux boucles imbriquées l'un dans l'autre et de push les valeurs dans un tableau.
// En gros :
// declarer le premier tableau 
// fonction  =>
// Premiere boucle donnant les colonnes donc (i<26)
//    push.tableau
//    Deuxieme boucle comptant les sièges
//      push sièges dans tableau

//console.log(tableau)
// let salle = []

// function Calcul () {
//   for (let i=1 ; i < 26 ; i++){
//     salle.push()
//     console.log(salle)
//     let final = i
//   }

//   for (let j=1 ; j < 101 ;j++){
//     final.push(j)
//     console.log(final)
//   }
// }