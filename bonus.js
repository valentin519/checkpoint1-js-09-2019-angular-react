let table = [
    {
       name: 'Sam Burns',
       amount: 100
    },
    {
        name: 'Samuel Yans',
        amount:52563
    },
    {
        name: 'Simon Pogg',
        amount:52
    },
    {
        name: 'Sophia Maria',
        amount:452
    },
    {
        name:'Stacie Hunberg',
        amount: 568
    },
    {
        name: 'Steve Grant',
        amount: 1000
    },
    {
        name:'Steve Porcher',
        amount: 7865
    },
    {
        name:'Sylvester Stallan',
        amount: 77897
    },
    {
        name: 'Szen Tren',
        amount: 562
    },
    {
        name: 'Total',
        amount: 666666
    },
]
const tableNames = document.getElementsByClassName('name');
const tableAmounts= document.getElementsByClassName('amount');

for (let i = 0; i < table.length; i++){
    tableNames[i].innerHTML=table[i].name
    tableAmounts[i].innerHTML=table[i].amount
    
}

for (let i = 0; i < table.length; i++){
    tableNames[i].addEventListener('click', () =>{    
    tableNames[i].className = 'barre';
    tableAmounts[i].className = 'barre';
})
}

