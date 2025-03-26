const express = require('express')
const calc = require('./util/calculadora')

const app = express()

app.get('/', (req, res)=> {
    res.send('Olá, digite na URL o calculo que deseja fazer e em seguida os valores de a e b: somar1/2')
})

app.get('/somar/:a/:b', (req, res)=> {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const soma = calc.somar(a, b)
    res.send(soma.toString())
})

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const subtrair = calc.subtrair(a, b)
    res.send(subtrair.toString())
})

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const multiplicacao = calc.multiplicar(a, b)
    res.send(multiplicacao.toString())
})

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const divisao = calc.dividir(a, b)
    res.send(divisao.toString())
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('app rodando na port ' + PORT)
})