//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//          Rua: Rua Guilherme Gembala
//          Número: 260


const empresa = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereço: {
    rua: 'Rua Guilherme Gembala',
    numero: 260
  }
}


// "A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260"
console.log(`A empresa ${empresa.nome} com a cor predominante ${empresa.cor} com foco em ${empresa.foco}
está localizada em ${empresa.endereço.rua} número ${empresa.endereço.numero}`)