/*

Métodos

    - Sintaxe de Métodos
    - Métodos abreviados (ES6)
    - Métodos em Arrays
    - A Palavra-Chave "this"

*/

// Sintaxe de Métodos

const pessoa = {
    nome: "Crithian",
    idade: 17,
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa.saudacao(); // Usamos para invocar os métodos.





// Métodos abreviados (ES6)

const pessoa1 = {
    nome: "Santiago",
    idade: 17,
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa1.saudacao();
  


let frutas = ["maçã", "banana"];
frutas.push("laranja"); // Adiciona 'laranja' ao final do array
console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
