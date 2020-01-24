// Operadores relacionais:
// > : Maior que
// < : Menor que
// >=: Maior igual a
// <=: Menor igual a

const a = 5;
const b = 6;

console.log(a > b); // False
console.log(a < b); // True
console.log(a >=b); // False
console.log(a <=b); // True


// Operadores de igualdade:
// == : Igual a
// != : Diferente de
// ===: Igual e do mesmo tipo
// !==: Diferente inclusive do tipo

const c = 8; // Number
const d = '8'; // String

console.log(c == d); // True
console.log(c != d); // False
console.log(c === d); // False
console.log(c !== d); // True


// Operadores lógicos (são tipicamentes usados com booleans):
// &&: "E", vai comprar dois booleans e retornar VERDADEIRO caso AS DUAS expressões sejam verdadeiras
// ||: "Ou", vai comprar dois booleans e retornar VERDADEIRO caso UMA DAS DUAS expressões sejam verdadeiras
// ! : "Não", vai NEGAR uma expressão

const e = 9;
const f = '9';

console.log(e == f && e !== f); // True
console.log(e == f && e != f); // False

console.log(e == f || e !== f); // True
console.log(e == f || e != f); // True
console.log(e != f || e === f); // False

console.log( !(e == f || e != f)) // False


// Operadores Aritméticos: 
// * : Multiplicação
// / : Divisão
// % : Resto da divisão
// + : Adição
// - : Subtração