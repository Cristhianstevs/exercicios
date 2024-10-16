// var, let, const

// ===--- let ---===
console.log('=== EXEMPLO LET ===')

let a = 10

function exemploVar(valor) {
    let a = 20 + valor//(30)
    // let agora vale 50 apenas dentro do escopo
    console.log(a)
}

var resposta = exemploVar(30) // exemploVar(valor) passa a ser exemploVar(30)
console.log(a) // continua valendo 10



// ===--- const ---===
console.log('=== EXEMPLO CONST ===')

const pi = 3.14
//    pi = 3.1415 // causaria erro, pois const não pode ser reatribuida.

const carro = {marca: "Audi", modelo: "A3"}
carro.modelo = "A5" // Pode mudar a propriedade de um objeto com const.
console.log(carro)