/*
Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: 'C++', especialidade: 'Desktop' }, 
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

*/


const dadosProgramador = {
  nome: 'Gustavo',
  idade: 24,
  techs: [
    { nome: 'C++', especialidade: 'Desktop' }, //0
    { nome: 'Python', especialidade: 'Data Science' }, //1
    { nome: 'JavaScript', especialidade: 'Web/Mobile' } //2
  ]
}

console.log(`O usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa
a tecnologia ${dadosProgramador.techs[0].nome} com especialidade em ${dadosProgramador.techs[0].especialidade}`)

















