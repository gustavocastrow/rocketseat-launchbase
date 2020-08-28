// Criar um programa que calcula a média entre os alunos e envia
// mensgame do calculo da média.

const aluno01 = "Mayk";
const notaAluno01 = 1.8;

const aluno02 = "Diego";
const notaAluno02 = 10;

const aluno03 = "Fulano";
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

// Se a media for maior que 5 parabenizar a turma.
if (media > 5) {
  console.log(`A nota foi de ${media}, parabens!`);
} else {
  console.log("A media é menor que 5");
}
console.log(media);
