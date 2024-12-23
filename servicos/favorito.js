const fs = require("fs");

function getTodosFavoritos () {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));

    const livrosFiltrado = livros.filter(livro => livro.id !== id);
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrado)) 
}

function inseriFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    
    const livroInserido = livros.find(livro => livro.id === id);

    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavorito,
    inseriFavorito
}