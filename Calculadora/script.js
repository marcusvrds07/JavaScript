// Define o número máximo de dígitos permitidos no visor da calculadora
const MAX_DIGITS = 15;
// Variável para rastrear se a última ação foi a tecla '='
let lastWasEqual = false;

function insert(num) {
    // Obtém o elemento de resultado do DOM e seu conteúdo atual
    const resultadoElem = document.getElementById('resultado');
    let resultado = resultadoElem.innerHTML;
    // Define os operadores permitidos
    const operadores = ['+', '-', '*', '/'];

    if (num === '.') {
        // Adiciona um ponto decimal apenas se não houver outro ponto no número atual
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop();
        if (resultado === '' || operadores.includes(resultado.slice(-1))) {
            // Se o visor estiver vazio ou o último caractere for um operador, adiciona "0."
            resultadoElem.innerHTML = resultado + '0.';
        } else if (!lastNumber.includes('.')) {
            // Adiciona um ponto decimal ao número atual, se não houver um ponto decimal nele
            resultadoElem.innerHTML = resultado + num;
        }
    } else if (num === '%') {
        // Adiciona o operador de porcentagem se o último caractere não for um operador ou '%' e o visor não estiver vazio
        if (resultado !== '' && !operadores.includes(resultado.slice(-1)) && resultado.slice(-1) !== '%') {
            resultadoElem.innerHTML = resultado + num;
        }
    } else if (operadores.includes(num)) {
        // Adiciona um operador se o visor não estiver vazio e o último caractere não for um operador
        if (resultado !== '' && !operadores.includes(resultado.slice(-1))) {
            resultadoElem.innerHTML = resultado + num;
            // Define lastWasEqual como false, já que um novo operador foi adicionado
            lastWasEqual = false;
        }
    } else {
        // Gerencia a inserção de números (incluindo zero)
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop();

        if (resultado === '' && num === '0') {
            // Se o visor estiver vazio e o número digitado for '0', apenas adiciona '0'
            resultadoElem.innerHTML = '0';
        } else if (resultado === '0' && num !== '0') {
            // Se o visor contiver apenas '0' e um número diferente de zero for digitado, substitui o zero
            resultadoElem.innerHTML = num;
        } else if (lastNumber === '0' && num === '0') {
            // Impede a adição de múltiplos zeros seguidos se o número atual for apenas '0'
            return;
        } else if (lastNumber === '0' && !isNaN(num)) {
            // Se o número atual for apenas '0' e um número diferente for digitado, substitui o zero
            resultadoElem.innerHTML = resultado.slice(0, -1) + num;
        } else {
            // Adiciona o número ao visor normalmente
            let novoResultado = resultado + num;
            // Remove operadores para contar apenas os dígitos
            const digitos = novoResultado.replace(/[+\-*/%]/g, '');

            if (digitos.length <= MAX_DIGITS) {
                if (lastWasEqual) {
                    // Se o último cálculo foi finalizado com '=', limpa o visor e adiciona o novo número
                    document.getElementById('resultado').innerHTML = num;
                    lastWasEqual = false;
                } else {
                    // Caso contrário, apenas adiciona o número ao resultado atual
                    document.getElementById('resultado').innerHTML = novoResultado;
                }
            }
        }
    }
}

function clean() {
    // Limpa o visor e redefine a variável lastWasEqual
    document.getElementById('resultado').innerHTML = "";
    lastWasEqual = false;
}

function calcular() {
    // Obtém o conteúdo atual do visor
    let resultado = document.getElementById('resultado').innerHTML;

    // Verifica se o visor contém "Error". Se sim, interrompe a função
    if (resultado === "Error") {
        return;
    }

    if (resultado) {
        try {
            // Remove espaços e zeros à esquerda
            resultado = resultado.trim().replace(/^0+/, '');

            // Substitui a porcentagem no formato 'numero%numero' por '(numero/100) * numero'
            resultado = resultado.replace(/(\d+)%(\d+)/g, function(match, p1, p2) {
                return '(' + p1 + '/100) * ' + p2;
            });

            // Substitui a porcentagem no final da expressão, aplicando a divisão por 100
            resultado = resultado.replace(/(\d+)%$/, function(match, p1) {
                return p1 + '/100';
            });

            // Remove operadores no final da expressão para evitar erros de sintaxe
            resultado = resultado.replace(/([+\-*/])$/, '');

            // Verifica se a expressão ainda está inválida após as substituições
            if (resultado === '' || /[+\-*/]$/.test(resultado)) {
                document.getElementById('resultado').innerHTML = "Error";
            } else {
                // Calcula o resultado da expressão
                document.getElementById('resultado').innerHTML = eval(resultado);
                lastWasEqual = true;
            }
        } catch (e) {
            // Em caso de erro, exibe "Error" no visor
            document.getElementById('resultado').innerHTML = "Error";
            lastWasEqual = true;
        }
    } else {
        // Se o visor estiver vazio, exibe "Error"
        document.getElementById('resultado').innerHTML = "Error";
        lastWasEqual = true;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Mapeia as teclas do teclado para os botões da calculadora
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
            // Chama a função de calcular ao pressionar Enter
            calcular();
        } else if (key === 'Escape') {
            // Chama a função de limpar ao pressionar Escape
            clean();
        } else if (key === 'Backspace') {
            // Remove o último caractere ao pressionar Backspace
            const resultadoElem = document.getElementById('resultado');
            let resultado = resultadoElem.innerHTML;
            resultadoElem.innerHTML = resultado.slice(0, -1);
        } else {
            // Insere o valor correspondente à tecla pressionada
            insert(keyMappings[key]);
        }
    }
});
