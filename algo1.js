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

function theatreRoom() {
  //On va initialiser un tableau dans une variable 
  let theatreRoom = [];
  //On initialise une boucle for i qui fera 26 boucle et qui a chaque tour incrémentera de 1 i
  for (let j = 0; j < 26; j++) {
      for (let i = 0; i < 100; i++) {
          //    A l'index i du tableau theatreRoom on va concaténer
          //    la place actuelle
          theatreRoom.push((j + 1) + ' - ' + (i + 1))
          //    renvoyer le tableau theatreRoom !!!!!!! 
      }
  }
  return theatreRoom;
}

console.log(theatreRoom())
