// const ul = document.querySelectorAll('ul li');
// for(let i = 0; i < ul.length; i++) {
//     ul[i].addEventListener("click", function() {
//         if(ul[i].innerText == "Brasil") {
//             ul[i].innerText = "Maricá";
//             ul[i].style.fontSize = "50px";
//         }
//         else if(ul[i].innerText == "Chile") {
//             const chile = ul[i].parentNode;

//             if(chile.style.backgroundColor == "blue") {
//                 chile.style.backgroundColor = "white";
//                 ul[i].style.fontSize = "20px";
//             }
//             else {
//                 chile.style.backgroundColor = "blue";
//                 ul[i].style.fontSize = "50px";
//             }
//         }
//         else {
//             ul[i].title = "Vasco da Gama";
//             ul[i].style.fontSize = "50px";
//         }
//     })
// }

// Exercicio 2

// document.querySelector(".div1").addEventListener("click", function() {
//     document.querySelector("img").setAttribute("src", "../../Aula 23-09/Eventos/Brasil.png");
//     document.querySelector("h2").innerText = "Novo Titulo";
// });

// document.querySelector(".div2").addEventListener("click", function() {
//     this.style.backgroundColor = "green";
//     this.style.border = "2px solid purple";
//     this.style.fontStyle = "italic";
// });

//Exercicio 3

const ol = document.querySelectorAll("ol li");

for(let i = 0; i < ol.length; i++) {
    ol[i].addEventListener("click", function() {
        if(this.style.backgroundColor == "blue" ) {
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }
        else {
            this.style.backgroundColor = "blue";
            this.style.color = "black";
        }
    });
}

// FOR EACH

// ol.forEach(function(item) {
//     item.addEventListener("click", function() {
//         if(this.style.backgroundColor == "blue" ) {
//             this.style.backgroundColor = "black";
//             this.style.color = "white";
//         }
//         else {
//             this.style.backgroundColor = "blue";
//             this.style.color = "black";
//         }
//     })
// });