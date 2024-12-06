// Aula 7: Escopo e Closures

// Tipos de Escopo
// - Escopo Globa
// - Escopo de Função
// - Escopo de Bloco

// Escopo Global

let linguagem = "JavaScript"; // Variável global

function exibirLinguagem() {
    console.log(linguagem); // Acessa a variável global
}

exibirLinguagem(); // JavaScript
console.log(linguagem); // JavaScript





// Escopo de Função

function criarMensagem() {
    let mensagem = "Bem-vindo ao escopo de função!";
    console.log(mensagem); // Acessível aqui
}

criarMensagem(); // Bem-vindo ao escopo de função!
// console.log(mensagem);                            // Erro: mensagem não está definida





// Escopo de Bloco

{
    let bloco = "Estou dentro de um bloco!";
    console.log(bloco); // Acessível aqui
}
// console.log(bloco);                               // Erro: bloco não está definido





// Closure

function criarContador() {
    let contador = 0; // Variável "privada"
    return function() {
        contador++;
        console.log(`Contador: ${contador}`);
    };
}

const meuContador = criarContador();
meuContador(); // Contador: 1
meuContador(); // Contador: 2

const outroContador = criarContador();
outroContador(); // Contador: 1