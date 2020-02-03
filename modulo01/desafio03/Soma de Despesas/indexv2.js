const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]


//Percorra o array de usuários
for(let usuario of usuarios){
  let saldo = calculaSaldo(usuario.receitas, usuario.despesas)
  if(saldo >= 0){
    console.log(`${usuario.nome}, possui saldo POSITIVO de R$ ${saldo}`)

  } else {
    console.log(`${usuario.nome}, possui saldo NEGATIVO de R$ ${saldo}`)
  }
} 
// e para cada usuário chame uma função chamada calculaSaldo que recebe como 
//parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas){
  
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);

  return somaReceitas - somaDespesas
}

//Crie uma segunda função que recebe como parâmetro um array de números e 
//retorna a soma deles e use-a para calcular a soma de receitas e despesas 
//dentro da função calculaSaldo:

function somaNumeros(numeros){

  //soma todos os numeros dentro de um array

  let soma = 0;
  for(let numero of numeros){
    soma = soma + numero
  }

  return soma
}