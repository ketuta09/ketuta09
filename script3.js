let input = document.querySelector("#idinput")
let btn = document.querySelector("#btn")
let result = document.querySelector("#result")

btn.addEventListener("click", () =>{
    if(input.value != ""){
        let li = document.createElement("li")
        li.textContent = input.value
        result.appendChild(li)
        input.value = null;
    } else{
        alert("error")
    }
})