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

//Exercicio 11

// function start() {
//     function invertido(nome) {
//         let nomeInvertido = "";
        
//         for(let i = (nome.length - 1); i >= 0; i--) {
//             nomeInvertido += nome[i];
//         }
//         return nomeInvertido.toUpperCase();
//     }
//     let nome = prompt("Digite o seu nome: ");
//     nome = invertido(nome);
//     console.log(nome)

// }

//Exercicio 12

// function start() {
//     function mes(mes) {
//         const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//         return meses[mes];
//     }
//     function diaDaSemana(diaSemana) {
//         const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
//         return diasDaSemana[diaSemana];
//     }

//     const dataAtual = new Date();

//     let dia = dataAtual.getDate();
//     let mesAtual = dataAtual.getMonth();
//     let ano = dataAtual.getFullYear();
//     let diaSemana = dataAtual.getDay();


//     mesAtual = mes(mesAtual);
//     diaSemana = diaDaSemana(diaSemana);

//     const dataFormatada = `Dia da semana: ${diaSemana}\nDia do mês: ${dia}\nmês: ${mesAtual}\nAno: ${ano}`
//     const dataEscrita = `\n\n${dia} de ${mesAtual} de ${ano} às ${dataAtual.getHours()}:${dataAtual.getMinutes()}`

//     const dataFinal = dataFormatada + dataEscrita


//     console.log(dataFinal);
// }

//Exercicio 13

// const n1 = 10,
//       n2 = 20,
//       n3 = 30;

// function somar(n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// function media(n1, n2, n3) {
//     const total = somar(n1, n2, n3);
//     return total / 3;
// }

// console.log("Soma: "+ somar(n1,n2,n3) + " Media: "+ media(n1,n2,n3))

//Exercicio 14

// function mediaN(n) {
//     let soma = 0;
//     for(let i = 0; i < n.length; i++) {
//         soma += n[i];
//     }

//     let media = soma / n.length
//     return media;
// }

// let numeros = new Array(3);

// for(let i = 0; i < 3; i++) {
//     numeros[i] = Number(prompt(`Digite o ${i + 1}º número: `));
// }

// numeros = mediaN(numeros);
// console.log(numeros)

//Exercicio 15

// function receber(numeros, numero) {
//     let novosNumeros = [];
//     numeros.forEach(function(n) {
//         if(n > numero) {
//             novosNumeros.push(n);
//         }
//     });
//     return novosNumeros;
// }

// let numeros = new Array(4);

// for(let i = 0; i < numeros.length; i++) {
//     numeros[i] = Number(prompt(`Digite o ${i + 1}º número: `));
// }

// let numero = Number(prompt("Digite o 5º número"));

// let resposta = receber(numeros, numero);
// console.log(resposta);

//Exercicio 16

// function juntar(nomes, nomes2) {
//     let vetor = [];

//     for(let i = 0; i < 3; i++) {
//         vetor.push(nomes[i]);

//     }
//     for(let i = 0; i < 3; i++) {
//         vetor.push(nomes2[i]);   
//     }
//     return vetor;
// }

// let nomes = new Array(3);
// let nomes2 = new Array(3);

// for(let i = 0; i < nomes.length; i++) {
//     nomes[i] = prompt(`Digite o ${i + 1}º nome:`);
// }
// for(let i = 0; i < nomes2.length; i++) {
//     nomes2[i] = prompt(`Digite o ${i + 4}º nome:`);
// }

// let resultado = juntar(nomes, nomes2);

// console.log(resultado)

//Exercicio 17

// let fraseOriginal = "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente."

// let inicio = fraseOriginal.indexOf("motivação");
// let final = fraseOriginal.indexOf(". ");

// let fraseRetirada = fraseOriginal.substring(inicio, final).trim();

// console.log(fraseRetirada + "...")


//Exercicio 18

    // function conversor(valor) {
    //     let dinheiro = valor.replace(".", ",");
    //     return `R$${dinheiro}`

    // }

    // let valorOriginal = parseFloat(prompt("Digite um preço.")).toFixed(2);
    // valorOriginal = conversor(valorOriginal);
    // console.log(valorOriginal);

//Exercicio 19

// const min = 1;
// const max = 3;

// function escolhaAleatoria(min, max) {
//     let escolhaMaquina = Math.floor(Math.random() * (max - min + 1)) + min;
//     switch(escolhaMaquina) {
//         case 1:
//             return "pedra";
//         case 2:
//             return "papel";
//         case 3:
//             return "tesoura";
//     }
// }
// function jogar(escolha) {
//     let escolhaJogador = escolha.toUpperCase();
//     let escolhaDaMaquina = escolhaAleatoria(min, max).toUpperCase();
    
//     if(escolhaJogador == escolhaDaMaquina) {
//         return `EMPATE! Você escolheu ${escolhaJogador} e a maquina escolheu ${escolhaDaMaquina}`
//     }
//     else if((escolhaJogador === "Pedra" && escolhaDaMaquina === "Tesoura") ||
//     (escolhaJogador === "Papel" && escolhaDaMaquina === "Pedra") ||
//     (escolhaJogador === "Tesoura" && escolhaDaMaquina === "Papel")) {
//         return `GANHOU! Você escolheu ${escolhaJogador} e a maquina escolheu ${escolhaDaMaquina}`
//     }
//     else {
//         return `PERDEU! Você escolheu ${escolhaJogador} e a maquina escolheu ${escolhaDaMaquina}`
//     }
// }

// let escolha = prompt("Escolha entre (Pedra, Papel ou Tesouro):");

// const resultado = jogar(escolha);
// console.log(resultado);

// Exercicio 20

// function  tipo(tamLados) {
//     if((tamLados[0] === tamLados[1]) && (tamLados[0] === tamLados[2])) {
//         return "Equilátero";
//     }
//     else if ((tamLados[0] !== tamLados[1]) && (tamLados[0] !== tamLados[2]) && (tamLados[1] !== tamLados[2])) {
//         return "Escaleno";
//     }
//     else {
//         return "Isósceles";
//     }
// }

// const lados = [];

//     for(let i = 0; i < 3; i++) {
//         const lado = Number(prompt(`Digite o valor do ${i + 1}º do triângulo: `));
//         lados.push(lado);
//     }

//     console.log("Lados do triângulo:", lados);
//     console.log("O triângulo é:", tipo(lados));

    //Exercicio 21

    // function contar(pessoas) {
    //     let qtdMasculino = 0;
    //     let qtdAlturas = 0;
    //     let maiorAltura;
    //     let sexoSalvo;

    //     for(let i = 0; i < pessoas.sexo.length; i++) {

    //         if(pessoas.sexo[i].toLowerCase() === "masculino") {
    //             qtdMasculino++;
    //         }
    //         if(pessoas.altura[i] > 1.70) {
    //             qtdAlturas++;
    //         }
    //         if(pessoas.altura[i] > maiorAltura || i == 0) {
    //             maiorAltura = pessoas.altura[i];
    //             sexoSalvo = pessoas.sexo[i];
    //         }
    //     }
    //     console.log(`O número de homens é ${qtdMasculino} e a quantidade de pessoas que tem mais de 1.70 é ${qtdAlturas}`);
    //     console.log(`A maior altura é ${maiorAltura}m e a pessoa que tem a maior altura é do sexo ${sexoSalvo}`);

    // }

    // let pessoas = {
    //     sexo: [],
    //     altura: []
    // }

    // for(let i = 0; i < 5; i++) {

    //     // caso queira criar um novo objeto com array dentro do loop.
    //     // if (!pessoas.nome) {
    //     //     pessoas.nome = [];
    //     // }

    //     // pessoas.nome[i] = prompt("Digite seu nome: ");
    //     pessoas.sexo[i] = prompt("Digite seu sexo");
    //     pessoas.altura[i] = parseFloat(prompt("Digite sua altura"));
    // }

    // contar(pessoas);

    // console.log(pessoas);

// Exercicio 22

// function Pais(paisNome, capital, continente) {
//     this.nome_pais = paisNome;
//     this.capital = capital;
//     this.continente = continente;
// }

// let paisNome = prompt("Digite o nome do seu país");
// let capital = prompt("Digite a capital do seu país");
// let continente = prompt("Digite o continente do seu país");

// let meuPais = new Pais(paisNome, capital, continente);

// console.log(meuPais);


//Exercicio 23

// let pessoa = {};

// let nome = prompt("Digite seu nome");
// let idade = parseInt(prompt("Digite sua idade"));
// let sexo = prompt("Digite seu sexo");
// let email = prompt("Digite seu email");

// pessoa.nome = nome;
// pessoa.idade = idade;
// pessoa.sexo = sexo;
// pessoa.email = email;

// console.log(pessoa);

//Exercicio 24

// let fruta = {
//     cor: "Amarelo",
//     tamanho: "médio",
//     pais: "Brasil"
// }

// let cor = prompt("Digite uma cor para fruta");
// let tamanho = prompt("Digite seu sexo");
// let pais = prompt("Digite o país da fruta");

// fruta.cor = cor;
// fruta.tamanho = tamanho;
// fruta.pais = pais;

// console.log(fruta);

// Exercicio 25

// let qtdalunos =parseInt(prompt("Digite a quantidade de alunos que tem na sua escola"));
// let diretor = prompt("Digite o nome do diretor");
// let fundacao = parseInt(prompt("Digite o ano de fundação"));
// let rua = prompt("Digite o nome da rua");
// let bairro = prompt("Digite o nome do bairro");
// let cidade = prompt("Digite o nome da cidade"); 

// let escola = {
//     numAlunos: qtdalunos,
//     nomeDiretor: diretor,
//     anoFundação: fundacao,
//     endereco: {
//         rua: rua,
//         bairro: bairro,
//         cidade: cidade
//     }
// }

// console.log(escola)

//Exercicio 26

// let carro = {
//     modelo: "",
//     estado: "",
//     precoBase: "",
//     ano: "",
//     calcularPrecoEstimado: function () {
//         let anoAtual = new Date().getFullYear();
//         let anos = anoAtual - this.ano;
//         let valor = this.precoBase - (1000 * anos);
//         return valor < 0 ? 0 : valor
//                //condição ? falso : verdadiro
//     }
// }

// carro.modelo = prompt("Digite o modelo do carro:");
// carro.estado = prompt("Digite o estado do carro:");
// carro.precoBase = parseFloat(prompt("Digite o preço base do carro:"));
// carro.ano = parseInt(prompt("Digite o ano do carro:"));

// const valorEstimado = carro.calcularPrecoEstimado();

// console.log("Modelo do Carro:", carro.modelo);
// console.log("Estado do Carro:", carro.estado);
// console.log("Preço Base do Carro:", carro.precoBase);
// console.log("Ano do Carro:", carro.ano);
// console.log("Valor Estimado do Carro:", valorEstimado);