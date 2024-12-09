// Aula 9: Métodos e Manipulação Avançada de Arrays

// Principais métodos:
// - push():  Adiciona no final.
// - unshift():  Adiciona no início.
// - pop():  Remove do final.
// - shift():  Remove do início.
// - map():  Cria um novo Array transformando cada elemento.
// - filter():  Cria um novo Array com elementos que atendem a uma condição.
// - find():  Retorna o primeiro elemento que atende a uma condição.
// - findIndex():  Retorna o índice do primeiro elemento que atende a uma condição.
// - includes():  Verifica se um valor existe no Array.
// - some():  Verifica se algum elemento atende a uma condição.
// - every():  Verifica se todos os elementos atendem a uma condição.
// - forEach():  Itera sobre os elementos (similar a um for).
// - slice():  Retorna uma cópia de uma parte do Array.
// - splice():  Remove, substitui ou adiciona elementos em um Array.

// map()

let numeros = [1, 2, 3, 4];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]





// filter()

let idades = [15, 20, 17, 30];
let maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [20, 30]





// find()

let frutas = ["maçã", "banana", "cereja"];
let frutaEncontrada = frutas.find(fruta => fruta.startsWith("c"));
console.log(frutaEncontrada); // "cereja"





// includes()

let cores = ["vermelho", "azul", "verde"];
console.log(cores.includes("azul")); // true





// forEach()

let nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach(nome => console.log(nome));