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

// var minMax = (array) => {
//     const min = 0;
//     const max = 1;
//     newArray=[];

//     for (let i = 0; i = tableau.length; i++) {
//     /*Je vais boucler dans mon tableau autant de fois que ça longeur pour savoir si : */  

//     /* Si l'indice, qui par de 0 jusqu'a i qui est egale à la longeur du tableau, est plus petit que min alors il devient min */
//       if (tableau[i] <= min) {
//         min = tableau[i];
//       };

//     /* Si l'indice, qui par de 0 jusqu'a i qui est egale à la longeur du tableau, est plus grand que max alors il devient max */

//       if (tableau[i] >= max) {
//         max = tableau[i];
//       };

//     /* Je met tout ça dans un novueau tableau vide*/
//       newArray.push(min, max);

//       return newArray;
//     }
// }

// minMax()

// let array = [-30, 5, 43, 108, -5, -7, 89]

// var minMax = () => {
//   let min = 0;
//   let max = array[0];

//   for (let i = 0; i = array.length-1; i++) {
    
//     if (array[i] < min) {
//       min = array[i];
//     }
//     if (array[i] >= max) {
//       max = array[i];
//     }
//     array.push(min, max)
//   }
//   console.log (array);
// }

// minMax()

var minMax = (array) => {
  let min = array[0];
  let max = array[0];
  let nouveauTableau = []

  for (let i = 0; i < array.length; i++) {

    if (array[i] < min) {
      min = array[i];
    };
    if (array[i] >= max) {
      max = array[i];
    }
  }
  nouveauTableau.push(min, max);
  return nouveauTableau;
};

minMax()


/* Ce que j'ai pas compris :

- le (array) dans la fonction

*/