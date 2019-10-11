let pay = document.getElementById('pay');
let name = document.getElementById('name').value;
let payment = document.getElementById('payment').value;
let right = document.getElementById('right');

pay.addEventListener('click', ()=>{
    right.innerHTML = `${name} ${payment}€`;
});