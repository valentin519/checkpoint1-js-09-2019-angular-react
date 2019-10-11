const button = document.getElementById('pay');
let bribes = document.getElementById('bribes');
const total = document.getElementById('total');

let sum = 0
let name = '';
let value = 0;

let payments = [];

button.addEventListener('click', () => {
  name = document.getElementById('name').value;
  value = document.getElementById('payment').value;

  payments.push([name, value]);

  let bribesHtml = payments.map((payment) => {
    return `
      <p>${payment[0]} ${payment[1]}€</p>
    `
  });

  sum += parseInt(value, 10);
  bribes.innerHTML = bribesHtml;
  total.innerHTML = `<hr color="black" size="1" width="50%" align="right"/><p>Total: ${sum}€</p>`
});