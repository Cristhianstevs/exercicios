// Exercício 1: Crie um objeto chamado carro com as seguintes propriedades: marca, modelo e um método descricao que retorne uma frase como: "Este carro é um [marca] [modelo]".
console.log("Exercício 1")

const carro = {
    marca: "Honda",
    modelo: "Civic",
    descricao() {
        console.log(`Esse carro é um ${this.marca} ${this.modelo}`)
    }
};
carro.descricao();
console.log()




/*
Exercício 2: 
- Crie uma string com a frase "Aprender JavaScript é divertido!".
- Use o método toUpperCase() para transformar tudo em maiúsculas.
- Extraia apenas a palavra "JavaScript" usando slice().
- Substitua "divertido" por "incrível" usando replace().
- Remova os espaços extras, se houver, usando trim().
*/
console.log("Exercício 2");

let aprender = "Aprender JavaScript é divertido!"
console.log(aprender.toUpperCase())
console.log(aprender.slice(9, 19))
console.log(aprender.replace("divertido", "incrível"))
console.log(aprender.trim()) // Não tem espaços em branco //
console.log();





/*
Exercício 3:
- Crie uma função que receba uma string e retorne a mesma string em letras maiúsculas.
- Dada a frase "Eu estou aprendendo JavaScript!", use indexOf para encontrar a posição da palavra "JavaScript".
- Dada a string " OpenAI ", remova os espaços em branco nas extremidades usando trim().
*/
console.log("Exercício 3");
 
let estudo = "Eu estou aprendendo JavaScript!";
let estudo01 = "  OpenAI  "
console.log(estudo.toUpperCase());
console.log(estudo.indexOf("JavaScript"));
console.log(estudo01.trim())