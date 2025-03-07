let num1 = 15
let num2 = 7

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(num1, num2, resultado, op){
    console.log(`A ${op} entre ${num1} e ${num2} é igual a ${resultado.toFixed(2)}`)
}
let add = num1+num2;
let sub = num1-num2;
let mult = num1*num2;
let div = num1/num2;

imprimirResultado(num1, num2, add, operacoes[0])
imprimirResultado(num1, num2, sub, operacoes[1])
imprimirResultado(num1, num2, mult, operacoes[2])
imprimirResultado(num1, num2, div, operacoes[3])



//Matrizes
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [true, false, null, undefined],
];


function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linhaMatriz = ""
        for(let j = 0; j < A[i].length; j++){
           linhaMatriz += A[i][j] + "\t"
        }
        console.log(linhaMatriz)
    }
}

imprimirMatriz(matriz)



//Objetos
let capitais = {
    DF: "Brasília",
    DDD_DF : 61,
    SP: "São Paulo",
    DDD_SP : 11,
    RJ: "Rio de Janeiro",
    DDD_RJ : 21
}

for (const key in capitais) {
   //console.log(key + " - " + capitais[key])
}

//console.log(capitais.DF + " - " + capitais.DDD_DF) //Você seleciona o que quer mostrar 

function verificaNumPar(n){
    if(n % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaNumPar(3))
console.log(verificaNumPar(6))
