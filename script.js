let names = [
    {
        name: "Sam Burns",
        price: "100"
    },
    {
        name: "Samuel Yans",
        price: "52563"
    },
    {
        name: "Simon Pogg",
        price: "52"
    },
    {
        name: "Sophia Maria",
        price: "452"
    },
    {
        name: "Stacie Hunberg",
        price: "568"
    },
    {
        name: "Steve Grant",
        price: "1000"
    },
    {
        name: "Steve Porcher",
        price: "7865"
    },
    {
        name: "Sylverter Stallan",
        price: "77897"
    },
    {
        name: "Szen Tren",
        price: "562"
    }
]

const names2 = document.getElementsByClassName('namePay')
const payPay = document.getElementsByClassName('payPay')

const addPers = () => {
    document.getElementById("forName").innerHTML = ""
    for(let i = 0; i < names.length; i++){
        const para = document.createElement("P");
        para.className = 'namePay'
        para.innerHTML = names[i].name
        document.getElementById("forName").appendChild(para);
    }
} 

const forPay = () => {
    document.getElementById("forPrice").innerHTML = ""
    for(let i = 0; i < names.length; i++){
        const paraPay = document.createElement("P");
        paraPay.className = 'payPay'
        paraPay.innerHTML = `${names[i].price} €`
        document.getElementById("forPrice").appendChild(paraPay);
    }
}

const price = () => {
    count = 0
    let add = names.map( key => key.price.split(" "))
    for (let i = 0; i < add.length; i++){
        let number = parseInt(add[i][0], 10)
        count += number
    }
    document.getElementById('price').innerHTML = `${count} €`
}

const createButtons = () => {
    document.getElementById("erase").innerHTML = ""
    for (let i = 0; i < names.length; i++){
        const buttons = document.createElement("button")
        buttons.className = "erasing"
        buttons.innerHTML = "X"
        document.getElementById("erase").appendChild(buttons);
    }
}

function lineUp() {
    for (let i = 0; i < names.length; i++){
        names2[i].addEventListener('click', event => {
            names2[i].style.textDecoration = 'line-through';
            payPay[i].style.textDecoration = 'line-through'
        }) 
    }
}

const addPayer = () => {
    let pers = document.getElementById('pers').value;
    let money = document.getElementById('money').value;
    console.log(typeof money)
    if (pers === "" || money === "" || isNaN(money) === true){
        window.alert("veuillez remplir les champs avant de valider !")
    } else {
    names.push({name: pers, price: money})
    addPers()
    forPay()
    price()
    lineUp()
    createButtons()
    document.getElementById('pers').value = ""
    document.getElementById('money').value = ""
    names2 = document.getElementsByClassName('namePay')
    }
}

function erasePers() {
    createButtons()
    const nbPers = document.getElementsByClassName("erasing")
    for (let i = 0; i < names.length; i++){
        if (names.length > 0){
        nbPers[i].addEventListener('click', event => {
        names.splice(i, 1) 
    })} else {
        document.getElementById("forName").innerHTML = ""
    }
    }
    addPers()
    forPay()
    price()
}

price()
forPay()
price()
erasePers()
lineUp()