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

/*
var minMax = () => (array) => {
    const min = 0;
    const max = array[0];
  
    for (let i = 1; i = array.length - 1; i+1) {
      if (array(i) < min) {
        min = array;
        return min
      }
      if (array[i] = max) {
        max = array[i];
        return max;
      }
      
      
    }
    array.push(min, max);
    return array
  
  }
  */


const minMax = (array) => {
  let min = array[0];
  let max = array[0];
  const tabMinMax = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] < min) {
      min = array[i];
    } if (array[i] > max) {
      max = array[i];
    };
  };
  tabMinMax.push(min, max);
  return tabMinMax;
};

//Test with array given in the instructions above
const tabEx1 = [4, 6, 35, -65, -9, 0, 67]
console.log (minMax(tabEx1)) //expected output : [-65, 67]

const tabEx2 = [-30, 5, 43, 108, -5, -7, 89]
console.log (minMax(tabEx2)) //expected output : [-30, 108]

const tabEx3 = [56, 7, 63, 9, 7, 12, 85]
console.log (minMax(tabEx3)) //expected output : [7, 85]