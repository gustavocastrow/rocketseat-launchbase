// Criar um programa que calcula a média das turmas de alunos e envia mensagem do
// calculo da média

const alunosDaTurmaA = [
  {
    nome: 'Gustavo',
    nota: 7.2
  },
  {
    nome: 'Pedro',
    nota: 5
  },
  {
    nome: 'Mayk',
    nota: 10
  }
]

const alunosDaTurmaB = [
  {
    nome: 'Marcela',
    nota: 6
  },
  {
    nome: 'Fernanda',
    nota: 2
  },
  {
    nome: 'Julia',
    nota: 3
  }
]

function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);


function enviaMensagem(media, turma){
  
  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns!!`)
  } else {
    console.log(`A média da turma ${turma} foi de ${media}, portanto REPROVADO!!!`)
  }

}

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');
