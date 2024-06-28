// Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos que o array original
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function callBackFilter(valor, indice, array) {
//     if(valor > 10){
//         return true;
//     } else {
//         return false;
//     }
// }
// function callBackFilter(valor) {
//     return valor > 10;
// }
// numerosMaiores_10 = numeros.filter(callBackFilter);
// numerosMaiores_10 = numeros.filter(function(valor) {
//     return valor > 10;    
// });
// numerosMaiores_10 = numeros.filter(valor => {
//     return valor > 10;    
// });
// console.log(numerosMaiores_10);
numerosMaiores_10 = numeros.filter(valor => valor > 10);
console.log(numerosMaiores_10);

const pessoas = [
    { nome: "Marcelo", idade: 34 },
    { nome: "Maria", idade: 25 }, 
    { nome: "Eduardo", idade: 55 }, 
    { nome: "Letícia", idade: 19 }, 
];
// function callBackFilter(obj, indice, arrar) {
//     if (obj.nome.length >= 7) {
//         return obj.nome;
//     }    
// }
// const pessoasComNomesGrandes = pessoas.filter(callBackFilter);
// console.log(pessoasComNomesGrandes)
// const pessoasComNomesGrandes = pessoas.filter(function(obj, indice, arrar) {
//     return obj.nome.length >= 7;
// });
const pessoasComNomesGrandes = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pessoasComNomesGrandes)

const pessoasComMais50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMais50);

const pessoasNomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasNomeTerminaComA);