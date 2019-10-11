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

array = [56, 7, 63, 9, 7, 12, 85]

// on déclare minMax en tant que fonction du paramètre Array, "array
// " étant le tableau déclaré au dessus. //
// ensuite on déclare les variables min et max qui sont égal
// a array[0] c a d au premier élément du tableau nommé "array"
// ensuite on écrit la boucle For qui va analysé en continu
// le contenu du tableau sur "array.length" donc littéralement
// " la taille du tableau " 
// array[i] "<" min on lui dit que si "valeur du tableau" est supérieur a min=0
// alors la valeur est stocké, si l'index trouve un chiffre supérieur au précédent
// il le garde en mémoire en priorité.
// même concept pour le "max"
// pour finir on push dans notre tableau vide la valeur finale mix/max.
// puis on le return dans un console.log pour avoir une vue
// et on appelle la fonction pour qu'elle s'éxécute.


minMax = (array) => {        
  let min = array[0];   
  let max = array[0];
  let tab = []

  for (let i = 0 ; i < array.length - 1; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  tab.push(min, max);
  return console.log(tab);
}

minMax(array);

  
 