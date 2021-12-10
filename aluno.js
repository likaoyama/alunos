
const aluno = {
    listaAlunos: [],
    nome: '',
    quantidadeDeFaltas: 0,
    notas: [],
    constructor: function (nome, quantidadeDeFaltas, notas) {
        this.nome = nome;
        this.quantidadeDeFaltas = quantidadeDeFaltas;
        this.notas = notas;
    },


calcularMedia: function(aluno) {
    let soma = 0;
    aluno.notas.forEach(nota => {
        soma += nota;
    });
    return soma / aluno.notas.length;
},

faltas: function(aluno) {
    return aluno.quantidadeDeFaltas + 1;
}
}

module.exports = aluno;
