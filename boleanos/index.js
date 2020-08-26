//Criar um programa que calcula a media das turmas de alunos e envia mensagem do calculo da media.

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
  //return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
  //return (alunosDaTurmaX[0].nota + alunosDaTurmaX[1].nota + alunosDaTurmaX[2].nota);j
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

enviaMensagem(media1, 'turma A');
enviaMensagem(media2, 'turma B');

// Marcar aluno como reprovado se a nota for menor que 5
// e enviar como mensagem

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

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);





