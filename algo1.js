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

let listSeats = () => {
  const columns = 26;
  const seatsByColumns = 100;
  let list = [];
  //For each column, we will add the num of column + num of each seat
  for (let actualColumn = 1; actualColumn <= columns; actualColumn++) {
    for (let actualSeat = 1; actualSeat <= seatsByColumns; actualSeat++) {
      list.push(`${actualColumn}-${actualSeat}`);
    };
  };
  return list;
};

//Display the list
const completeList = listSeats();
console.log(completeList);

//Some tests
//console.log(completeList[671]);
//console.log(completeList[1356]);
//console.log(completeList[2599]);