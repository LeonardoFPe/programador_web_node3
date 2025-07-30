import express from 'express'
import routerLivros from './routes/livroRoutes.js'

const app = express()
app.use(express.json())

const port = 6000


// Montagem da rota livro 
app.use('/lojalivros', routerLivros);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})