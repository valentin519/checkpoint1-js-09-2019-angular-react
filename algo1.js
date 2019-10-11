/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivante : 
  - Il y a 26 colonnes de sièges, numérotées de "1" à "26"
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

function theater(){

  // on a besoin d'un tableau pour enregistrer l'ensemble de nos résultats
  let seats = []; 

  // on crée une boucle permettant de créer l'ensemble des colonnes
  for( let i = 1; i <= 26; i++){
    // chaque colonne doit contenir une 100aine de sièges
    // on utilise donc encore une boucle

    // on a besoin de créer un tableau représentant la colonne en cours 
    let column = [];

    for( let j = 1; j <= 100; j++ ){
      // nous avons donc à chaque tour de boucle, la variable i qui représente le numéro de la colonne 
      // et la variable j qui représente le numéro du siège au sein de cette colonne
      // on pousse dans la colonne en cours la chaîne de caractère suivante: 
      
      // column.push( `${i} - ${j}`); // syntaxe template strings
      column.push( i + "-" + j); // vieille syntaxe
    }

    // on pousse la colonne ainsi remplie au sein de notre tableau "seats"
    seats.push(column)
  }

  return seats;
}

console.log(theater());