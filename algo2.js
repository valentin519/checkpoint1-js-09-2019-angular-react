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



 // J'ai voulu troller l'exo avec des choses randoms dans mes let c'était amusant.
const minMax = (array) => {
  const tab = []
  let min = +Math.PI;
  let max = -Math.PI;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  tab.push(min, max);
  return tab;
}

const newTab = [88747498474, 0983092849275, 20284624726424, 92867245245824, 982737264872, 299882, 216516251615, 987237645, "jaaj", true.length, false.length, 0870870797024284,]

console.log(minMax(newTab))