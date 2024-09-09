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


function Carro(modelo, ano, velocidade) {
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = velocidade;
    this.acelerar = function () {
        this.velocidade += 10;
    };
    this.frear = function () {
        if(this.velocidade >= 10) {
            this.velocidade -= 10;
        }
    };
}

const modelo = "Fusca"
const ano = 2000;
const vAtual = 150;

const carro = new Carro(modelo, ano, vAtual);
console.log(carro);

carro.acelerar();
carro.acelerar();
carro.frear();
