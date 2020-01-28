/* =======================================================================
 
OPERADORES DE COMPARAÇÃO

> : Maior 
< : Menor
>=: Maior igual a
<=: Menor igual a
==: Igual a
===:Igual e do mesmo tipo
!= : Diferente de
!==: Diferente, inclusive do tipo

==========================================================================*/
/* =======================================================================
 
OPERADORES LÓGICOS:

&& -> "E": As duas condições devem ser verdadeiras para que a condição final
seja verdadeira.

|| -> "OU": Uma das condições deve ser verdadeira para que a condição final
seja verdadeira.

! -> "NÃO": Nega uma condição.

==========================================================================*/

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //true

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5>6)) //true
console.log(!(5<6)) //false

//DESAFIO 01

const idade = 17

// verificar se a pessoa é maior igual a 18 anos
//se sim, deixar entrar, se não, bloquar a entrada
//se a pessoa tiver 17 avisar para voltar quando completar 18 anos.


if(!(idade >= 18) || idade === 17){
  //idade não é >=18(false) porém eu estou negando ela "!"
  //e transformando em verdadeiro 
  console.log('Bloquear entrada')
} else {
  console.log('Deixar entrar')
}