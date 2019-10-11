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

//In ES6, not var but let or cont, so I choose let, also we just need one () with parameters (in this case) and one =>
let minMax = (array) => {

    //I had the case for if we haven't an array, or it's empty
    if (!(Array.isArray(array)) || array.length <= 0 || array === undefined) {
      console.log('You need to use an array of integers');
      //We stop the function, that will return undefined
      return;
    }
    //We need let, beacause the value can change, depanding of the position of the min/max
    //We can use a big number and a small number to start, but for no risk, we will start the default number to the first value
    let min = array[0];
    let max = array[0];

    //index of an aray start to 0, so i must too, also we need to have all index to array.length - 1, so equal or less, then we can choose i+1 or i++ (I prefer i++)
    for (let i = 0; i <= array.length - 1; i++) {
      //To take a value of an array, it's [] and not ()
      if (array[i] < min) {
        //We need to take the actual value of the array, not all the array
        min = array[i];
      };
      //If we have an array of one number, it's better to have two if, because the num is min and max
      //The value need to be strictely superior at max to become the new max
      if (array[i] > max) {
        max = array[i];
      };

      //We will return a new array, but not now and not the old array
    };

    //We need to create the new array with the min and max and we have the two variables, so don't need to push
    const arrayMinMax = [min, max];
    //Then we need to return this new array (we can also combine this line and the previous in one)
    return arrayMinMax;
  }

  //Tests part
  // My tests
  // console.log(minMax('toto'));
  // console.log(minMax());
  // console.log(minMax([]));
  // console.log(minMax([5]));
  console.log(minMax([4, 6, 35, -65, -9, 0, 67]));
  console.log(minMax([-30, 5, 43, 108, -5, -7, 89]));
  console.log(minMax([56, 7, 63, 9, 7, 12, 85]));