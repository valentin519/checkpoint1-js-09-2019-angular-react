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

/*let colonnes = 0;
let seats = 0;

function nbSeat(colonne, seat) {
  for (let i = 0; i <= colonne; i++) {
    for (let y = 0; y <= seat; y++) {
      return colonnes += y;
    }
    return seats += i;
  }
};

nbSeat(26, 100);


console.log(`${colonnes} - ${seats}`);*/

let array = [0, 0];

for (let i = 1; i <= 26; i++) {
  for (let y = 1; y <= 100; y++) {
    console.log(array.unshift(y));
  }
  console.log(array.push(i));
};

// je ne vois pas comment créer la fonction et intégrer les deux valeurs à un tableau.







