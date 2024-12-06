/*
- Crie um Array com os nomes de 5 cidades.
- Use métodos para adicionar, remover e exibir as cidades no console.
- Itere sobre o Array e exiba cada cidade.
*/ 

let cidades = ["Cabo Frio", "Teresópolis", "Petrópolis", "Arraial do Cabo", "Saquarema"];
cidades.push("Guapimirim");
console.log(cidades); // Adiciona Guapimirim
cidades.pop("Guapimirim");
console.log(cidades); // remove Guapimirim
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}; // Mostra todas as cidades presentes no array





/*
- Crie um Objeto representando um livro com as seguintes propriedades: título, autor e ano de publicação.
- Adicione uma nova propriedade chamada "editora".
- Use `for...in` para exibir todas as propriedades e valores do objeto no console.
*/ 

let livro = {
    título: "Harry Potter",
    autora: "J. K. Rowling",
    ano: 1997
};

livro.editora = "Rocco";
console.log(livro)

for (chave in livro) {
    console.log(`${chave}: ${livro[chave]}`)
};





/*
- Crie um Objeto chamado `playlist` com as propriedades:
    - `nome` (string)
    - `genero` (string)
    - `musicas` (array com 3 nomes de músicas)
- Adicione uma nova música ao array de músicas.
- Remova a primeira música.
- Exiba o nome da playlist e todas as músicas no console.
*/

let playlist = {
    nome: "One Direction",
    genero: "Pop Internacional",
    musicas: ["Right Now", "What a Feeling", "Wolves"]
}
playlist.musicas.push("Diana");
playlist.musicas.shift();
console.log(playlist);
console.log(playlist.nome, playlist.musicas);