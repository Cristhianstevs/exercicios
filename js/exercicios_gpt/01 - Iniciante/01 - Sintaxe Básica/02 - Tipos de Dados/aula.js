/*

Os tipos de Dados em JavaScript são:

1- String - (Texto)
2- Number - (Número)
3- Boolean - (Verdadeiro ou falso)
4- Null - (Sem valor)
5- Undefined - (Valor de variável não declarada)
6- Symbol - (Valor Único)
7- BigInt - (Números muito grandes)
8- Object - (Coleção de dados)

Vamos usar typeof() para saber o tipo de valor guardado na variável.

*/

// String
console.log('==== String ====');

let string = "Cristhian";
console.log(string); // Cristhian
console.log(typeof(string)); // String
console.log(string.includes("risthia")); // true
console.log(string.startsWith("Crist")); // true
console.log(string.endsWith("hian")); // true
console.log(string.repeat(2)); // CristhianCristhian





// Number
console.log('==== Number ====');

let numberInt = 17;
let numberReal = 17.10;
console.log(numberInt); // 17
console.log(numberReal); // 17.10
console.log(typeof(numberInt));
console.log(typeof(numberReal));

console.log(NaN === NaN);  // false
console.log(isNaN(NaN));   // true
console.log(0 / 0)

console.log(1 / 0);  // Infinity
console.log(-1 / 0);  // -Infinity

console.log(0.1 + 0.2);  // 0.30000000000000004





// Boolean
console.log('==== Boolean ====');

console.log(Boolean(""));  // false
console.log(Boolean("texto"));  // true
console.log(typeof(Boolean()));

console.log(Boolean(0));  // false
console.log(Boolean(""));  // false
console.log(Boolean("texto"));  // true
console.log(Boolean([]));  // true





// Null
console.log('==== Null ====');

console.log(`${typeof(null)}?`); // Object
let nulo = null;
console.log(nulo === null); // true;





// Undefined
console.log('==== Undefined ====');

let undefined;
console.log(undefined); // Undefined

function saudacao() {};
console.log(saudacao());  // undefined






// Symbol (ES6)
console.log('==== Symbol ====');

let simbolo1 = Symbol("descricao");
let simbolo2 = Symbol("descricao");
console.log(simbolo1 === simbolo2);  // false
console.log(typeof(simbolo1)); // Symbol
console.log(typeof(simbolo2)); // Symbol





// BigInt
console.log('==== BigInt ====');

let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande);  // 1234567890123456789012345678901234567890n
console.log(typeof(numeroGrande)); // BigInt




// Object
console.log('==== Object ====');

let object = {};
let array = [];
console.log(typeof(object)); // Object
console.log(typeof(array)); // Object