// Reduce reduz array em um único elemento
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     return acumulador
// }, valor_inicial);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    return acumulador + valor;
}, 0);
console.log(total);

const pares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0 ){ acumulador.push(valor); }
    return acumulador;
}, []);
console.log(pares);

const dobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

const pessoas = [
    { nome: "Marcelo", idade: 34 },
    { nome: "Maria", idade: 25 }, 
    { nome: "Eduardo", idade: 55 }, 
    { nome: "Letícia", idade: 19 }, 
]
const pessoaMaisVelha = pessoas.reduce(function(acumulador, obj){
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
});
console.log(pessoaMaisVelha);

const somaNumerosParesDobrados = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, obj) => acumulador + obj, 0);
console.log(somaNumerosParesDobrados);