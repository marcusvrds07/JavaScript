// Exercicio 1

// function start() {
//     let idade = prompt("Digite sua idade: ");

//     if(idade >= 18 && idade <= 70) {
//         document.write("Você é obrigado a votar")
//     }
//     else {
//         document.write("Você não é obrigado a votar")
    
//     }
// }

//Exercicio 2

// function start() {
//     let valid = 0;
//     while (valid == 0) {
//     let num1 = parseFloat(prompt("Digite o primeiro número"));
//     let num2 = parseFloat(prompt("Digite o segundo número"));
//     let operador = prompt("Escolha entre: divisão, multiplicação, soma e subtração");

//     switch (operador) {
//         case "soma":
//             alert(`O resultado de ${num1} + ${num2} = ${num1 + num2}`);
//             valid = 1;
//             break;
//         case "subtração":
//             alert(`O resultado de ${num1} - ${num2} = ${num1 - num2}`);
//             valid = 1;
//             break;
//         case "divisão":
//             if(num2 != 0) {
//                 alert(`O resultado de ${num1} / ${num2} = ${num1 / num2}`);
//                 valid = 1;
//             }
//             else {
//                 alert("Divisão por zero não é permitido!")
//                 valid = 0;
//             }
//             break;
//         case "multiplicação":
//             alert(`O resultado de ${num1} x ${num2} = ${num1 * num2}`);
//             break;
//         default:
//             alert("O operador selecionado não existe!");
//             valid = 0;
//         }
//     }
// }

// Exercicio 3

// function start() {
//     let salario = parseFloat(prompt("Digite o seu salário: "));


//     if(salario <= 280) {
//         salario = salario * 1.2;
//     }
//     else if(salario >= 280 && salario < 700) {
//         salario = salario * 1.15;
//     }
//     else if (salario >= 700 && salario <= 1500) {
//         salario = salario * 1.1;
//     }
//     else {
//         salario = salario * 1.05;

//     } 
//     alert(salario)
// }

// Exercicio 4

// function start() {
//     let salario = parseFloat(prompt("Digite o seu salário: "));
//     let salarioInicial = salario;
//     let reajuste;
//     let percentual;

//     if(salario <= 280) {
//         salario = salario * 1.2;
//         percentual = "20%"
//     }
//     else if(salario >= 280 && salario < 700) {
//         salario = salario * 1.15;
//         percentual = "15%"
//     }
//     else if (salario >= 700 && salario <= 1500) {
//         salario = salario * 1.1;
//         percentual = "10%"
//     }
//     else {
//         salario = salario * 1.05;
//         percentual = "5%"
//     }

//     reajuste = salario - parseFloat(salarioInicial);

//     alert(`O seu salário inicial era ${salarioInicial.toFixed(2)} você recebeu ${percentual} de aumento que é igual a ${reajuste.toFixed(2)} do seu salario e ficou com um total de ${salario.toFixed(2)}`)
// }

//Exercicio 5

// function start() {
//     let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//     let data = prompt("Digite um mês no seguinte formato: 00/00/0000")

//     data = data.split("/")
//     data[1] = Number(data[1]);

//     let dia = Number(data[0])
//     let mes = meses[data[1] - 1]
//     let ano = Number(data[2]);

//     let dataFinal = dia + " de " + mes + " de " + ano

//     alert(dataFinal);
// }

//Exercicio 6

// function start() {
//         let idade = prompt("Digite quantos anos, meses e dia de vida você tem: (anos meses dias)");
//         idade = dias(idade);
//         console.log(idade);

//     function dias(idadeCompleta) {
//         let idades = idadeCompleta.split(" ");

//         let ano = Number(idades[0] * 365);
//         let mes = Number(idades[1] * 30);
//         let dias = Number(idades[2]);
        
//         return ano + mes + dias;
//         }
//     }

//Exercicio 7 
// function start() {
// let frase = prompt("Digite sua frase: ");
// frase = fraseTrocada(frase);
// console.log(frase);

// function fraseTrocada(fraseTrocada) {
//     fraseTrocada = fraseTrocada.toLowerCase();
//     let troca = fraseTrocada.replaceAll("a", "U").replaceAll("o", "G");

//     let palavra = "";

//     for(let i = 0; i < troca.length; i++) {
//         if(troca[i] == "u") {
//             palavra += "U"
//         }
//         else if (troca[i] == "g") {
//             palavra += "G"
//         }
//         else {
//             palavra += troca[i];
//         }
//     }

//     return palavra;
//     }
// }


//Exercicio 8


// function start() {
// let limite = prompt("Digite um limite:");
// tabuada(limite);

// function tabuada(limite) {
//     for(let i = 1; (i * 7) <= limite; i++) {
//         console.log(i + " x 7 = " + i * 7);
//         }
//     }
// }

//Exercicio 9

// function start() {
//     let nomes = new Array(5);

//     for(let i = 0; i < nomes.length; i++) {
//         nomes[i] = prompt("Digite seu nome");
//     }

//     let nome = maiorString(nomes);

//     function maiorString(string) {
//         let maior = "";

//         for(let i = 0; i < string.length; i++) {
//             if(string[i].length > maior.length || i == 0) {
//                maior = string[i];
//             }
//         }
//         return maior;
//     }
//     console.log(nome);
// }

//Exercicio 10

// let texto = prompt("Digite sua frase");
// texto = qtdPalavras(texto);
// console.log(`Essa frase tem ${texto} palavras.`);

// function qtdPalavras(frase) {
//     frase = frase.split(" ");
//     return frase.length;
// }