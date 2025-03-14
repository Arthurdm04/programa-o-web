function verificaNumPrimo(n){
    if(n <= 1){
        return false
    }

    if(n % 2 == 0 && n != 2){
        return false
    }
    for(let i = 3; i < n; i += 2){
        if(n % i == 0){
            return false
        }
    }
    return true
}
console.log(`verificarNumPrimo(0) = ${verificaNumPrimo(0)}`) //false
console.log(`verificarNumPrimo(1) = ${verificaNumPrimo(1) }`) //false
console.log(`verificarNumPrimo(2) = ${verificaNumPrimo(2)}`) //true
console.log(`verificarNumPrimo(3) = ${verificaNumPrimo(3)}`) //true
console.log(`verificarNumPrimo(7) = ${verificaNumPrimo(7)}`) //true
console.log(`verificarNumPrimo(83) = ${verificaNumPrimo(83)}`) //true
console.log(`verificarNumPrimo(100) = ${verificaNumPrimo(100)}`) //false
console.log(`verificarNumPrimo(991) = ${verificaNumPrimo(991)}`) //true
console.log(`verificarNumPrimo(104729) = ${verificaNumPrimo(104729)}`) //true
console.log(`verificarNumPrimo(14348907) = ${verificaNumPrimo(14348907)}`) //false
