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

// // afficher en parcourant le tableau
// console.log(tabpoulet[2].name);
// // afficher en parcourant l'objet
// console.log(objPoulet.city);

// //boucle for (tant que...{on fait ça})
// for (let i = 0; i < tabpoulet.length; i++) {
//   if (tabpoulet[i].name) {
//     console.log(tabpoulet[i]);
//   } else {
//     console.log("nop !");
//   }
// }

const example = [4, 6, 35, -65, -9, 0, 67];

const minMax = example => {
  let min = 100;
  let max = 0;
  let mem = [];

  for (let i = 0; i <= example.length; i++) {
    if (example[i] < min) {
      min = example[i];
    }
    if (example[i] >= max) {
      max = example[i];
    }
  }
  mem.push(`${min}, ${max}`);
  return mem;
};

console.log(minMax(example));
