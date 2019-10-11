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


// const theater = (column, seat) => {
//   const array = []
//   for (let i = 0; i < column; i++) {
//     const elementI = array[i];
//     array.push(elementI)
//     for (let j = 0; j < seat; j++) {
//       const elementJ = array[j];
//       array.push(elementJ)
//     }
//   }
//   return array
// }

const theater = (column, seat) => {
  const array = []
  for (let i = 1; i < column+1; i++) {
    const elementI = i;
    for (let j = 1; j < seat+1; j++) {
      const output = elementI+'-'+ j
      array.push(output)
    }
    // array.push(elementI)
  }
  return array
}

console.log(theater(26, 100));
