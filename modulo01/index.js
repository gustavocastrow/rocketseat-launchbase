// Criar um programa que calcula a média das notas entre os alunos e envia 
// mensagem do calculo  da média
// se a média for > 5, parabenizar a turma

const aluno01 = "Gustavo";
const notaAluno01 = 1.8;

const aluno02 = "Diego";
const notaAluno02 = 10;

const aluno03 = "Rafael";
const notaAluno03 = 2;


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

if (media > 5) {
  console.log(`A nota foi de ${media}. Parabéns!!`)
} else {
  console.log('A média é menor que 5')
}

