var nomes = new Array(4);
var idades = new Array(4);

function vetor(){
for (let i = 0; i < 4; i++) {
  nomes[i] = prompt("Digite seu nome: ");
  idades[i] = prompt('Digite sua idade: ');
}

document.write("<br><br>A: <br><br>")

nomes.forEach(function(nome, i) {
  document.write(nome + "-" + i + "<br>");
});

document.write("<br>B: <br><br>")

nomes.forEach(function(nome) {
  idades.forEach(function(idade) {
    document.write(nome + "-" + idade + "<br>")
  });
});

document.write("<br>C: <br><br>")

nomes.forEach(function(nome, i) {
  if (nome == "Geraldo") {
    nomes.splice(i, 1);
  }
});
document.write(nomes + "<br>");

document.write("<br>D: <br><br>")

idades.forEach(function(idade) {
  if (idade < 13) {
    nomes.push("Enzo");
  }
});
document.write(nomes)
  
}