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

/* const tab = () => { 

  const tab1 = [];
 

  for (let i = 0; i < 27; i++) {

       const row = [];

      for (let j = 1; j < 101; j++) {

          row.push(j);

      }

      tab.push(row);

  }
  
  return tab;

}

console.log(tab()); */

/* function centsToEuros(cents) {
  return cents / 100;
}

const pricesInCents = [2999, 1899, 3789, 4199];
const pricesInEuros = pricesInCents.map(centsToEuros);

console.log('input array:', pricesInCents);
console.log('output array:', pricesInEuros); */


const tab1 =[];
for (let i= 0; i <27; i++)
tab1.push(i);

const tab2 = [];
for (let j=0; j <101; j++)
tab2.push(j);

const tab3 = tab1.map(sit => tab1&&tab2);

console.log(tab3)