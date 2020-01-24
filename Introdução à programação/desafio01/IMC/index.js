//Cálculo de IMC.
//SE o IMC maior ou igual a 30: ... você está acima do peso;
//SE o IMC menor que 29.9: ... você não está acima do peso;

const nome = 'Gustavo';
const peso = 88;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc >= 30){
  console.log(`${nome} seu IMC é: ${imc.toFixed(2)}, portando você está ACIMA DO PESO`);
} else {
  console.log(`${nome} seu IMC é: ${imc.toFixed(2)}, portanto você NÃO ESTÁ ACIMA DO PESO`)
}