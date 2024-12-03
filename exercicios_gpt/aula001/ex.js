// Crie uma variável `let` e altere seu valor

let carro = "palio";
carro = "Civic";
console.log(carro);

// Crie uma variável com `const` e tente reatribuir um valor para ver o erro.

const cor = "Azul";
// cor = "verde";    // Não é possível, gera um erro
console.log(cor);

// Crie uma variável com `var` e compare seu comportamento com `let`

var nome = "Cristhian";
nome = "Santiago";
console.log(nome);
// `var` é diferente de `let` pois `let` tem escopo de bloco, `var` não tem