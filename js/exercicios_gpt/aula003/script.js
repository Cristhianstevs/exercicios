// Aula 3 - Operadores Aritméticos e lógicos

// Operadores Aritméticos           | // Operadores de Combinação
// - (+) Adição                     | // - (==) Igual a
// - (-) Subtração                  | // - (===) Igual a (e tipo)
// - (*) Multiplicação              | // - (!=) Diferente de
// - (/) Divisão                    | // - (!==) Diferente de (e tipo)
// - (%) Resto da Divisão           | // - (>) Maior que
// - (++) Incremento (soma 1)       | // - (<) Menor que
// - (--) Descremento (subtrai 1)   | // - (>=) Maior ou Igual
//                                  | // - (<=) Menor ou Igual
// ---------------------------------+-----------------------------------------------
// Operadores Lógicos               | // Operador Ternário
// - (&&) e                         | // - (? :)
// - (||) ou                        | // Sintaxe
// - (!) não                        | // condição ? valorSeVerdadeiro : valorSeFalso

let n1 = 5;
let n2 = 2;

console.log(n1 + n2); // Adição
console.log(n1 - n2); // Subtração
console.log(n1 * n2); // Multiplicação
console.log(n1 / n2); // Divisão
console.log(n1 % n2); // Resto da Divisão
n1++; // de 5 passou a valer 6
console.log(n1); // Incremento
n2--; // de 2 passou a valer 1
console.log(n2); // Descremento

console.log(true && false); // false
console.log(true || false); // true
console.log(!false); // true

console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(5 != '5'); // false
console.log(5 !== '5'); // true
console.log(5 > 2); // true
console.log(5 < 2); // false
console.log(5 >= 5); // true
console.log(5 <= 2); // false

let idade = 17;
let podeDirigir = (idade >= 18) ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); // 17  não é maior ou igual a 18, logo não pode dirigir.