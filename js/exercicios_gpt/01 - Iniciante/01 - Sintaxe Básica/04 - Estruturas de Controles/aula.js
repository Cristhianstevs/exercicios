/*

Estruturas de Controles

Condicionais:

    - if
    - else if
    - else

Condicionais com Multiplas ações:

    - Switch

Condicionais Aninhadas:

    - if aninhado

*/


let cnh = true
let idade = 18;
console.log(`Sua idade é ${idade}`)
console.log()


// ===== if =====
console.log("===== if =====");

if(idade >= 18) {
    console.log ("Maior de Idade");
}
console.log();





// ===== else if =====
console.log("===== else if =====");

if (idade >= 18) {
    console.log("Pode assistir filmes com qualquer classificação.");
}
else if (idade >= 16) {
    console.log("Pode assistir filmes com a classificação para maiores de 16 anos.");
}
console.log();





// ===== else =====
console.log("===== else =====");

if (idade >= 18) {
    console.log("Já pode tirar carteira de motorista.");
}
else {
    console.log("Ainda não pode tirar carteira de motorista.");
}
console.log()





// ===== Switch =====
console.log("===== Switch =====");

switch (idade) {
    case 18:
        console.log("Filmes para 18 anos");
        break;
    case 17:
        console.log("Filmes para 16 anos");
        break;
    case 16:
        console.log("Filmes para 16 anos");
        break;
    case 15:
        console.log("Filmes para 14 anos");
        break;
    case 14:
        console.log("Filmes para 14 anos");
        break;
    case 13:
        console.log("filmes para 12 anos");
        break;
    case 12:
        console.log("Filmes para 12 anos");
        break;
    case 11:
        console.log("Filmes para 10 anos");
        break;
    case 10:
        console.log("Filmes para 10 anos");
        break;
    default:
        console.log("Filmes para todos os públicos")
}
console.log("")





// ===== if aninhado =====
console.log("===== if aninhado =====");

if (idade >= 18) {
    console.log("Você é maior de idade");
    if (cnh) {
        console.log("Você pode dirigir.");
    }
    else {
        console.log("Você não pode dirigir");
    }
}
else {
    console.log("Você é menor de idade")
}