let hide = document.getElementsByClassName("hide");
let show = document.getElementsByClassName("show");
let empty = document.getElementsByClassName("empty");

hide.addEventListener("click", () => {
    let felx = document.querySelector(".flex");
    felx.classList.toggle("empty");
    into.style.display = "none";

    if (hide.style.backgroundColor == "yellow") {
        hide.style.backgroundColor = "green";
        show.style.backgroundColor = "yellow";
    } else {
        hide.style.backgroundColor = "yellow";
        show.style.backgroundColor = "green";
    };

});

show.addEventListener("click", () => {
    let felx = document.querySelector(".flex");
    felx.classList.toggle("empty");
    info.style.display = "none";

    if (show.style.backgroundColor == "yellow") {
        show.style.backgroundColor = "green";
        hide.style.backgroundColor = "yellow";
    } else {
        show.style.backgroundColor = "yellow";
        hide.style.backgroundColor = "green";
    }
    
});
