// Object array that contains people and their bribes
let bribesArray= [
    {
    name :'Simon Burns',
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
//function to order
function compare (a, b) {
    comparaison = 0;
    if(a.name > b.name) {
      comparaison = 1;
    } else {
      comparaison = -1;
    }
    return comparaison;
  }
bribesArray.sort(compare);


// Function to display the peoples who received bribes
bribesListElt = document.getElementById("bribesList");
let delElt = [];

function bribesArrayDisplay(){
    let total = 0;
    
    for (let i=0; i<bribesArray.length; i++){
        
        total += bribesArray[i].bribe;
        
        bribesListElt.innerHTML += `<tr>
                                        <td id="line${i}"><span id="del${i}" class="delete">delete</span><span id="lineName${i}" class="pointer">${bribesArray[i].name}<span></td>
                                        <td>${bribesArray[i].bribe}$</td>
                                    </tr>`
        delElt[i]=document.getElementById("del"+i);
        delElt[i].style.display = "none"
        
    }
    
    bribesListElt.innerHTML += `<tr>
                                    <td></td>
                                    <td><div class="barre"></div></td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>${total}$</td>
                                </tr>`;
}


//Event to add a people and a bribe
let payElt=document.getElementById("pay");
let nameElt=document.getElementById("name");
let bribeElt=document.getElementById("bribe");

payElt.addEventListener("click",function(){
    let newBribeObj = { name : nameElt.value, bribe : Number(bribeElt.value) }
    bribesArray.push(newBribeObj);
    bribesArray.sort(compare);
    bribesListElt.innerHTML = "";
    bribesArrayDisplay();
    deleteBribe();
})


//Event to put a line-through on the bribes and display a delete button;
function deleteBribe(){
    let lineElt = [];
    let lineNameElt = [];
    let crossed = new Array(bribesArray.length);

    for(let i=0; i<bribesArray.length; i++){
        lineElt[i]=document.getElementById("line"+i);
        lineNameElt[i]=document.getElementById("lineName"+i);
        delElt[i]=document.getElementById("del"+i);
        
        lineNameElt[i].addEventListener("click", function(){
            if (!crossed[i]){
                lineNameElt[i].style.textDecoration = "line-through";
                delElt[i].style.display = "inline"
                crossed[i]=true;
            }
            else{
                lineNameElt[i].style.textDecoration = "none";
                delElt[i].style.display = "none"
                crossed[i] = false;
            }
        }) 
    }       
    //Delete the bribe  
    for(let i=0; i<bribesArray.length; i++){    
        delElt[i].addEventListener("click",function(){
            bribesArray.splice(i,1);
            bribesListElt.innerHTML = "";
            bribesArrayDisplay();
            deleteBribe();
        })
    }   
    
}

// function to display the alphabet characters (links)
function displayAlpha(){
    for (i=65; i<=90; i++){
        let letter = String.fromCharCode(i)
        console.log(letter)
        lettersElt = document.getElementById("letters");
        lettersElt.innerHTML += `<a href="#" class="letter">${letter}</a>`
    }
}

//Call of the functions
displayAlpha();
bribesArrayDisplay();
deleteBribe();






