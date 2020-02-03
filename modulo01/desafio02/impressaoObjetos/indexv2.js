const empresa = 
  {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
      rua: 'Guilherme Gembala',
      numero: 260
    }
  }

  console.log(`A ${empresa.nome} com a cor predominante ${empresa.cor}
              com foco em ${empresa.foco} está localizada na rua:
              ${empresa.endereco.rua}, número ${empresa.endereco.numero}`)