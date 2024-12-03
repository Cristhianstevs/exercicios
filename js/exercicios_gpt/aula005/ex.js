// Escreva um laço que imprima os números de 1 a 10 no console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}; // 1 a 10, pois i recebe 1, 1 é menor ou igual a 10 e recebe mais 1 até chegar a 10.

// Use um laço para imprimir os números de 10 a 1 no console (em ordem decrescente).

let decrescente = 10;
while (decrescente >= 1) {
    console.log(decrescente);
    decrescente--
}; // 10 a 1, pois decrescente recebe 10 e enquanto 10 for maior ou igual a 1 irá mostrar o valor de decrescente e diminuir 1 em seu valor.

// Crie um laço que pergunte ao usuário (simulado com uma variável, por enquanto) se deseja continuar, e pare apenas quando a resposta for "não".

// sim == true
// não == false
let prosseguir = true;
do {
    console.log("Deseja continuar?");
    prosseguir = false;
}
while (prosseguir == true);

// Crie um array com 5 nomes. Use um `for` para imprimir todos os nomes no console.

let cores = ["Azul", "Amarelo", "Verde", "Vermelho", "Rosa"];
for (let i = 0; i < cores.length; i++) {
    console.log(`Cor: ${cores[i]}`);
};