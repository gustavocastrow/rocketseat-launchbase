// Criar um programa que calcula a média entre os alunos e envia
// mensgame do calculo da média.

const alunos = [
  {
    nome: "Gustavo",
    nota: 9.8
  },
  {
    aluno: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const nomeDeAlunos = ["Joao", "Maria", "Pedro", "Julia"];
console.log(nomeDeAlunos);


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

// Se a media for maior que 5 parabenizar a turma.
if (media > 5) {
  console.log(`A nota foi de ${media}, parabens!`);
} else {
  console.log("A media é menor que 5");
}
console.log(media);
