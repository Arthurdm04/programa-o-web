const express = require('express')
const calc = require ('./util/calculadora')
const app = express()


app.get('/', (req, res) =>{
    let html = '<h1>app_calculadora</h1>'
    html += '<h3>Rotas disponiveis</h3>'
    html += '<p>/somar/:a/:b (<a href ="/somar/2/3">somar/2/3</a>)</p>'
    html += '<p>/subtrair/:a/:b (<a href ="/subtrair/2/3">subtrair/2/3</a>)</p>'
    html += '<p>/multiplicar/:a/:b (<a href ="/multiplicar/2/3">multilicar/2/3</a>)</p>'
    html += '<p>/dividir/:a/:b (<a href ="/dividir/2/3">dividir/2/3</a>)</p>'
    res.send(html)
})

app.get('/somar/:a/:b', (req,res)=>{
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let resultado = calc.somar(a,b)
    if(isNaN(resultado)){
        res.send('Não foi possível calcular')
    }
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`)
})

app.get('/subtrair/:a/:b', (req,res)=>{
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let resultado = calc.subtrair(a,b)
    if(isNaN(resultado)){
        res.send('Não foi possível calcular')
    }
    res.send(`${a} - ${b} = ${calc.subtrair(a,b)}`)
})

app.get('/multiplicar/:a/:b', (req,res)=>{
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let resultado = calc.multiplicar(a,b)
    if(isNaN(resultado)){
        res.send('Não foi possível calcular')
    }
    res.send(`${a} * ${b} = ${calc.multiplicar(a,b)}`)
})

app.get('/dividir/:a/:b', (req,res)=>{
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let resultado = calc.dividir(a,b)
    if(isNaN(resultado)){
        res.send('Não foi possível calcular')
    }
    res.send(`${a} / ${b} = ${calc.dividir(a,b)}`)
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT)
})