var assert = require('assert');

var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function exibir(end) {
    return 'O usuário mora em '+ end.cidade +' / '+ end.uf +', no bairro '
            + end.bairro +', na rua "'+ end.rua +'" com nº '+ end.numero +'.';
}

assert(
    exibir(endereco) === 'O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.',
    "Retorno diferente."
);
