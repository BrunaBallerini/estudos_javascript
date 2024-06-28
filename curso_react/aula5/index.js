// Map altera os valores do array original
const nome = "Bruna";
const string = `Meu nome: ${nome}`;
console.log(string);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const numerosEmDobro = numeros.map(function(valor) {
//     return valor * 2;
// });
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numeros);

const pessoas = [
    { nome: "Marcelo", idade: 34 },
    { nome: "Maria", idade: 25 }, 
    { nome: "Eduardo", idade: 55 }, 
    { nome: "Letícia", idade: 19 }, 
]
// const nome_pessoas = pessoas.map(function(valor){
//     return valor.nome;
// });
const nome_pessoas = pessoas.map(valor => valor.nome);
console.log(nome_pessoas);

// const idades = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });
const idades = pessoas.map(obj => {
    return { idade: obj.idade };
});
console.log(idades);

// const pessoasId = pessoas.map((obj, indice) => {
//     obj.id = indice;
//     return obj;
// });
// console.log(pessoasId);
// console.log(pessoas);

const pessoasId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(pessoasId);
console.log(pessoas);