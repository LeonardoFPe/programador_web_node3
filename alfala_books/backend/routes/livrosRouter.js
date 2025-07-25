import express from 'express';
import { getLivros, getLivro } from '../Controllers/livroController.js';
const router = express.Router();


router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST');
});

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH');
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE');
});


export default router;


