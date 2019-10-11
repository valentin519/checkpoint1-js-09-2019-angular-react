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

// Correction de la fonction
const minMax = array => {
  let min = array[0];
  let max = array[0];
  const minMaxArray = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  minMaxArray.push(min, max)
  return minMaxArray;
}

// Variante avec méthode JS
const mathMinMax = array => {
  const min = Math.min(...array)
  const max = Math.max(...array)
  const newArr = []
  newArr.push(min, max)
  return newArr
}

// Test des fonctions
const myArr = [56, 7, 63, 9, 7, 12, 85]
console.log(minMax(myArr))
console.log(mathMinMax(myArr))