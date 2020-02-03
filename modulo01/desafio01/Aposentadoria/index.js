//Cálculo aposentadoria
//Baseado nos valores acima utilize as fórmulas a seguir para calcular se a 
//pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
//precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
//Com base nas regras acima imprima na tela as mensagens:
//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;


const nome = 'Gustavo';
const sexo = 'M';
const idade = 60;
const contribuicao = 35;

const soma = idade + contribuicao;



//contribuição mínimo para homens é de 35 anos + regra >= 95
//contribuição mínimo para mulheres é de 30 anos + regra >= 85

if (sexo == 'M' && contribuicao >= 35 && soma >= 95 || sexo == 'F' && contribuicao >= 30 && soma >= 85){
      console.log(`${nome} do sexo ${sexo} com idade de ${idade} anos com ${contribuicao} anos de contribuição
      com soma de ${soma} pontos,  PODE SE APOSENTAR`)
    } else {
      console.log(`${nome} do sexo ${sexo} com idade de ${idade} anos com ${contribuicao} anos de contribuição
      com soma de ${soma} pontos, NÃO PODE SE APOSENTAR`)
    }