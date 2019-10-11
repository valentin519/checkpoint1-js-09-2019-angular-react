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


const minMax = (array) => {
  //Initialisation des var qui contiendra les resultats avec le premier item du tableau car si on init à 0 et que le min est supérieur à 0 on ne le trouve pas.
  let min = array[0];
  let max = array[0];
  let newArray = [];

  //Parcours du tableau avec les conditions pour trouver les min et max
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  //Une fois le tableau entier parcourus on ajoute nos résultats dans le tableau à retourner.
  newArray.push(min, max);
  return newArray;
};

minMax(testArray);

 /* Sinon en plus simple : 
  let min = Math.min(...testArray);
  let max = Math.max(...testArray); */