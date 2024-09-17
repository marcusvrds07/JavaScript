// Exercicio 1

// let container = document.querySelectorAll(".container p");

// container.forEach(function(p, i){
//     p.innerText = "Texto Alterado " + (i + 1);
// });


//Exercicio 2

// let divs = document.querySelectorAll(".item");

// divs.forEach(function(div){
//     div.innerText += " - Novo Item"
// });

//Exercicio 3

// let table = document.querySelectorAll("#myTable tr td");
// table[table.length - 1].innerHTML = "Atualizado"

// console.log(table);

// Exercicio 4

let li = document.querySelectorAll("#lista li");

li.forEach(function(pais) {
    if(pais.innerText === "Brasil"){
        pais.innerHTML = "Maricá";
    }
});

