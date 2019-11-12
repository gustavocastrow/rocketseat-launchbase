//Operadores Logicos
//São tipicamentes usados com valores booleanos (true/false);
//Nos ajudam a criar expressoes logicas a partir de dois ou mais valores

// && = "E", compara dois booleanos e retornar verdadeiro caso AS DUAS
//           expressões sejam verdadeiras

// || = "OU", vai comprar dois booleanos e retornar verdadeuri caso UMA DAS DUAS
//            expressões sejam verdadeira

// ! = "NÃO", vai negar uma expressão.

const a = 5;
const b = "5";

console.log( a == b && a !== b); //true
console.log( a == b && a != b); //false

console.log( a == b || a !== b); //true
console.log( a == b || a != b);  //true
console.log( a != b || a === b); //false

console.log( !(a == b || a !=b) ) //false;
console.log( !true)                //false


