const MAX_DIGITS = 15;
let lastWasEqual = false;

function insert(num) {
    const resultadoElem = document.getElementById('resultado');
    let resultado = resultadoElem.innerHTML;
    const operadores = ['+', '-', '*', '/'];

    if (num === '.') {
        // Adiciona um ponto decimal apenas se não houver outro ponto no número atual
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop();
        if (resultado === '' || operadores.includes(resultado.slice(-1))) {
            resultadoElem.innerHTML = resultado + '0.';
        } else if (!lastNumber.includes('.')) {
            resultadoElem.innerHTML = resultado + num;
        }
    } else if (num === '%') {
        // Adiciona o operador de porcentagem
        if (resultado !== '' && !operadores.includes(resultado.slice(-1)) && resultado.slice(-1) !== '%') {
            resultadoElem.innerHTML = resultado + num;
        }
    } else if (operadores.includes(num)) {
        // Adiciona um operador se o resultado não estiver vazio e não terminar com um operador
        if (resultado !== '' && !operadores.includes(resultado.slice(-1))) {
            resultadoElem.innerHTML = resultado + num;
            lastWasEqual = false;
        }
    } else {
        // Gerencia a inserção de zeros e outros números
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop();

        if (resultado === '' && num === '0') {
            // Permite adicionar apenas um zero inicial
            resultadoElem.innerHTML = '0';
        } else if (resultado === '0' && num !== '0') {
            // Substitui o zero inicial se um número for digitado
            resultadoElem.innerHTML = num;
        } else if (lastNumber === '0' && num === '0') {
            // Impede a adição de múltiplos zeros seguidos se o número atual é apenas zero
            return;
        } else if (lastNumber === '0' && !isNaN(num)) {
            // Substitui o zero por um número se o número atual for apenas zero
            resultadoElem.innerHTML = resultado.slice(0, -1) + num;
        } else {
            // Adiciona o número normalmente
            let novoResultado = resultado + num;
            const digitos = novoResultado.replace(/[+\-*/%]/g, ''); // Remove operadores para contar apenas dígitos
            
            if (digitos.length <= MAX_DIGITS) {
                if (lastWasEqual) {
                    // Se o visor mostra o resultado final, limpa e adiciona o número
                    document.getElementById('resultado').innerHTML = num;
                    lastWasEqual = false;
                } else {
                    document.getElementById('resultado').innerHTML = novoResultado;
                }
            }
        }
    }
}



function clean() {
    document.getElementById('resultado').innerHTML = "";
    lastWasEqual = false;
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;

    // Verifica se o resultado atual é "Error"
    if (resultado === "Error") {
        return; // Se for "Error", não faz nada ao pressionar Enter novamente
    }

    if (resultado) {
        try {
            // Remove espaços e zeros à esquerda antes de processar
            resultado = resultado.trim().replace(/^0+/, '');

            // Substitui '%numero' por '/100 * numero'
            resultado = resultado.replace(/(\d+)%(\d+)/g, function(match, p1, p2) {
                return '(' + p1 + '/100) * ' + p2;
            });

            // Substitui '%', se estiver sozinho no final da expressão, por '/100'
            resultado = resultado.replace(/(\d+)%$/, function(match, p1) {
                return p1 + '/100';
            });

            // Remove operadores inválidos no final da expressão
            resultado = resultado.replace(/([+\-*/])$/, '');

            // Verifica se a expressão está vazia ou termina com um operador
            if (resultado === '' || /[+\-*/]$/.test(resultado)) {
                document.getElementById('resultado').innerHTML = "Error";
            } else {
                // Calcula o resultado
                document.getElementById('resultado').innerHTML = eval(resultado);
                lastWasEqual = true;
            }
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Error";
            lastWasEqual = true;
        }
    } else {
        document.getElementById('resultado').innerHTML = "Error";
        lastWasEqual = true;
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keyMappings = {
        'Enter': '=',
        'Escape': 'C',
        'Backspace': 'backspace',
        '.': '.',
        '%': '%',
        '/': '/',
        '*': '*',
        '-': '-',
        '+': '+',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
    };

    if (key in keyMappings) {
        if (key === 'Enter') {
            calcular();
        } else if (key === 'Escape') {
            clean();
        } else if (key === 'Backspace') {
            const resultadoElem = document.getElementById('resultado');
            let resultado = resultadoElem.innerHTML;
            resultadoElem.innerHTML = resultado.slice(0, -1);
        } else {
            insert(keyMappings[key]);
        }
    }
});
