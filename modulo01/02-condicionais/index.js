const aluno01 = 'Gustavo';
const notaAluno01 = 9.8;

const aluno02 = 'Mayk';
const notaAluno02 = 2.3;

const aluno03 = 'Pedro';
const notaAluno03 = 2.2;



const mediaAlunos = (notaAluno01 + notaAluno02 + notaAluno03) / 3;
console.log(`A média dos alunos é: ${mediaAlunos}`);


// Se a média for maior que 5 parabenizar a turma!

if (mediaAlunos > 5){
  console.log(`Parabéns, turma aprovada! a média geral da sala foi ${mediaAlunos}`);
} else {
  console.log(`Turma reprovada, a média geral da sala foi ${mediaAlunos}`)
}