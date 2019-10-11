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
/*  Fonction :
    - j'initialise une fonction relié a une constante du nom siegeTheatre
      qui prendra en parametre 2 valeurs col_p et lig_p
    - s'initialise 1 tableau vide qui receptionnera les rangees de sieges => qui se nommera "rangee"
    - on itialise 2 boucles for i et j à 1 et ces dernieres seront inférieures a leurs parametres
      respectives col_p et lig_p
    - puis on enverra le resultat des boucles dans le tableau rangee
    - lorsque la boucle sera terminée, on retournera le tableau "rangee"

    Appel de la fonction:
    - on initialise une variable rangeeSiege, qui recevra le retourn de la fonction SiegeTheatre
    - puis un console log du resultat rangeeSiege
    */

const siegeTheatre = (col_p, lig_p) => {

  let rangee = [];

  for(let i = 1; i <= col_p; i++){
    for(let j =1; j <= lig_; j++){
      rangee.push(`${i} - ${j}`);
    }
  }
  return rangee;
}

let rangeeSiege = siegeTheatre(26, 100);
console.log(rangeeSiege);


