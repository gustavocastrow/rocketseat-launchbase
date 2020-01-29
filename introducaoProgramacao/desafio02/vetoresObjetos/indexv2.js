const programador = {
  nome: 'Carlos',
  idade: 32,
  techs: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' },
  ]
}

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos
            e usa a tecnologia ${programador.techs[0].nome} com especialidade em ${programador.techs[0].especialidade}`)