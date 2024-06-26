let stringA = "um \"texto\"";
let stringB = "um \\texto";
let stringC = "outro texto para estudo.";

console.log(stringA, stringB, stringA[4], stringB.charAt(8));
console.log(stringA.concat(' de algo'))
console.log(stringB.indexOf('texto')) // -1 se não encontra dado
console.log(stringB.lastIndexOf('t')) // procura de trás para frente
console.log(stringC.match(/[a-z]/))
console.log(stringC.match(/[a-z]/g)) // flag g na expressão regular
console.log(stringC.search(/[a-z]/)) // indice do que foi pedido
console.log(stringC.search(/x/))
console.log(stringA.replace("\"texto\"", 'documento'))
console.log(stringC.replace(/t/g, "#"))
console.log(stringC.length)
console.log(stringC)
console.log(stringC.slice(2, 20))
console.log(stringC.slice(-7, -1))
console.log(stringC.substring(stringC.length - 7, stringC.length - 1))
console.log(stringC.split(' '))
console.log(stringC.split(' ', 2))
console.log(stringC.toLocaleUpperCase())
console.log(stringC.toLocaleLowerCase())