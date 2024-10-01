// let titulo = document.querySelector("h1");
// let paragrafo = document.querySelector("p");
// let subtitulo = document.querySelector("h2");

// titulo.classList.add("corVerde", "italic");

// paragrafo.classList.toggle("fonteGrande");
// paragrafo.classList.toggle("fonteGrande");


// if(subtitulo.classList.contains("corVerde")) {
//         subtitulo.classList.add("italic");
// }
// else {
//     subtitulo.classList.add("corVerde");
// }

// titulo.classList.replace("italic", "fonteGrande");

// titulo.classList.remove("fonteGrande");



// let pai = document.querySelector(".pai");
// let contador = 0;

// pai.addEventListener('mousemove', function() {
//     console.log(contador++);
// });

// pai.addEventListener('mouseover', function() {
//     console.log(contador++);
// });

function verificar(input) {
    alert(input.value);
}

function virarVermelho(input) {
    input.style.border = "2px solid red"
}

function verificarTexto(input) {
    if(event.key == "Enter") {
        alert("Formulario enviado com sucesso");
    }
}