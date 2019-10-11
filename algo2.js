/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/

function minMax(listNums) {

  // on initialise la valeur "min" à 0
  let min = listNums[0];

  // on initialise la valeur max à ( première valeur de la liste des numéros fournis)
  let max = listNums[0];

  // pour chaque numéro dans la liste de numéros
  for (let i = 0; i < listNums.length; i++) {

    // si le numéro en cours est plus petit que la valeur contenue dans "min"
    if (listNums[i] < min) {
      // alors on actualise "min" et on lui donne comme valeur, le numéro en cours
      min = listNums[i];
    }

    // si le numéro en cours est plus grand que la valeur contenue de ans "max"
    if (listNums[i] > max) {
      // alors on actualise "max" pour lui assigner comme valeur, le numéro en cours
      max = listNums[i];
    }
  }
  
  // on retourne un tableau contenant les valeurs min et max
  return [min,max];
}

let result1 = minMax([4, 6, 35, -65, -9, 0, 67]);
let result2 = minMax([-30, 5, 43, 108, -5, -7, 89]);
let result3 = minMax([56, 7, 63, 9, 7, 12, 85]);

console.log(result1, result2, result3);