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






/* JE VAIS DEVOIR CREER UN TABLEAU A DEUX DIMENSION AVEC 26 LIGNES ET 100 COLONNES*/

let lignes = new Array();

for(let i=1; i<27; i++)
   lignes[i] = new Array();

for(let i=1; i<27; i++)

for(let j=1; j<101; j++)
      ligne[i][j] = 0;

      for(let i=1; i<27; i++)
      for(let j=1; j<101; j++)
          console.log(i + "-" + j);

/* Pour la function je pense qu'il faudrait utiliser map mais j'ai aucune idée de comment faire*/
/* je vais devoir céer une function qui va avoir une boucle dans un boucle.

  La premiere pour boucle sur elle meme 26 fois pour avoir les 26 lignes. et une autre qui va boucler sur les 26 mais 100 fois. Pour avoir 1-1 1-2 etc*/


function NbChaises = () => {
  const nbLigne = 26;
  const nbChaisesParLigne = 100

  for (let i=0, i < nbLigne, i++){
    console.log()
  }

}