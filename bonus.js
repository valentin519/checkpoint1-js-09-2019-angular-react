// Object array to display the bribes
let bribesArray = [
    {
    name :'Sam Burns',
    bribe : 100
    },
    {
    name :'Samuel Yans',
    bribe : 52563
    },
    {
    name :'Simon Pogg',
    bribe : 52
    },
    {
    name :'Sophia Maria',
    bribe : 452
    },
    {
    name :'Stacie hunberg',
    bribe : 568
    },
    {
    name :'Steve Grant',
    bribe : 1000
    },


]

let bribesListElt = document.getElementById("bribesList")
let total = 0;

for (let i=0; i<bribesArray.length; i++){
    total += bribesArray[i].bribe;
    bribesListElt.innerHTML += `<tr>
                                 <td>${bribesArray[i].name}</td>
                                 <td>${bribesArray[i].bribe}$</td>
                               </tr>`

}
bribesListElt.innerHTML += `<tr>
                                <td></td>
                                <td><div class="barre"></div></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${total}$</td>
                            </tr>`






