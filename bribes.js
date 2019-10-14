const allBribes=[];


function writeItDown() {

    var writeName = document.getElementById('name').value;
    var writeSum = document.getElementById('paid').value;

    const bribesEntry = {
        name: writeName, 
        sum: writeSum
    };
    
    allBribes.push(bribesEntry);
    
    const sumTot = () => {
        let total = 0;
        for (i=0;I<allBribes.length;i++) {
            total = total + allBribes[i].sum;
        }
    };
        

    return document.getElementById('entries').innerHTML = `${allBribes.map(tagada => `<div>${tagada.name} ${tagada.sum}</div>`)}`;
    //return document.getElementById('total').innerHTML = `<div>TOTAL :  ${sumTot()}</div>`;
};