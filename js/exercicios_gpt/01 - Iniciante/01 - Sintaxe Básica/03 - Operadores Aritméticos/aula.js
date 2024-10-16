/*

Operadores Aritméticos e Lógicos

Operadores Aritimétocos:

    + (Adição)
    - (Subtração)
    * (Multiplicação)
    / (Divisão)
    % (Módulo(Resto da divisão))
    ** (Exponenciação)

Operadores Lógicos:

    && (E)
    || (OU)
    ! (NÃO)
    ?? (Coalescência Nula)

Operadores de Atribuição:

    = (Atribuição Simples)
    += (Atribuição com Adição)
    -= (Atribuição com Subtração)
    *= (Atribuição com Multiplicação)
    /= (Atribuição com Divisão)
    %= (Atribuição com Módulo)
    **= (Atribuição com Exponenciação)

Operadores Relacionais:

    == (Igualdade)
    === (Estritamente Igual)
    != (Diferente)
    !== (Estritamente Diferente)
    < (Menor que)
    > (Maior que)
    <= (Menor ou Igual)
    >= (Maior ou Igual)

Operador ternário (Condicional):

    condição ? valorSeVerdadeiro : valorSeFalso

*/


let n1 = 3
let n2 = 2


// ===== Operadores Aritméticos =====
console.log("===== Operadores Aritméticos =====")
console.log()

// Adição
console.log("Adição")
console.log(`${n1} + ${n2} = ${n1 + n2}`)
console.log()

// Subtração
console.log("Subtração")
console.log(`${n1} - ${n2} = ${n1 - n2}`)
console.log()

// Multiplicação
console.log("Multiplicação")
console.log(`${n1} * ${n2} = ${n1 * n2}`)
console.log()

// Divisão
console.log("Divisão")
console.log(`${n1} / ${n2} = ${n1 / n2}`)
console.log()

// Módulo (Resto da Divisão)
console.log("Módulo")
console.log(`${n1} % ${n2} = ${n1 % n2}`)
console.log()

// Exponenciação
console.log("Exponenciação")
console.log(`${n1} ** ${n2} = ${n1 ** n2}`)
console.log()
console.log()
console.log()





// ===== Operadores Lógicos =====
console.log("===== Operadores Lógicos =====")
console.log()


// E
console.log('E')
console.log(`${n1} = ${n2} e ${n2} = ${n1}? ${n1 == n2 && n2 == n1}`)
console.log(`${n1} = ${n1} e ${n2} = ${n1}? ${n1 == n1 && n2 == n1}`)
console.log(`${n1} = ${n2} e ${n2} = ${n2}? ${n1 == n2 && n2 == n2}`)
console.log(`${n1} = ${n1} e ${n2} = ${n2}? ${n2 == n2 && n2 == n2}`)
console.log()

// OU
console.log('OU')
console.log(`${n1} = ${n2} ou ${n2} = ${n1}? ${n1 == n2 || n2 == n1}`)
console.log(`${n1} = ${n1} ou ${n2} = ${n1}? ${n1 == n1 || n2 == n1}`)
console.log(`${n1} = ${n2} ou ${n2} = ${n2}? ${n1 == n2 || n2 == n2}`)
console.log(`${n1} = ${n1} ou ${n2} = ${n2}? ${n2 == n2 || n2 == n2}`)
console.log()

// NÃO
console.log('NÃO')
console.log(`Não falso = ${!false}`)
console.log(`Não verdadeiro = ${!true}`)
console.log(`${n1} é um número? ${!isNaN(n1)}`)
console.log()

// Coalescência Nula
let n3 = // Undefined
console.log('Coalescência Nula')
console.log(`Já que n3 = ${n3} vou mostrar o valor ${n3 ?? 5}`)
console.log()
console.log()
console.log()





// ===== Operadores de Atribuição =====
console.log("===== Operadores de Atribuição =====")
console.log()

// Atribuição simples
console.log("Atribuição Simples")
console.log(`let n1 = 3 (Variável n1 recebe 3)`)
console.log()

// Atribuição com Adição
console.log("Atribuição com Adição")
console.log(`n1 recebe n1 + 2 = ${n1 += 2}`)
console.log()

// Atribuição com Subtração
console.log("Atribuição com Subtração")
console.log(`n1 recebe n1 - 2 = ${n1 -= 2}`)
console.log()

// Atribuição com Multiplicação
console.log("Atribuição com Multiplicação")
console.log(`n1 recebe n1 * 2 = ${n1 *= 2}`)
console.log()

// Atribuição com Divisão
console.log("Atribuição com Divisão")
console.log(`n1 recebe n1 / 2 = ${n1 /= 2}`)
console.log()

// Atribuição com Módulo
console.log("Atribuição com Módulo")
console.log(`n1 recebe n1 % 2 = ${n1 %= 2}`)
console.log()

// Atribuição com Exponenciação
console.log("Atribuição com Exponenciação")
console.log(`n1 recebe n1 ** 2 = ${n1 **= 2}`)
console.log()
console.log()
console.log()





// ===== Operadores Relacionais =====
console.log("===== Operadores Relacionais =====")
console.log()

// Igualdade
console.log("Igualdade")
console.log(`${n2} é igual a ${n2}? ${n2 == n2}`)
console.log()

// Estritamente Igual
console.log("Estritamente Igual")
console.log(`${n2}(Number) é igual a "2"(String)? ${n2 === "2"}`)
console.log()

// Diferente
console.log("Diferente")
console.log(`${n2} é diferente de ${n2}? ${n2 != n2}`)
console.log()

// Estritamente Diferente
console.log("Estritamente Diferente")
console.log(`${n2}(Number) é diferente de "2"(String)? ${n2 !== "2"}`)
console.log()

// Menor que
console.log("Menor que")
console.log(`${n2} é menor que ${n1}? ${n2 < n1}`)
console.log()

// Maior que
console.log("Maior que")
console.log(`${n2} é maior que ${n2}? ${n2 > n2}`)
console.log()

// Menor ou Igual
console.log("Menor ou Igual")
console.log(`${n2} é menor ou igual a ${n2}? ${n2 <= n2}`)
console.log()

// Maior ou Igual
console.log("Maior ou Igual")
console.log(`${n2} é maior ou igual a ${n1}? ${n2 >= n1}`)
console.log()
console.log()
console.log()





// ===== Operador Ternário (Condição) =====
console.log("===== Operador Ternário (Condição) =====")
console.log()

let idade = 17
console.log(`Você tem ${idade} anos e é ${idade >= 18 ? "maior de idade" : "menor de idade"}`)