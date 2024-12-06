// Função sem parâmetros e sem retorno: Crie uma função que exiba no console: "Praticando funções é divertido!".

function exercicio() {
    console.log("Praticando funções é divertido!");
};
exercicio();





// Função com parâmetros e retorno: Crie uma função que receba dois números e retorne a soma deles.

const somar = (n1, n2) => n1 + n2;
console.log(somar(4, 6));





// Função com parâmetros opcionais: Crie uma função que receba um nome e exiba uma mensagem como: "Olá, [nome]!". Se nenhum nome for passado, use "Amigo" como padrão.

const saudacao = function(nome = "Amigo") {
    console.log(`Olá, ${nome}!`);
};
saudacao(); // Olá, Amigo!
saudacao("ChatGPT"); // Olá, ChatGPT!

const saudacao2 = (nome = "Usuário") => console.log(`Olá, ${nome}!`);
saudacao2();
saudacao2("Santiago");





// Desafio: Escreva uma função que receba um número e diga se ele é par ou ímpar.

function parOuImpar(num) {
    console.log(num % 2 == 0 ? "Número Par!" : "Número Impar!");
};
parOuImpar(5); // Número Impar!
parOuImpar(4); // Número Par!