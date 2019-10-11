const bribeS = [
    {
        name : 'Sam Burns',
        payment : 100
    },
    {
        name : 'Samuel Yans',
        payment : 52563
    },
    {
        name : 'Simon Pogg',
        payment : 52
    },
    {
        name : 'Sophia Maria',
        payment : 452
    },
    {
        name : 'Stacie Hunberg',
        payment : 568
    },
    {
        name : 'Steve Grant',
        payment : 1000
    },
    {
        name : 'Steve Porcher',
        payment : 7865
    },
    {
        name : 'Sylvester Stallan',
        payment : 77897
    },
    {
        name : 'Szen Tren',
        payment : 562
    }
];

/* adding list of names and bribes from an array of object in the page */ 

const bribeElt = document.getElementById('bribes');

let titleElt = document.createElement('h2');
titleElt.textContent = "S";
let hrElt = document.createElement('hr');

bribeElt.appendChild(titleElt);
bribeElt.appendChild(hrElt);

bribeS.map( person =>{

    let row = document.createElement('div');
    row.classList.add('row-bribes');
    let pElt1 = document.createElement('p');
    let pElt2 = document.createElement('p');

    pElt1.textContent = person.name;
    pElt2.textContent = `${person.payment} €`;

    row.appendChild(pElt1);
    row.appendChild(pElt2);
    bribeElt.appendChild(row);
});

let total = 0
bribeS.map( person =>{
    total += person.payment;
    return total;
})

let hrTotalElt = document.createElement('hr');
bribeElt.appendChild(hrTotalElt);

let totalElt = document.createElement("div");
totalElt.classList.add('row-bribes');
let pTotalElt1 = document.createElement('p');
let pTotalElt2 = document.createElement('p');


pTotalElt1.textContent = "Total";
pTotalElt2.textContent= `${total} €`;


totalElt.appendChild(pTotalElt1);
totalElt.appendChild(pTotalElt2);

bribeElt.appendChild(totalElt);


/* eventListener on each lines to strike out names*/
let rowBribes = document.querySelectorAll('.row-bribes');

rowBribes.forEach(row =>{
    row.addEventListener('click', function(e){
        if (e.currentTarget.style.textDecoration === 'line-through'){
            e.currentTarget.style.textDecoration = 'unset';
        } else {
            e.currentTarget.style.textDecoration = 'line-through';
        }
    })
});