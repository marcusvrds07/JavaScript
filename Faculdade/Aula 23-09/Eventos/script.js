// bandeira = document.querySelector("img");

function trocar(elemento) {
    // if(bandeira.getAttribute("src") == "Flag_of_Brazil.svg.png") {
    //     bandeira.setAttribute("src", "Flag_of_Germany.svg (1).png");
    //     bandeira.title = "Alemanha";
    //     bandeira.alt = "Alemanha"
    // }
    // else {
    //     bandeira.setAttribute("src", "Flag_of_Brazil.svg.png");
    //     bandeira.title ="Brasil";
    //     bandeira.alt = "Brasil"
    // }
    
    //utilizando argumento da função

    // if(elemento.getAttribute("src") == "Flag_of_Brazil.svg.png") {
    //     elemento.setAttribute("src", "Flag_of_Germany.svg (1).png");
    //     elemento.title = "Alemanha";
    //     elemento.alt = "Alemanha"
    // }
    // else {
    //     elemento.setAttribute("src", "Flag_of_Brazil.svg.png");
    //     elemento.title ="Brasil";
    //     elemento.alt = "Brasil"
    // }



    // let pai = elemento.parentNode;

    // pai.style.border = "2px solid black"

    document.querySelector("img").onclick = function () {
    let bandeira = this;
    let pai = bandeira.parentNode;
     pai.style.border = "2px solid black";
    if (bandeira.getAttribute("src") == "Brasil.png") {
        bandeira.setAttribute("src", "Alemanha.png");
        bandeira.title = "Alemanha";
        bandeira.alt = "Alemanha";
    } else {
        bandeira.setAttribute("src", "Brasil.png");
        bandeira.title = "Brasil";
        bandeira.alt = "Brasil";
     }
    };

    // document.querySelector("img").addEventListener("click", function () {
    //   alert("oi");
    // });
}