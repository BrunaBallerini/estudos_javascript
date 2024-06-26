const numeros = [100, 200, 300, 400];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero);
console.log(segundoNumero);
console.log(resto);

const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const [ ,[ , ,seis]] = lista;
const [lista1, lista2, lista3] = lista
console.log(lista3[2]);