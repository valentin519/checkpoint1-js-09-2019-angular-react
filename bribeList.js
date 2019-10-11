
const bribeTable = [
    {
        name:'Sam Burns',
        payment:100
    },
    {
        name:'Samuel Yans',
        payment:52563
    },
    {
        name:'Simon Pogg',
        payment:52
    },
    {
        name:'Sophia Maria',
        payment:452
    },
    {
        name:'Stacie Hunberg',
        payment:568
    },
    {
        name:'Steve Grant',
        payment:1000
    },
    {
        name:'Steve Porcher',
        payment:7865
    },
    {
        name:'Sylvester Stalan',
        payment:77897
    }
];

const bribePage = document.querySelector('.rightpage');

const renderBribeList = () => {
    bribeTable.forEach(bribe => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let pText = document.createTextNode(bribe.name);
        p.appendChild(pText);
        let span =  document.createElement('span');
        let spanText = document.createTextNode(bribe.payment+' €');
        span.appendChild(spanText);
        div.appendChild(p);
        div.appendChild(span);

        bribePage.appendChild(div);
    })

    let totalBribes = 0;
    bribeTable.forEach(bribe => totalBribes += bribe.payment);

    bribePage.appendChild(document.createElement('hr'));

    let div = document.createElement('div');
    let p = document.createElement('p');
    let pText = document.createTextNode('Total :');
    p.appendChild(pText);
    let span =  document.createElement('span');
    let spanText = document.createTextNode(totalBribes+' €');
    span.appendChild(spanText);
    div.appendChild(p);
    div.appendChild(span);

    bribePage.appendChild(div);
}
renderBribeList()