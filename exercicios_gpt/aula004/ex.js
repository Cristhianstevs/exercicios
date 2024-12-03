// Escreva um código que verifica se um número é positivo, negativo ou zero usando `if`, `else if` e `else`.

let numero = 10;
if (numero < 0) {
    console.log("Número negativo");
}
else if (numero > 0) {
    console.log("Número positivo");
}
else {
    console.log("Número zero")
}; // Número positivo, pois 10 é maior que 0.

// Usando `if` e `else`, escreva um programa que verifica se uma pessoa tem idade suficiente para votar (idade mínima: 16).

let idade = 17;
if (idade >= 16) {
    console.log("Pode votar");
}
else {
    console.log("Não pode votar");
}; // Pode votar, pois 17 é maior que 16.

// Crie um programa com `switch` que imprime o nome do mês baseado em um número de 1 a 12.

let mes = 12;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6: 
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
}; // Dezembro, pois mês 12 é Dezembro.

/*
Desafio: Use `switch` para classificar a nota de um aluno:
- 90 a 100: "Excelente"
- 70 a 89: "Bom"
- 0 a 69: "Precisa melhorar" *Use intervalos simplificados no `switch` para facilitar.*
*/

let nota = 100;
let categoria;

if (nota >= 90) {
    categoria = 1;
}
else if (nota >= 70 && nota < 90) {
    categoria = 2;
}
else {
    categoria = 3;
};

switch (categoria) {
    case 1:
        console.log("Excelente!");
        break;
    case 2: 
        console.log("Bom");
        break;
    case 3:
        console.log("Precisa melhorar");
        break;
    default:
        console.log("Nota inválida")
}; // Excelente, pois 100 é maior que 90 e foi categorizada como 1 que é excelente!