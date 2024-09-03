// Exercicio 1

// function vetor() {
//     var idade = prompt("Digite sua idade: ");

//     if(idade >= 18 && idade <= 70) {
//         document.write("Você é obrigado a votar")
//     }
//     else {
//         document.write("Você não é obrigado a votar")
    
//     }
// }

//Exercicio 2

// function vetor() {
//     var valid = 0;
//     while (valid == 0) {
//     var num1 = parseFloat(prompt("Digite o primeiro número"));
//     var num2 = parseFloat(prompt("Digite o segundo número"));
//     var operador = prompt("Escolha entre: divisão, multiplicação, soma e subtração");

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

// function vetor() {
//     var salario = parseFloat(prompt("Digite o seu salário: "));


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

// function vetor() {
//     var salario = parseFloat(prompt("Digite o seu salário: "));
//     var salarioInicial = salario;
//     var reajuste;
//     var percentual;

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

// function vetor() {
//     var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//     var data = prompt("Digite um mês no seguinte formato: 00/00/0000")

//     data = data.split("/")
//     data[1] = Number(data[1]);

//     var dia = Number(data[0])
//     var mes = meses[data[1] - 1]
//     var ano = Number(data[2]);

//     var dataFinal = dia + " de " + mes + " de " + ano

//     alert(dataFinal);

// }

//Exercicio 6