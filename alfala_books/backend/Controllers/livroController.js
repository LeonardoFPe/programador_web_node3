
import { getTodosLivros, getLivroPorId } from '../Services/livroServices.js';

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
        res.send('Lista de livros');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) =>{
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}