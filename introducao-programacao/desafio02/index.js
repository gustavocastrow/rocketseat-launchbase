// DESAFIO 01.

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programacao",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// DESAFIO 02:

const programador = {
  nome: "Gustavo",
  idade: 24,
  techs: [
    {
      nome: 'C++',
      especialidade: 'Desktop'
    },
    {
      nome: 'Python',
      especialidade: 'Data Science'
    },
    {
      nome: 'JavaScript',
      especialidade: 'Web/Mobile'
    }
  ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos, e usa
            ${programador.techs[0].nome} com especialidade em ${programador.techs[0].especialidade}`);