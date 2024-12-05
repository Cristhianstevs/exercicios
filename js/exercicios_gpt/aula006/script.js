// Aula 6: Funções

// Exemplo simples

function somar(a, b) {
    return a + b;
};

let resultado = somar(5, 3); // "a" passa a ser 5, e "b" passa a ser 3
console.log(resultado);





// Função sem parametro e retorno

function exibirMensagem() {
    console.log("Olá, Mundo!");
};

exibirMensagem(); // Chama a função





// Função com retorno `return`

function calcularQuadrado(num) {
    return num * num;
};

let quadrado = calcularQuadrado(5);
console.log(quadrado);





// Observações

// - Uma variável de escopo declaradas dentro de funções só existem dentro das funções

function exemplo() {
    let variávelEscopo = 17;
    console.log(variávelEscopo);
};
// console.log(variávelEscopo);         // erro: não existe fora da função





// - Parâmetros opcionais

function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
};

saudacao();
saudacao("Cristhian");





// - Aninhamento de funções

function externa() {
    function interna() {
        console.log("Função dentro de outra!");
    }
    interna(); // Chamando a função interna
}
externa();





// Tipos de funções
// - Funções Declaradas
// - Funções Anônimas
// - Arrow Functions (Funções flecha)

// Funções declaradas

function funcaoDeclarada() {
    console.log("Função declarada");
};
funcaoDeclarada();





// Funções Anônimas

const funcaoAnonima = function() {
    console.log("Função Anônima")
};
funcaoAnonima();





// Arrow Function

const soma = (a, b) => a + b;
console.log(soma(5, 3));