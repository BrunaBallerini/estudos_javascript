let num1 = 10;
let num2 = 2.5561145;

console.log(Number.isInteger(num1))
console.log(Number.isInteger(num2))
console.log(num1.toString()+num2)
num1 = num1.toString(2) // representação binária
console.log(num1, typeof num1)
console.log(num2.toFixed(2)) // arredondamento com duas casas