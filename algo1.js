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

const siege = () => {
  const _siege = [];

  for (let rowIndex = 0; rowIndex < 27; rowIndex++) {
      const row = [];

      for (let colIndex = 0; colIndex < 100; colIndex++) {
          row.push(`${row}-${colIndex + 1}`);
      }
  
      _siege.push(row);
  }
  return _siege;
};
module.exports = siege;