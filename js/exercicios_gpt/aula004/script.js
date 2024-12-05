// Aula 4: Estrututas de Controle

// Tipos de condições
// - if e else
// - else if
// - switch case

// if e else

let idade = 17;
if (idade >= 18) {
    console.log("Maior de idade");
} 
else {
    console.log("Menor de idade");
};





// else if

let nota = 100;
if (nota >= 90) {
    console.log("Excelente!");
}
else if (nota >= 70) {
    console.log("Bom trabalho!");
}
else {
    console.log("Precisa se esforçar mais.");
};





// switch case

let mes = 1;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3: 
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
};