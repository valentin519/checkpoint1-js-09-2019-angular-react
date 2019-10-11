const line = document.getElementById('container-rightpage');

function createLine(id, price){
    const name = document.createElement('div');
    name.innerHTML = `<p>${id}</p>`
    const due = document.createElement('div'); 
    due.innerHTML = `<p>${price}</p>`

    line.appendChild(name)
    line.appendChild(due)
}

const Names = ["Sam Burns", "Sam Yans", "Simon Pog", "Sophia Maria", "Stacie Hunnberg", "Steve Grants", "Steve Porcher"];
const Prices = ["100€", "52563€", "52€", "452€", "568€", "1000€"]

for (let i = 0; i< Names.length; i++) {
  createLine(Names[i], Prices[i]);
}
