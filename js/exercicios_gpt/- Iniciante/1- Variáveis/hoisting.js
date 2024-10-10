// Aprendendo hoisting

// Hoisting com Var

console.log(minhaVar)  // undefined
var minhaVar = 10
console.log(minhaVar)  // 10

/* É assim que o JavaScript organiza antes de iniciar.

var minhaVar;
console.log(minhaVar);  // undefined
minhaVar = 10;
console.log(minhaVar);  // 10

*/



// Hoisting com Let

// console.log(minhaLet);  // ReferenceError: Cannot access 'minhaLet' before initialization
let minhaLet = 20
console.log(minhaLet)

/* Hoisting de 'let', mas com TDZ

let minhaVariavel;  // A variável é elevada, mas está em uma "zona morta" até a linha de inicialização.
console.log(minhaVariavel);  // ReferenceError
minhaVariavel = 10;

*/



// Hoisting com Const

// console.log(minhaConstante)  // ReferenceError
const minhaConstante = 30
console.log(minhaConstante)



// Hoisting com Funções

saudacao01();  // "Olá, mundo!"
function saudacao01() {
    console.log("Olá, mundo!");
}

/* Internamente, o JavaScript trata isso assim:

function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();  // "Olá, mundo!"

*/

// Function Declaration (elevada):

console.log(saudacao02())  // "Olá, mundo!"
function saudacao02() {
    return "Olá, mundo!"
}

// Function Expression (não elevada):

// console.log(saudacao());  // TypeError: saudacao is not a function
var saudacao = function() {
    return "Olá, mundo!"
}


