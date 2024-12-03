// Tipos de variáveis

// var
var idade = 10;
console.log(idade);

// let | const

// let 
function comprarPão() {
   let nome = "Nicolas";
   console.log(nome); 
};
let fiz = comprarPão();
// console.log(nome); // Não funciona pois a variável `let` só funciona dentro do bloco.
// {} == Bloco

// const
// Também só funciona dentro de um bloco
// const é uma variável constante.

const carro = "Civic";
carro = "Porche";
console.log(carro);

// = recebe
// == igual

// diferença `var` vs `let`
// `var` é ultrapassado.
// `var` é glabal no código e `let` não.

// diferença `let` vs `const`