console.log('Olá, mundo!')

let pessoa = {
    nome: 'Arthur',
    telefone: '619999999',
    endereço: 'Luziânia - GO'
};

console.log(pessoa)

function alterarNome(pessoa){
    if(pessoa.nome == 'Arthur') {
        pessoa.nome = 'Dias'
    }
}

alterarNome(pessoa)
console.log(pessoa)
