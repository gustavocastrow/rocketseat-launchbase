const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5], //276.8
    despesas: [85.3, 13.5, 19.9]         //118.7
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

//Crie um programa que calcula a soma de RECEITAS e DESPESAS de usuários e no 
//fim retorna o saldo (receitas - despesas).

function calculaSaldo(receitas, despesas){
  return receitas - despesas;
}

//Crie uma segunda função que recebe como parâmetro um array de números e 
//retorna a soma deles e use-a para calcular a 
//soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  //Soma todos os números dentro do array "numeros"
  let soma = 0
  for(let i = 0; i<numeros.length; i++){
    soma = soma + numeros[i];
  }
   return soma;
}



for(let i = 0; i < usuarios.length; i++){
let saldo = 0;
saldo = calculaSaldo(somaNumeros(usuarios[i].receitas),somaNumeros(usuarios[i].despesas))

if(saldo > 0) 
 console.log(`${usuarios[i].nome} possui saldo POSITIVO de R$ ${(saldo).toFixed(2)}`)
else if(saldo < 0) 
console.log(`${usuarios[i].nome} possui saldo NEGATIVO de R$ ${(saldo).toFixed(2)}`)
else console.log(`${usuarios[i].nome} possui saldo ZERADO!`)
 }

