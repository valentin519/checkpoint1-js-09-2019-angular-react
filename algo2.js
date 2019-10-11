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


/*  Fonction :
    - j'initialise une fonction relié a une constante du nom minMax
      qui prendra en parametre 1 valeur de type tableau
    - on initialise 1 varibale "min" qui prendra une valeur tres haute ex : 9999 
    - on initialise 1 varibale "max" qui prendra une valeur égale à 0
    - on initialise 1 tableau vide nommé "newArray"
    - on itialise 1 boucle for i à 1 et i inférieur à la longueur du tableau reçu en parametre de la fonction minMax
    - si l'element du tableau i est inférieur a la variable min alors min recevra l'element du tableau i
    - sinon si l'element du tableau i est supérieur à la variable max alors max recevra l'element du tableau i
    - lorsque la boucle sera terminée, on pousse les variables min et max dans le tableau newArray
    - puis on retourn newArray dans la variable resultat

    Appel de la fonction:
    - on initialise une variable resultat, qui recevra le retour de la fonction minMax
    - puis un console log du resultat resultat
    */

var minMax = (array) => {
  let min = 9999;
  let max = 0;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
    }else if(array[i] > max){
      max = array[i];
    }
  }
newArray.push(min, max);  
return newArray;
}

// test de la fonction minMax
let resultat = minMax([4, 6, 35, -65, -9, 0, 67]);
console.log(resultat);
resultat = minMax([-30, 5, 43, 108, -5, -7, 89]);
console.log(resultat);
resultat = minMax([56, 7, 63, 9, 7, 12, 85]);
console.log(resultat);