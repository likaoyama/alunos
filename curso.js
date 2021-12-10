const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeDoCurso: 'cursoGeral',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaAlunos: [
        estudantes.lika,
        estudantes.amanda,
        estudantes.felipe
    ],
    novoAluno: function(nome, nota, faltas) {
        this.listaAlunos.push(
            new aluno.constructor(nome, nota, faltas));
        },
    aprovados: function() {
        if (curso.notaAprovacao > aluno.notaAprovacao && quantidadeDeFaltas < aluno.faltasMaximas) {
            console.log('Aprovado');
        } else if (quantidadeDeFaltas = aluno.faltasMaximas && curso.notaAprovacao >= aluno.notaAprovacao*1.1) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado');
        }
    },

    listaAprovados: function() {
        let listaAprovados = [];
        this.listaAlunos.forEach(aluno => {
            listaAprovados.push(this.aprovados(aluno));
        });
        return listaAprovados;
    }
}

curso.novoAluno('João', 8, [5,8,10]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});

console.log(aprovados)