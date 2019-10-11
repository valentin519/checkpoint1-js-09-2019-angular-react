let listSieges = [];
let nbrCol = 26;
let nbrRan = 10;
function seatCounter(){
    let listSieges = [];
    for (i=1; i<=nbrCol; i++){
        for (j=1; j<=nbrRan;j++){
            listSieges.push(i+"-"+j)
        }
    }
    return listSieges
    
}    
console.log(seatCounter(nbrCol,nbrRan))