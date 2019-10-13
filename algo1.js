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

tabSieges = [];

for (let i = 1; i < 27; i++) {
  for (let j = 1; j < 101; j++) {
    tabSieges.push(`${i}-${j}`);
  }
}

console.log(tabSieges);

// ********************************************* Add Data-Base, Add Navbar Letter and Add Page Name Price *************************

//*** La Base de donné n'est complété que jusqu'au nom en L ******/

//***************************Add Navbar Letter************ */

const forTheLetter = document.getElementById("firstLetterName");

for (let i = 65; i < 91; i++) {
  forTheLetter.innerHTML += `<a class="styleLetter" id="${i}" onclick="pageName(${i},name${String.fromCharCode(
    i
  )})" href="#${i}">${String.fromCharCode(i)}</a>`;
}

const namePriceTotal = document.getElementById("namePrice");

//******************************Add Data-Base************ */
const nameA = [
  {
    name: "Alexis",
    price: 36
  },
  {
    name: "Alain",
    price: 45
  }
];

const nameB = [
  {
    name: "Bruno",
    price: 10
  },
  {
    name: "Bernart",
    price: 45
  }
];

const nameC = [
  {
    name: "Charli",
    price: 10009
  },
  {
    name: "Claude",
    price: 6789
  }
];

const nameD = [
  {
    name: "Daniel",
    price: 1087
  },
  {
    name: "Dominique",
    price: 234
  }
];

const nameE = [
  {
    name: "Eric",
    price: 34656
  },
  {
    name: "Elise",
    price: 54
  }
];

const nameF = [
  {
    name: "Fanny",
    price: 43
  },
  {
    name: "Florence",
    price: 67
  }
];

const nameG = [
  {
    name: "Gille",
    price: 10
  },
  {
    name: "Gorge",
    price: 45
  }
];

const nameH = [
  {
    name: "Hector",
    price: 34656
  },
  {
    name: "Halle",
    price: 345
  }
];

const nameI = [
  {
    name: "Iris",
    price: 654
  },
  {
    name: "Ingrid",
    price: 984
  }
];

const nameJ = [
  {
    name: "Joris",
    price: 654
  },
  {
    name: "Jerry",
    price: 34
  }
];

const nameK = [
  {
    name: "Kelly",
    price: 64
  },
  {
    name: "Kamille",
    price: 384
  }
];

const nameL = [
  {
    name: "Lola",
    price: 632
  },
  {
    name: "Leon",
    price: 932
  }
];

const nameS = [
  {
    name: "Sam Burns",
    price: 100
  },
  {
    name: "Samuel Yans",
    price: 52563
  },
  {
    name: "Simon Pogg",
    price: 52
  },
  {
    name: "Sophia Maria",
    price: 452
  },
  {
    name: "Stacie Hunberg",
    price: 568
  },
  {
    name: "Steve Grunt",
    price: 1000
  },
  {
    name: "Steve Porcher",
    price: 7865
  },
  {
    name: "Stylvester Stallan",
    price: 77897
  },
  {
    name: "Szen Tren",
    price: 562
  }
];

//****************************************Add Page Name Price***************** */

pageName(83, nameS);

function pageName(id, nameid) {
  for (let i = id; i < 91; i++) {
    namePriceTotal.innerHTML = "";
    namePriceTotal.innerHTML += `<p class="S">${String.fromCharCode(id)}</p>
                                  <hr>`;

    let totalPrice = 0;
    for (const solde of nameid) {
      totalPrice = totalPrice + solde.price;
      namePriceTotal.innerHTML += `<div class="containerNamePrice">
                                          <div class="containerName"><p>${solde.name}</p> </div>
                                          <div class="containerPrice"><p>${solde.price}</p></div>
                                        </div>`;
    }

    namePriceTotal.innerHTML += ` <hr>
                                  <div class="containerNamePrice">
                                      <p>Total</p>
                                      <p>${totalPrice} &#\8364</p>
                                  </div>`;
  }
}
