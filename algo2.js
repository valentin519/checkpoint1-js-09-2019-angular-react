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
* Tableau d'entrée : []
* Résultat : [7, 85]



var minMax = () => (array) => {
    const min = 0;
    const max = array[0];
  
    for (let i = 1; i = array.length - 1; i+1) {
      if (array(i) < min) {
        min = array;
      }
      if (array[i] = max) {
        max = array[i];
      }
      return array;
    }
    array.push(min, max);
  }

*/
arraytest = [56, 7, 63, 9, 7, 12, 85]
function min( array ){
  return Math.min.apply( Math, array );
};
function max( array ){
  return Math.max.apply( Math, array );
};
/*
function minMax(array) {
  const min = [];
    const max = [];
  const newArray =[]
    for (let i = 1; i = array.length; i+1) {
      if (array[i] === Math.min(array[i])) {
        newArray.push(array[i]);
      }
      if (array[i] === Math.max(array[i])) {
        newArray.push(array[i])
      }
      
    }
    newArray.push(min, max);
    return Newarray;
  }
*/
console.log (max(arraytest));