let cores = [];

function vetor(){
for (let i = 0; i < 4; i++) {
    let cor = prompt(`Digite a ${i + 1}º cor? `);
    cores.push(cor);
}

alert("Todas as cores: " + cores);

cores.pop();

alert("sem a ultima cor: " + cores);

for (let i = 4; i < 6; i++) {
    cores.push(prompt(`Digite a ${i + 1}º cor: `));
}

alert("Primeira cor: " + cores[0]);

alert("Ultima cor: " + cores[cores.length - 1]);

let teste = [];

teste = cores

alert("Antes de remover a 2º e  3º cor: " + teste);

cores.splice(1, 2);

alert("2º e  3º cor removida: " + cores);

for (let i = 0; i < cores.length; i++) {
    if (cores[i] == "1") {
        cores.splice(i, 1);
    }
}

for (let i = 0; i < cores.length; i++) {
    alert(`${i + 1}º cor: ` + cores[i]);
}

}