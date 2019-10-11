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
let colonne = []

for (let i = 1; i <= 26; i++) {
  colonne.push(i);
}

function nbSiege() {
  let finalArray = [];
  for (let i = 0; i < colonne.length; i++) {
    let rangee = []
    for (let j = 1; j <= 100; j++) {
      rangee.push(`${colonne[i]} - ${j}`)
    }
    finalArray.push(rangee);  
  }
  return finalArray;
}
console.log(nbSiege())


