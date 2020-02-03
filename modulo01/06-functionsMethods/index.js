//Criar um programa que calcula a média das turmas de alunos e envia
//mesagem do cálculo da média


const alunosDaTurmaA = [
  {
    nome: 'Gustavo',
    nota: 9.8
  },
  {
    nome: 'Diego',
    nota: 7.2,
  },
  {
    nome: 'Mayk',
    nota: 3.2
  }
]

const alunosDaTurmaB = [
  {
    nome: 'Gabriel',
    nota: 9.8
  },
  {
    nome: 'Denis',
    nota: 7.2,
  },
  {
    nome: 'Rafael',
    nota: 3.2
  }
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)



function enviaMensagem(media, turma){
  if(media > 5) {
    console.log(`A média da ${turma} foi de ${media}. Parábens`)
  }else {
    console.log(`A média da ${turma} é menor que 5`)
  }
  
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')