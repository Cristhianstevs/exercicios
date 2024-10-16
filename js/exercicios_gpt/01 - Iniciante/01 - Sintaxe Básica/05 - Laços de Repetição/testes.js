// Teste 1: let i não existe fora do escopo.

for (let i = 0; i < 5; i++) {
    console.log(i)
}
//console.log(i) // i não existe fora do escopo!
console.log()





// Teste 2: numeros.length é a quantidade de elementos do array numeros

const numeros = [23, 15, 12, 21, 35, 67, 34]
//               0   1   2   3   4   5   6   ->   índice
//               1   2   3   4   5   6   7   ->   numeros.length é igual a 7
console.log(numeros[5])
console.log(numeros.length)