/*

Métodos criados

    - Sintaxe de Métodos
    - Métodos abreviados (ES6)
    - A Palavra-Chave "this"

métodos Padrões

    - String
    - Array
    - Onjetos

*/

// ===== Métodos Criados ===== //
console.log("===== Métodos Criados =====");
console.log();





// Sintaxe de Métodos
console.log("Sintaxe de métodos");

const pessoa = {
    nome: "Crithian",
    idade: 17,
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa.saudacao(); // Usamos para invocar os métodos.
console.log();





// Métodos abreviados (ES6)
console.log("Métodos abreviados (ES6)")

const pessoa1 = {
    nome: "Santiago",
    idade: 17,
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa1.saudacao();
console.log();
  




// A Palavra-Chave "this"
console.log("A Palavra-Chave 'this'");

const carro = {
    marca: "Civic",
    cor: "Preto",
    descricao() {
        return `${this.marca} é um carro de cor ${this.cor}`;
    }
};
console.log(carro.descricao());
console.log();
  





// ===== Métodos Padrões ===== //
console.log("===== Métodos Padrões =====");
console.log();

// == String ==
console.log("== string ==");
let texto = "Olá, Mundo! ";
console.log(`A variável é "${texto}"`)
console.log();

// .length
console.log("length");
console.log(texto.length); // A string "Olá, Mundo! " tem 10 caracteres.
console.log();

// .toUpperCase()
console.log("toUpperCase");
console.log(texto.toUpperCase());
console.log();

// .toLowerCase()
console.log("toLowerCase");
console.log(texto.toLowerCase());
console.log();

// .indexOf()
console.log("indexOf");
console.log(texto.indexOf("Mundo!")); // A palavra "Mundo!" começa na quinta posição.
console.log(texto.indexOf("Programadores!")); // Retorna -1 caso não encontre a palavra.
console.log();

// .slice()
console.log("slice")
console.log(texto.slice(0, 3)); // A palavra que está localizada entre a posição 0 e 3 é "Olá".
console.log();

// .replace()
console.log("replace")
console.log(texto.replace("Mundo", "Comunidade")); // Troca a palavra "Mundo" por "Comunidade".
console.log();

// .trim()
console.log("trim");
console.log(texto.trim()); // Tira o espaço deixado no começo e/ou fim da string ("Olá Mundo! ") -> ("Olá Mundo!").
console.log();

// .includes()
console.log("includes");
console.log(texto.includes("Olá")); // true // Existe "Olá" na variável texto.
console.log(texto.includes("Oi")); // false // Não existe "Oi" na variável texto.
console.log();

// .charAt()
console.log("charAt");
console.log(texto.charAt(5)); // Retorna "M" pois é a quinta letra da string.
console.log();

// split()
console.log("split");
let textoSeparado = texto.split(","); // Usado para separar o que está (nesse caso) com vírgula.
console.log(textoSeparado);
console.log();

// startsWith()
console.log("startsWith");
console.log(texto.startsWith("Olá")); // true // Pois "Olá, Mundo! " começa com a palavra "Olá".
console.log(texto.startsWith("Oi")); // false // Pois "Olá, Mundo! " não começa com a palavra "Oi".
console.log();

// endsWith()
console.log("endsWith");
console.log(texto.trim().endsWith("!")); // true // Pois "Olá, Mundo!" termina com "!".
console.log(texto.trim().endsWith("?")); // false // Pois "Olá Mundo!" não termina com "?".
console.log();

// repeat()
console.log("repeat");
console.log(texto.repeat(3)); // Repete "Olá, Mundo!" 3 vezes.
console.log();





// == Array ==
console.log("== Array ==");

// == Objetos ==
console.log("== Objetos ==");