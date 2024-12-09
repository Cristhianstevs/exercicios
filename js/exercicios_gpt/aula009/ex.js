// Crie um array com números de 1 a 10 e:
// - Use `filter()` para criar um novo array com apenas números pares.
// - Use `map()` para criar um novo array com o dobro dos números.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.filter(numero => numero % 2 == 0));
console.log(numeros.map(numero => numero*2));





// Crie um array com nomes de 5 animais e:
// - Use `find()` para buscar o primeiro nome que começa com "C".
// - Use `forEach()` para exibir todos os nomes no console.

let animais = ["Vaca", "Galinha", "Porco", "Cabra", "Pato"];
console.log(animais.find(animal => animal.startsWith("C")));
animais.forEach(animais => console.log(animais));





// Crie um array com preços de produtos e:
// - Use `some()` para verificar se há algum preço acima de 100.
// - Use `every()` para verificar se todos os preços são maiores que 10.

let precosProdutos = [23, 58, 130, 5, 144, 230, 37];
console.log(precosProdutos.some(precosProduto => precosProduto >= 100)); // true
console.log(precosProdutos.every(precosProduto => precosProduto > 10)); // false





// Crie um array de objetos representando pessoas com propriedades `nome` e `idade` e:
// - Use `filter()` para retornar pessoas maiores de 18 anos.
// - Use `map()` para criar um array contendo apenas os nomes das pessoas.

let pessoas = [
    {nome: "Gabriel", idade: 23},
    {nome: "Cristhian", idade: 17},
    {nome: "Ana Beatriz", idade: 18},
    {nome: "Nicolas", idade: 10}
];
console.log(pessoas.filter(pessoa => pessoa.idade >= 18));
console.log(pessoas.map(pessoa => pessoa.nome));