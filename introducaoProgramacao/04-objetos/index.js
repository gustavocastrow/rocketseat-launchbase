//Crie um programa que calcuka a média das notas entre os alunos e envia
//mensagem do cálculo da média.


const aluno01 = {
  nome: "Mayk",
  nota: 9.8
}

const aluno02 = {
  nome: "Diego",
  nota: 10
}

const aluno03 = {
  nome: "Fulano",
  nota: 2
}



const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

//Se a média for maior que 5, parabenizar a turma

if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns!`)
} else {
  console.log(`A média foi menor que 5`)
}