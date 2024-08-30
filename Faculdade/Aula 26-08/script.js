// let pais =  {
//     nome: "Brasil",
//     habitantes: 25,
//     descobrimento: 1500,
//     presidente: {
//         nome: "Luiz Inacio Lula da Silva",
//         partido: "PT"
//     },
//     estados: [
//         {
//             nome: "Rio de Janeiro",
//             sigla: "RJ"
//         },
//         {
//             nome: "São Paulo",
//             sigla: "SP"
//         }
//     ]
// }




// pais.presidente.nome = "Tirica"
// pais.presidente.partido = "PSDT"

// console.log("Nome: " + pais.presidente["nome"] + "\nPartido: " + pais.presidente["partido"]);

// console.log(pais.estados[0].nome + ", " + pais.estados[0].sigla);

// pais.estados.forEach(function(estado) {
//     console.log(estado.nome.toLowerCase() + ", " + estado.sigla.toLowerCase());
// });

//metodos para preencher o objeto.

// let nome = prompt("Digite a marca do carro: ");

// let carro = {
//     marca: nome,
//     ano: parseInt(prompt("Digite o ano: ")),
//     modelo: "",
// }

// carro.modelo = prompt("Digite o modelo: ");

let marca = prompt("Digite a marca: ");
let ano = parseInt(prompt("Digite o ano: "));
let modelo = prompt("Digite o modelo: ");

let carro = {
    marca: marca,
    ano: ano,
    modelo: modelo,
}

let marca2 = prompt("Digite a marca: ");
let ano2 = parseInt(prompt("Digite o ano: "));
let modelo2 = prompt("Digite o modelo: ");

let carro2 = {
    marca: marca2,
    ano: ano2,
    modelo: modelo2,
}

console.log(carro);
console.log(carro2)

if(carro.ano > carro2.ano) {
    console.log(carro.modelo + " é o mais novo");
}
else {
    console.log(`${carro2.modelo} é o mais novo`);
}