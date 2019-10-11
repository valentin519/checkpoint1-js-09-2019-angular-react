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

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.*/

/*const colonne {
  return (colonne.lenght [26])
  for (let i = 0; i < 26; i++) {
    console.log(i);
} /*faire une boucle affichant de 1 a 26*/

/*
const siege {
return (siege.lenght [100])
}

afficher la valeur de 1 à 26 dans la colonne < 26
faire une boucle qui compte jusqu'a 100 dans chaque index du tableau colonne
*/


/*const array = [];
array.length = 26;
for (var i = 0; i < array.length; i++) {
  array[i]++;
}
array.forEach(element => console.log(element));*/

const colonne = [];
colonne.length = 26;

const siege = [];
colonne.length = 100;

array = []; 

for (let i = 0; i < colonne.length; i++) {
  for (let j = 0, j < siege.length; j++) {
    array.push(+colonne[i] + "-" +  siege[j]);
  }
}
console.log(array[1]);
for (let k = 0; k < array.length; k++) {
  console.log(array[k]);
}