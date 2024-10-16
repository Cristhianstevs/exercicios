// Exercício 1: Crie um laço for que mostre todos os números de 1 a 10.

console.log("Exercicio 1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();





// Exercício 2: Use um laço while para somar números de 1 a 5.
console.log("Exercício 2");

var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log();





// Exercício 3: Tente usar do...while para contar de 5 até 0.
console.log("Exercício 3");

let i1 = 5;
do {
    console.log(i1);
    i1--;
} while (i1 >= 0);
console.log();





// Exercicio 4: Crie um laço for que mostre os números de 1 a 10, mas use o break para parar quando o número for 7.
console.log("Exercício 4");

for (var i2 = 1; i2 <= 10; i2++) {
    if (i2 === 7) {
        break;
    }
    console.log(i2);
}
console.log(i2);
console.log();





// Exercicio 5: Crie um objeto carro com as propriedades marca, modelo e ano. Use for...in para exibir as propriedades e valores.
console.log("Exercício 5");

const carro = {marca: "Honda", modelo: "Civic", ano: 2024};
for(let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}
console.log();





// Exercício 6: Crie um array de nomes e use for...of para mostrar cada nome individualmente.
console.log("Exercício 6");

const personagens = ["Mario", "Sonic", "Crash", "Link"];
for (let valor of personagens) {
    console.log(`${valor}`);
}