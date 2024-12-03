// Crie uma operação de soma entre dois números e mostre o resultado no console.

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);

// Verifique se dois números são diferentes usando o operador `!==`.

console.log(n1 !== '10'); // true, pois o primeiro 10 é Number e o segundo é String

// Combine dois valores booleanos usando o operador `&&`.

console.log(true && true); // true

// Use o operador ternário para verificar se um número é par ou ímpar. Dica: Use o operador `%`.

let num = 18
let parOuImpar = (num % 2 == 0) ? "Número Par" : "Número Impar";
console.log(parOuImpar); // "Número Par", pois o resto da divisão de 18 por 2 é igual a zero