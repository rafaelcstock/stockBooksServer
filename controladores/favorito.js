const { getTodosFavoritos, inseriFavorito, deletaFavorito } = require("../servicos/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id

        inseriFavorito(id)
        res.status(201)
        res.send("Livro Favoritado com sucesso")

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaFavorito(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422);
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
