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
    nota: 3.8
  },
  {
    nome: 'Denis',
    nota: 2.2,
  },
  {
    nome: 'Rafael',
    nota: 3.2
  },
  {
    nome: 'Joao',
    nota: 1.0
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota
    
  }
  const media = soma / alunos.length
  return media 
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)



function enviaMensagem(media, turma){
  if(media > 5) {
    console.log(`A média da ${turma} foi de ${media}. Parábens`)
  }else {
    console.log(`A média da ${turma} é de ${media} menor que 5`)
  }
  
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')