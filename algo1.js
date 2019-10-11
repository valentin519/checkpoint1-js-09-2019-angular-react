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
function numSeets(){                  // déclaration de la fonction numéros de seet
  let arraySeets = [];                // déclaration d'un tableau vide de seets

  for(let i=1; i<=26 ; i++) {         // première boucle des 26 columns
    for (let j=1 ; j<=100 ; j++) {    // deuxième boucle des 100 seets pour chaque columns
      arraySeets.push(i + "-" + j);   // implémentation à chaque tour de boucle du numéro i de column et du numéro j de seet concaténé
    }
  }
  return arraySeets;                  // retour du tableau de seets
};
console.log(numSeets());              // affichage du tableau de seets