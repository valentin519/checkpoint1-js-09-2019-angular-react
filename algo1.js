/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/



// Je déclare ma fonction Place assise 
const rawSeat = () => {
  
  // Deuxième Tableau qui contiendra le résultat final 
  const raw = []

  // Boucle for : Je déclare mon let i = 1 (on commence à 1 ici et non pas 0), tant que i est inférieur ou égal à 26, j'incrémente i de + 1. (jusqu'à 26)
  for (let i = 1; i <= 26; i++) {

    // Même procédé ici, boucle for : let ea (emptyArray) = 1, tant que ea est inférieur ou égal à 100, j'incrémente i de + 1. (Jusqu'à 100)
    for (let ea = 1 ; ea <= 100 ; ea++ ) {
      // Je cherche une méthode qui va me permettre de pousser mes éléments dans le tableau vide (raw) (raw.push ?)
      raw.push(`${i} + ${ea}`)
    }
 }

 //Je return pour récupérer le résultat de raw.
 return raw
}

console.log(rawSeat());


















