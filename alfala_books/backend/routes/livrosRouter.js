import express from 'express';
import { getLivros, getLivro, postLivro } from '../Controllers/livroController.js';
const router = express.Router();


router.post('/', postLivro);
router.get('/', getLivros);
router.get('/:id', getLivro);

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH');
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE');
});


export default router;


