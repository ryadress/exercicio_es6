const alunos = [
    {nome: 'Rafael', nota:8},
    {nome: 'Julia', nota:7},
    {nome: 'Junior', nota:6},
    {nome: 'Ryan', nota:9},
    {nome: 'Pedro', nota:6},
];

const filtrarAlunosAprovados=(alunos)=>{
    return alunos.filter(aluno=>aluno.nota>=6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);
