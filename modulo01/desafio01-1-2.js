const nome = 'Silvana'
const sexo = 'M'
const idade = 60
const contribuicao = 35

const regra = idade + contribuicao

//homens >= 35
//mulheres >= 30

//95 = Homens
//85 = Mulheres


if (sexo == "F" && contribuicao >= 30 && regra >= 85 ||
  sexo == "M" && contribuicao >= 35 && regra >= 90) {
  console.log(`${nome}, do sexo ${sexo} com idade de ${idade}
    com uma contribuição de ${contribuicao} e coma a regra de ${regra}
    PODE SE APOSENTAR`)
} else {
  console.log(`${nome}, do sexo ${sexo} com idade de ${idade}
    com uma contribuição de ${contribuicao} e com a a regra de ${regra}
    NÃO PODE SE APOSENTAR`)
}