// Escopo Global e de Função: Crie uma função que declare uma variável dentro dela. Tente acessar essa variável fora da função e explique o comportamento.

function meuCarro() {
    let carro = "Cívic";
    console.log(carro);
};
meuCarro(); // Cívic
// console.log(carro);       // Erro, carro não definido





// Escopo de Bloco: Crie um `if` com uma variável declarada com `let`. Tente acessá-la fora do bloco e veja o que acontece.

let idade = 17;
if (idade == 17) {
    let proximaIdade = idade + 1;
    console.log(`Minha idade é: ${idade}`); // Minha idade é: 17, var idade é global
    console.log(`Vou fazer: ${proximaIdade}`); // Vou fazer: 18, só funciona dentro do bloco
};
console.log(idade); // 17, var idade é global
// console.log(proximaIdade);         // Erro, var não definido, var proximaIdade não existe fora do bloco





// Closure Simples: Crie uma função que retorna outra função. A interna deve acessar uma variável declarada na externa.

function externa(n1 = 1) {
    let quadrado = n1 * n1;
    return function() {
        quadrado++;
        console.log(quadrado);
    };
};

const quadradoMaisUm = externa(2);
quadradoMaisUm(); // 5
quadradoMaisUm(); // 6
quadradoMaisUm(); // 7

const outroQuadradoMaisUm = externa (2);
outroQuadradoMaisUm(); // 5





/*

Desafio - Simulando um Banco: Crie uma função `contaBancaria` que use um closure para simular um banco. Ela deve permitir:
    
- Depositar um valor.
- Sacar um valor.
- Consultar o saldo.

*/ 

function contaBancaria() {
    let  saldo = 0;

    return {
        depositar: function(valor) {
            saldo += valor;
            console.log(`Você depositou R$${valor} e está com R$${saldo}.`);
        },
        sacar: function(valor) {
            if (valor > saldo) {
                console.log(`Saldo insuficiente. Você tentou sacar R$${valor}, mas só tem R$${saldo}.`);
            }
            else {
                saldo -= valor;
                console.log(`Você sacou R$${valor}, e agora está com R$${saldo}`);
            };
        },
        consultarSaldo: function() {
            console.log(`Seu saldo atual é de R$${saldo}`);
        }
    };
};

const minhaConta = contaBancaria();
minhaConta.depositar(500);
minhaConta.depositar(200);
minhaConta.sacar(100);
minhaConta.consultarSaldo();





/*
Crie uma função gerenciarEstoque que retorne um objeto com as seguintes funções:

- adicionarProduto(produto, quantidade): Adiciona um produto ao estoque.
- removerProduto(produto, quantidade): Remove uma quantidade específica do produto, mas apenas se houver estoque suficiente.
- consultarEstoque(): Exibe todos os produtos e suas respectivas quantidades.
*/ 

function gerenciarEstoque() {
    let estoque = {};

    return {
        adicionarProduto: function(produto, quantidade) {
            if (estoque[produto]) {
                estoque[produto] += quantidade; // Incrementa
            }
            else {
                estoque[produto] = quantidade; // Adiciona
            }
            console.log(`Adicionado: ${produto}, Quantidade: ${quantidade}`);
        },
        removerProduto: function(produto, quantidade) {
            if (estoque[produto] && estoque[produto] >= quantidade) {
                estoque[produto] -= quantidade; // Reduz a quantidade
                console.log(`Removido: ${produto}, Quantidade: ${quantidade}`);
            } else {
                console.log(`Não é possível remover ${quantidade} de ${produto}. Estoque insuficiente ou produto inexistente.`);
            }
        },
        consultarEstoque: function() {
            console.log("Estoque atual:");
            for (let produto in estoque) {
                console.log(`${produto}: ${estoque[produto]}`);
            }
        }
    };
};

const meuEstoque = gerenciarEstoque();
meuEstoque.adicionarProduto("Arroz", 20);
meuEstoque.adicionarProduto("Feijão", 10);
meuEstoque.consultarEstoque();





/*
Crie uma função contadorPersonalizado que receba um valor inicial e um passo (valor a ser incrementado ou decrementado). A função deve retornar um objeto com:

- incrementar(): Aumenta o valor atual pelo passo definido.
- decrementar(): Diminui o valor atual pelo passo definido.
- consultarValor(): Exibe o valor atual.
*/

function contadorPersonalizado(n1 , n2) {
    return {
        incrementar: function() {
            console.log(n1 += n2);
        },
        decrementar: function() {
            console.log(n1 -= n2);
        },
        consultarValor: function() {
            console.log(`Seu valor atual é ${n1}`);
        }
    };
};

const meuContador = contadorPersonalizado(10, 2);
meuContador.incrementar();
meuContador.incrementar();
meuContador.decrementar();
meuContador.decrementar();
meuContador.consultarValor();





/*
Crie uma função gerenciarTarefas que permita criar um sistema de lista de tarefas. Ela deve retornar um objeto com as funções:

- adicionarTarefa(descricao): Adiciona uma nova tarefa.
- removerTarefa(indice): Remove a tarefa com o índice especificado.
- listarTarefas(): Lista todas as tarefas com seus índices.
*/

function gerenciarTarefas() {
    let tarefas = [];
    return {
        adicionarTarefa: function(tarefa) {
            tarefas.push(tarefa); // Adiciona ao array
            console.log(`Tarefa "${tarefa}" adicionada.`);
        },
        removerTarefa: function(tarefa) {
            const index = tarefas.indexOf(tarefa); // Localiza a tarefa
            if (index !== -1) {
                tarefas.splice(index, 1); // Remove a tarefa
                console.log(`Tarefa "${tarefa}" removida.`);
            } else {
                console.log(`Tarefa "${tarefa}" não encontrada.`);
            }
        },
        listarTarefas: function() {
            console.log("Tarefas atuais:");
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
            } else {
                tarefas.forEach((tarefa, index) => {
                    console.log(`${index + 1}. ${tarefa}`);
                });
            }
        }
    };
};

const minhasTarefas = gerenciarTarefas();
minhasTarefas.adicionarTarefa("Escovar os Dentes");
minhasTarefas.adicionarTarefa("Tomar Banho");
minhasTarefas.listarTarefas();