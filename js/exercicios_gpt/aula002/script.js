// Aula 2 - Tipos de Dados

// Existem a vários tipos de dados em JavaScript. São eles:

// Tipos Primitivos
// - String (Texto)
// - Number (Número)
// - Boolean (Booleano - Verdadeiro ou falso)
// - Null (Sem valor)
// - Undefined (Valor não encontrado)

// Tipos Compostos
// - Object (Objeto)
// - Array (Lista ou Vetor)

// Converção de tipos de dados
// - Type Coercion (Conversão de Tipos)
// - Conversão explícita


// String
const nome = "Cristhian";
console.log(nome);

// Number
let idade = 17;
let altura = 1.83;
console.log(`Minha idade é ${idade} e minha altura é ${altura}`)

// Boolean
const maior18 = false;
const menor18 = true;
console.log(`É maior de 18 anos? ${maior18}, É menor de 18 anos? ${menor18}`);

// Null
let semValor = null;
console.log(semValor);

// Undefined
let meuCarro; // valor não atribuído
console.log(meuCarro);

// Object
let carro = {
    marca: "Honda", 
    modelo: "Civic",
    ano: 2020
};
console.log(carro);

// Array
let cores = ["Azul", "Vermelho", "Verde", "Amarelo"];
console.log(cores);

// Type Coercion
let parcelas = 12 + " vezes";
console.log(parcelas); // Tudo vira string
console.log(typeof(parcelas)); // Mostra que parcelas é uma string (mesmo atribuindo um number)

// Conversão explícita
let numeroCamisa = "53"; // String
console.log(Number(numeroCamisa)); // Mostra no console a coversão de numeroCamisa string para number
console.log(typeof(Number(numeroCamisa))); // Mostra que a conversão torna string pra Number

let tamanhoAlianca = 13; // number
console.log(String(tamanhoAlianca)); // Converte number para string
console.log(typeof(String(tamanhoAlianca))); // Prova que a conversão foi um sucesso!