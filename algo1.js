/* Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale. Dans la salle les sièges sont répartis de la manière suivantes :    - Il y a 26 colonnes de sièges, numérotés de "1" à "26"   - Chaque colonne contient 100 sièges, numérotés de "1" à "100"  Au final la liste devra ressembler à :  1-1  1-2 1-3 . . . 26-98 26-99 26-100 Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.*/

/* Le fonction seatCount prend 2 parametres : le nbColumn (nombre de colonnes de la salle) et nbRaw (nombre de rangées).
Le nombre total d'élément du tableau est donc nbColumn * nbRaw.
Elle utilise seatColumn et seatRaw comme compteur pour les valeurs de chaque case de l'array seatList.
Dans la boucle for, elle incremente les rangées, et si seatRaw dépasse 100, on passe a la colonne suivante(c'est a dire réinitialiser seatRaw à 1 et incrementer seatColumn).
seatCount ajoute au debut de chaque tour de boucle la valeur "seatColumn-seatRaw" a seatList.
elle finit par rendre seatList.
*/

seatCount = (nbColumn, nbRaw) => {
  let seatColumn = 1;
  let seatRaw = 1;
  let seatList = [];
  for(i=0; i < nbRaw*nbColumn; i++){
    seatList.push(seatColumn + "-" + seatRaw);
    seatRaw++;
    if(seatRaw > 100){
      seatRaw = 1;
      seatColumn++;
    }
  }
  return(seatList);
}

console.log(seatCount(26,100))