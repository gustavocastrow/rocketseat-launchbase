
const alunosDaTurmaA = [
  {
    nome: "Gustavo",
    nota: 9.8,
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const alunosDaTurmaB = [
  {
    nome: "Clayton",
    nota: 5.8
  },
  {
    nome: "Dimas",
    nota: 10
  },
  {
    nome: "Mara",
    nota: 2
  },
  {
    nome: "Novo Aluno",
    nota: 5
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  console.log(soma);

  const media = soma / alunos.length;
  return media
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media da  ${turma} foi de ${media}. Parabens`)
  } else {
    console.log(`A media da  ${turma} foi de ${media} é menor que 5`)
  }
}

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
}

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} esta reprovado`)
  }
}

function alunosReprovados(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

enviaMensagem(media1, 'turma A');
enviaMensagem(media2, 'turma B');

alunosReprovados(alunosDaTurmaA);
alunosReprovados(alunosDaTurmaB);





