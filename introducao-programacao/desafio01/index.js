// DESAFIO 01:
const nome1 = "Gustavo";
const peso = 79;
const altura = 1.88;

const imc = peso / (altura * altura);
if (imc >= 30) {
  console.log(`${nome1}, o resultado do seu IMC é ${imc}, portando você esta acima do peso`);
} else (imc < 29.9);
console.log(`${nome1}, o resultado do seu IMC é ${imc}, portando você NAO esta acima do peso`);

// DESAFIO 02:

const nome = "Joao";
const sexo = "M";
const idade = 56;
const contribuicao = 39;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

//Regra 85-95, homem -> min 95, mulher min 85

const regra = idade + contribuicao;

if (sexo === "F" && contribuicao >= 30 && regra >= 85 || sexo === 'M' && contribuicao >= 35 && regra >= 95) {
  console.log(`${nome}, com idade de ${idade}, do sexo ${sexo}, com ${contribuicao} anos de contribuicao
                totalizando ${regra} na regra, aposentadoria APROVADA`)
} else {
  console.log(`${nome}, com idade de ${idade}, do sexo ${sexo}, com ${contribuicao} anos de contribuicao
  totalizando ${regra} na regra, aposentadoria NEGADA `)
}