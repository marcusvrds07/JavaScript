// Define o número máximo de dígitos que o visor pode exibir
const MAX_DIGITS = 15; 
// Variável para verificar se a última ação foi uma operação de igualdade (=)
let lastWasEqual = false; 

// Função que é chamada quando um botão é pressionado para inserir números ou operadores
function insert(num) {
    // Obtém o elemento do visor (onde os números e operadores são exibidos)
    const resultadoElem = document.getElementById('resultado'); 
    // Obtém o texto atual exibido no visor
    let resultado = resultadoElem.innerHTML; 
    // Lista de operadores matemáticos suportados
    const operadores = ['+', '-', '*', '/']; 

    // Se o visor está mostrando "Error", a próxima tecla limpa o visor
    if (resultado === "Error") {
        // Se a tecla pressionada for um operador, limpa o visor sem adicionar o operador
        if (operadores.includes(num)) {
            clean(); 
            return; 
        } else {
            // Se for outro caractere, limpa o visor e reinicia a variável de resultado
            clean(); 
            resultado = ''; 
        }
    }

    // Tratamento especial para o ponto decimal
    if (num === '.') {
        // Obtém o último número inserido (separado por operadores)
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop(); 
        // Se o visor estiver vazio ou o último caractere for um operador, adiciona '0.' no visor
        if (resultado === '' || operadores.includes(resultado.slice(-1))) {
            resultadoElem.innerHTML = resultado + '0.'; 
        } else if (!lastNumber.includes('.')) {
            // Adiciona o ponto decimal se não houver outro ponto no último número
            resultadoElem.innerHTML = resultado + num; 
        }
    } 
    // Tratamento especial para o operador de porcentagem (%)
    else if (num === '%') {
        // Adiciona '%' se não houver outro operador ou '%' no final da expressão
        if (resultado !== '' && !operadores.includes(resultado.slice(-1)) && resultado.slice(-1) !== '%') {
            resultadoElem.innerHTML = resultado + num; 
        }
    } 
    // Tratamento para operadores matemáticos
    else if (operadores.includes(num)) {
        // Adiciona o operador se o visor não termina com outro operador
        if (resultado !== '' && !operadores.includes(resultado.slice(-1))) {
            resultadoElem.innerHTML = resultado + num; 
            lastWasEqual = false; 
        }
    } 
    // Tratamento para números
    else {
        // Obtém o último número inserido
        const lastNumber = resultado.split(/[\+\-\*\/%]/).pop(); 

        // Caso especial para a inserção inicial ou zeros
        if (resultado === '' && num === '0') {
            // Se o visor está vazio e o número é '0', exibe '0'
            resultadoElem.innerHTML = '0'; 
        } else if (resultado === '0' && num !== '0') {
            // Se o visor mostra '0' e o número não é '0', substitui '0' pelo novo número
            resultadoElem.innerHTML = num; 
        } else if (lastNumber === '0' && num === '0') {
            // Se o último número é '0' e o número a ser inserido também é '0', não faz nada
            return; 
        } else if (lastNumber === '0' && !isNaN(num)) {
            // Se o último número é '0' e o novo número não é '0', substitui o '0' inicial
            resultadoElem.innerHTML = resultado.slice(0, -1) + num; 
        } else {
            // Adiciona o novo número ao visor
            let novoResultado = resultado + num; 
            // Remove os operadores para contar apenas os dígitos
            const digitos = novoResultado.replace(/[+\-*/%]/g, ''); 

            // Verifica se o número de dígitos está dentro do limite permitido
            if (digitos.length <= MAX_DIGITS) {
                if (lastWasEqual) {
                    // Se a última ação foi uma igualdade, começa o visor com o novo número
                    document.getElementById('resultado').innerHTML = num; 
                    lastWasEqual = false; 
                } else {
                    // Atualiza o visor com o novo número ou resultado
                    document.getElementById('resultado').innerHTML = novoResultado; 
                }
            }
        }
    }
}

// Função para limpar o visor
function clean() {
    // Limpa o texto no visor
    document.getElementById('resultado').innerHTML = ""; 
    // Reseta a flag de igualdade
    lastWasEqual = false; 
}

// Função para calcular o resultado da expressão no visor
function calcular() {
    // Obtém o texto exibido no visor
    let resultado = document.getElementById('resultado').innerHTML; 

    // Se o visor mostra "Error", não faz nada ao pressionar Enter novamente
    if (resultado === "Error") {
        return; 
    }

    if (resultado) {
        try {
            // Remove espaços e zeros à esquerda
            resultado = resultado.trim().replace(/^0+/, ''); 

            // Converte porcentagens em operações matemáticas
            resultado = resultado.replace(/(\d+)%(\d+)/g, function(match, p1, p2) {
                return '(' + p1 + '/100) * ' + p2;
            });

            resultado = resultado.replace(/(\d+)%$/, function(match, p1) {
                return p1 + '/100';
            });

            // Remove operadores pendentes no final da expressão
            resultado = resultado.replace(/([+\-*/])$/, '');

            // Verifica se a expressão é válida
            if (resultado === '' || /[+\-*/]$/.test(resultado)) {
                // Se a expressão estiver vazia ou terminar com um operador, exibe "Error"
                document.getElementById('resultado').innerHTML = "Error"; 
            } else {
                // Avalia a expressão e exibe o resultado
                document.getElementById('resultado').innerHTML = eval(resultado); 
                lastWasEqual = true; // Marca que a última ação foi uma igualdade
            }
        } catch (e) {
            // Se houver um erro na avaliação, exibe "Error"
            document.getElementById('resultado').innerHTML = "Error"; 
            lastWasEqual = true; 
        }
    } else {
        // Se não houver expressão para avaliar, exibe "Error"
        document.getElementById('resultado').innerHTML = "Error"; 
        lastWasEqual = true; 
    }
}

// Adiciona um ouvinte de eventos para capturar entradas do teclado
document.addEventListener('keydown', function(event) {
    // Obtém a tecla pressionada
    const key = event.key; 
    // Mapeia teclas do teclado para os seus equivalentes na calculadora
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

    // Verifica se a tecla pressionada está no mapeamento
    if (key in keyMappings) {
        if (key === 'Enter') {
            // Calcula o resultado se a tecla Enter for pressionada
            calcular(); 
        } else if (key === 'Escape') {
            // Limpa o visor se a tecla Escape for pressionada
            clean(); 
        } else if (key === 'Backspace') {
            // Remove o último caractere se a tecla Backspace for pressionada
            const resultadoElem = document.getElementById('resultado');
            let resultado = resultadoElem.innerHTML;
            if (resultado === "Error") {
                clean(); // Limpa o visor se estiver "Error"
            } else {
                resultadoElem.innerHTML = resultado.slice(0, -1); 
            }
        } else {
            // Insere o caractere correspondente se for um número ou operador
            insert(keyMappings[key]); 
        }
    }
});