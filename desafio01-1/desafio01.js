// Cálculo de IMC.

/* Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma 
pessoa, por exemplo:

const nome = 'Carlos'
const peso = 84
const altura = 1.88

A partir desses dados armazene em uma constante chamada imc o cálculo do índice
 de massa corporal definido pela fórmula abaixo:

peso / (altura * altura)
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso; */


const nome = 'Gustavo';
const peso = 18;
const altura = 1.80;

const imc = peso / (altura * altura);
console.log(`O teu IMC é ${imc}`);
 
if (imc >= 30) {
  console.log(`${nome}, você está acima do peso!`)
} else {
  (imc < 29.9) 
  console.log(`${nome}, você não esta acima do peso`)
} 
  
