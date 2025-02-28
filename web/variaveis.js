const n = 47

console.log('n = ' + n)

//let variavel que não pode ser redeclarada dps do uso, já o var pode ser redeclarado depois
var j = 3
var j = 4                   
console.log('j = ' + j)

/*
tipo primitivos
String
Number
Boolean
Undefined
Null
*/

let nome = "Arthur"
let telefone = '61 98291830298'
/*
forma de concatenação
console.log('Meu nome e ' +nome+ ' ,meu telefone e ' +telefone)
*/

//template string
console.log(`Meu nome é ${nome}, meu telefone é ${telefone}`)


let x = 3.14
x = .5
x = 1

console.log(`X =  ${x}`)

let b = false
b = true
console.log(`b = ${b}`)


let c = 0


console.log(` ${x} + ${x} = ${x + x}`)