const buttonForm = document.getElementById("buttonForm");

buttonForm.addEventListener('click',() => {
    let name = document.getElementById("name").value;
    let payment = document.getElementById("payment").value;

    let list = document.getElementById("list");
    let span = document.createElement("span");
    let p = document.createElement("p");
    let div = document.createElement("div");
    div.appendChild(span);
    div.appendChild(p);

    span.innerHTML = name;
    p.innerHTML = payment;

    list.appendChild(div);


    // let total = document.getElementById("total");
    // let calc = document.getElementsByClassName("calc").value;
    
    // let array = [calc]
    // console.log(array);
});