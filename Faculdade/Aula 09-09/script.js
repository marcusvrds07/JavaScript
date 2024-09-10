// function Tecnico(nome, idade, sexo) {
//     this.treinador = nome,
//     this.idade = idade;
//     this.sexo = sexo
// }

// const nome = prompt("Digite seu nome: ");
// const idade = Number(prompt("Digite sua idade: "));
// const sexo = prompt("Digite seu sexo: ");

// const tec = new Tecnico(nome, idade, sexo);
// console.log(tec);

// //2

// function Time(nome, anoFundacao, cores) {
//     this.nome = nome;
//     this.anoFundacao = Number(anoFundacao);
//     this.cores = cores;
// }

// var cores = [];
// const nomeTime = prompt("Digite o nome do Time: ");
// const ano = Number(prompt("Digite o ano de fundação do time: "));

// var cor;
// for(let i = 0; cor !== "acabou"; i++) {
//     cor = prompt("Digite uma cor: ");
//     if(cor !== "acabou") {
//         cores.push(cor);
//     }
// }

// const resposta = new Time(nomeTime, ano, cores);
// resposta.tecnico = tec;
// console.log(resposta)


// function Carro(modelo, ano, velocidade) {
//     this.modelo = modelo;
//     this.ano = ano;
//     this.velocidade = velocidade;
//     this.acelerar = function () {
//         this.velocidade += 10;
//     };
//     this.frear = function () {
//         if(this.velocidade >= 10) {
//             this.velocidade -= 10;
//         }
//     };
// }

// const modelo = "Fusca"
// const ano = 2000;
// const vAtual = 150;

// const carro = new Carro(modelo, ano, vAtual);
// console.log(carro);

// carro.acelerar();
// carro.acelerar();
// carro.frear();


//DATE

// var d1 = new Date()

// var dataAtual = d1.getHours() + "-" + d1.getMinutes() + "-" + d1.getSeconds();

// console.log(dataAtual);

var data = prompt("Digite uma data seguindo esse formato ano-mes-dia");
data = new Date(data).getTime();

if(data > new Date().getTime()) {
    console.log("A data informada é depois da data de hoje")
}
else {
    console.log("A data informada é antes da atual.")
}

console.log(data + " " + new Date().getTime());

//https://currentmillis.com/