// Aula 8: Manipulação de Array e Objetos

// Array

let frutas = ["Maçã", "Banana", "Manga"];
console.log(frutas[0]); // "Maçã" (primeiro elemento)
console.log(frutas[2]); // "Manga" (terceiro elemento)





// Métodos Array
// - push() => Adiciona um elemento ao final do Array.
// - pop() => Remove o último elemento do Array.
// - shift() => Remove o primeiro elemento do Array.
// - unshift() => Adiciona um elemento no início do Array.

// push()

let cores = ["Vermelho", "Verde"];
cores.push("Azul");
console.log(cores); // ["Vermelho", "Verde", "Azul"]





// pop()

cores.pop();
console.log(cores); // ["Vermelho", "Verde"]





// shift()

let animais = ["Gato", "Cachorro", "Pássaro"];
animais.shift();
console.log(animais); // ["Cachorro", "Pássaro"]





// unshift()

animais.unshift("Peixe");
console.log(animais); // ["Peixe", "Cachorro", "Pássaro"]





// Iteração com `for`

let numeros = [1, 2, 3];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // 1, depois 2, depois 3
};





// Objetos

let pessoa = {
    nome: "Cristhian",
    idade: 18,
    estudante: true
};
console.log(pessoa.nome); // "Cristhian"
console.log(pessoa["idade"]); // 25





// Arrays dentro de Objetos

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    proprietarios: ["Ana", "Bruno"]
};
console.log(carro.proprietarios[1]); // "Bruno"





// Manipulação de Objetos

// Adicionar ou modificar propriedades

pessoa.altura = 1.70; // Adiciona a propriedade 'altura'
pessoa.nome = "Santiago"; // Modifica a propriedade 'nome'
console.log(pessoa);





// Remover propriedades

delete pessoa.estudante;
console.log(pessoa);





// Iterar sobre propriedades

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
// nome: Santiago
// idade: 25
// altura: 1.7