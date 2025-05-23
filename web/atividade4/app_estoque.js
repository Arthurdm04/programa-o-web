const express = require('express')
const estoque = require('./estoque') // Importando as funções que estão em 'estoque'
const app = express()

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>'
    html += '<h3>Rotas disponiveis:</h3>'
    html += '<p>/adicionar/:id/:nome/:qtd</p>'
    html += '<p>/listar</p>'
    html += '<p>/remover/:id</p>'
    html += '<p>/editar/:id/:qtd</p>'
    res.send(html)
})

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
let item = {
    id: Number(req.params.id),
    nome: req.params.nome,
    qtd: Number(req.params.qtd)
}

res.send(estoque.adicionar(item))

})


app.get('/listar', (req, res)=>{
    res.send(estoque.listar())
    
})

app.get('/remover/:id', (req, res)=>{
    
})

app.get('/editar/:id/:qtd', (req, res)=>{
    
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT)
})