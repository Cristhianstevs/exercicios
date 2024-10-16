/*

Laços de Repetição

    - for
    - while
    - do...while
    - for...in
    - for...of

*/

// ===== for =====
console.log("===== for =====");

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log()





// ===== while =====
console.log("===== while =====");

let i1 = 0
while (i1 < 5) {
  console.log(i1);  // Saída: 0, 1, 2, 3, 4
  i1++;
}
console.log()





// ===== do...while =====
console.log("===== do...while =====");

let i2 = 0;
do {
  console.log(i2);  // Saída: 0, 1, 2, 3, 4
  i2++;
} while (i2 < 5);
console.log()





// ===== for...in =====
console.log("===== for...in =====");

const pessoa = { nome: 'João', idade: 30 };
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
console.log()





// ===== for...of =====
console.log("===== for...of =====");

const numeros = [10, 20, 30];
for (let num of numeros) {
  console.log(num);  // Saída: 10, 20, 30
}