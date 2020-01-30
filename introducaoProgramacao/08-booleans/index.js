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
  },
  {
    nome: 'Vito',
    nota: 2
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
  },
  {
    nome: 'Ana',
    nota: 0
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota

  }

  const media = soma / alunos.length;
  return media

}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);


function enviaMensagem(media, turma) {

  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns!!`)
  } else {
    console.log(`A média da turma ${turma} foi de ${media}, portanto REPROVADO!!!`)
  }

}

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');


// Marcar aluno como reprovado se a nota for menor que 5, e enviar uma mensagem


function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true
  }

}

function enviaMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviaMensagemReprovado(aluno);
  }
 
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);