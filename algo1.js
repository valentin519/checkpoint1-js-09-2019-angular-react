/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.const res = columns.map(numCol => rows.map(numRow => `${numCol} - ${numRow}`))
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/
function theator() {
  // let rows = []
  // let columns = []
  // for (let i = 1; i < 101; i ++) {
  //   rows.push(i)
  // }
  // for (let j = 1; j < 27; j++ ) {
  //   columns.push(j)
  // }
  // const res = columns.map(numCol => rows.map(numRow => `${numCol} - ${numRow}`))
  // // res.flatMap()
  // console.log(res)
  // return res
  let array = []
  for (let i = 1; i < 27; i++) {
    for (let j = 1; j < 101; j++) {
      array.push(i + '-' + j)
    }
  }
  console.log(array)
}

theator()


