/*

Funções - Declarações e Invocações

*/

// Declarações simples

function somar(a, b) {
    return a + b;
};





// Expressão de função

const somar1 = function(a, b) {
    return a + b;
};





// Invocação de Funções

console.log(somar(2, 3)); // Resultado: 5
console.log(somar1(3, 1)); // Resultado: 4





// Funções sem parâmetros

function saudacao() {
    console.log("Olá!");
}
saudacao(); // Resultado: Olá!





// Funções com ou sem retornos 

function exibirMensagem() {
    console.log("Esta função não retorna nada.");
}
exibirMensagem();