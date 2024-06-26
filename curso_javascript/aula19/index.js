// Tipos de dados primitivos: 
// String, number, undefined, null, boolean, symbol
let nome; // undefined -> não aponta para lugar nenhum na memória
let nomeNulo = null; // nulo -> não aponta para lugar nenhum na memória -> falar explicitamente quando precisar
console.log(typeof nomeNulo, nomeNulo)
const booleano = true; // false
console.log(typeof booleano, booleano)

let c = 1;
let d = c;
console.log(c, d)
c = 2;
console.log(c, d)

// Tipos de dados passados por referencia: 
// Array, dict
const a = [1, 2];
const b = a; // apontam no mesmo local da memória
console.log(a, b, a==b);
b.push(3)
console.log(typeof b, a, b);

// NaN Not a number -> problema em operações -> ex. tipos

const num1 = 5;
const num2 = parseInt('10');
const num3 = Number('12');
console.log(num1+num2+num3, typeof num2)