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
let newArray = [];
var minMax = (array) => {
    const min = 0;
    const max = 0;
  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      else if (array[i] > max) {
        max = array[i];
      }
      
    }
    newArray.push(min, max);
    return (newArray);
  }

  

  /*J'ai corrigé quelques erreurs mais je n'arrive pas à ajouter min et max à mon nouveau tableau.. console.log(newArray) me renvoie systématiquement un tableau vide */