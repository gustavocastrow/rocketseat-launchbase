/* =============================================================================
  OPERADORES DE COMPARAÇÃO

  > MAIOR
  < MENOR
  >= MAIOR IGUAL A
  <= MENOR IGUAL A
  == IGUAL A
  === IGUAL E DO MESMO TIPO
  != DIFERENTE DE
  !== DIFERENTE, INCLUSIVE DO TIPO
==============================================================================*/

console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log(5 != "5"); // false
console.log(4 !== "5"); // true

// DESAFIO 01
// -> Verificar se a pessoa é maior de 18 anos
// -> Se sim deixar entrar
// -> Se nao bloquear entrada
// -> Se a pessoa tiver 17 anos avisar para voltar quando fizer 18 anos
const pessoa = 16;

if (pessoa >= 18) {
  console.log("É maior de 18, entrada liberada");
} else if (pessoa == 17) {
  console.log("Favor voltar quando tiver 18 anos completos");
} else {
  console.log("É menor de 18, entrada barrada");
}

/* =============================================================================
  OPERADORES LÓGICOS

  && "E" -> As duas condições devem ser verdadeiras para que a condição final
            seja verdadeira.
  || "OU" -> Uma das condições deve ser verdadeira para que a condição final seja
              verdadeira
  ! "NÃO" -> Nega uma condição
==============================================================================*/

console.log(5 == 5 && 6 == 6); //true
console.log(5 == 5 && 6 != 6); //false

console.log(5 == 5 && 6 == 6); //true
console.log(5 == 5 && 6 != 6); //false

console.log(5 == 5 || 6 == 6); //true
console.log(5 == 5 || 6 != 6); //true

// DESAFIO 01  v2.
// -> Verificar se a pessoa é maior de 18 anos
// -> Se sim deixar entrar
// -> Se nao bloquear entrada
// -> Se a pessoa tiver 17 anos avisar para voltar quando fizer 18 anos

const idade = 16;

if (!(idade >= 18) || idade === 17) {
  console.log("Bloquear entrada");
} else {
  console.log("Deixar entrar");
}

/* =============================================================================
  OPERADORES ARITMÉTICOS

  * MULTIPLICACAO
  / DIVISAO
  % RESTO DA DIVISAO
  + ADICAO
  - SUBTRACAO
==============================================================================*/
