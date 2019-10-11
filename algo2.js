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

const minMax = (tab) => {
    let min = 0;
    let max = 0;
  
    for (let n=0; n < tab.length; n++) {
      if (tab[n] < min) {
        min = tab [n];
      }
      else if (tab[n] > max) {
        max = tab[n];
      }
    }
    return tab = [min, max];
  }

  console.log(minMax([-30, 5, 43, -78, 108, 8567, -5, -7, 5685, 89]));