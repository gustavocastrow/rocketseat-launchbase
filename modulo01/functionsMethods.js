//Criar um programa que calcula a média das turmas de alunos e envia mensagem 
//do cálculo da média.

const alunosDaTurmaA = [
  {//0
    nome: "Gustavo",
    nota: 9.8

  },
  {//1
    nome: "Maria",
    nota: 10
  },
  {//2
    nome: "João",
    nota: 2
  }
]

const alunosDaTurmaB = [
  {
    nome: "Mayk",
    nota: 6.2
  },
  {
    nome: "Diego",
    nota: 2
  },
  {
    nome: "Ricardo",
    nota: 4
  }

]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
  if(media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A media da turma ${turma} foi menor que 5`);
  }
}

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');