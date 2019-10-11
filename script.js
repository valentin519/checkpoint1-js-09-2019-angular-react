const button = document.getElementById('pay');
const bribeNames = document.getElementById('bribeNames');
const bribeValues = document.getElementById('bribeValues');
const total = document.getElementById('total');

let sum = 0
let name = '';
let value = 0;

let payments = [];

// Ajout de l'event listener pour le clique sur le bouton Pay !
button.addEventListener('click', () => {

  // Paramétrage des variables avec les valeurs récupérées dans le form
  name = document.getElementById('name').value;
  value = document.getElementById('payment').value;

  //Ajout des valeurs récupérées dans le form dans un tableau qu'on affichera par la suite
  payments.push([name, value]);

  //map dans le tableau pour afficher chaque nom
  let bribeNameHtml = payments.map((payment) => {
    return `
      <p>${payment[0]}</p>
    `
  }).join('');

  //map dans le tableau pour afficher chaque paiement associé au nom
  let bribeValuesHtml = payments.map((payment) => {
    return `
      <p>${payment[1]} €</p>
    `
  }).join('');

  // Calcul du total des paiements
  sum += parseInt(value, 10);

  //Affichage dans le html des paiments effectués 
  bribeNames.innerHTML = bribeNameHtml;
  bribeValues.innerHTML = bribeValuesHtml;

  //Affichage du total des paiements
  total.innerHTML = `<hr color="black" size="1" width="50%" align="right"/><p>Total: ${sum}€</p>`
});