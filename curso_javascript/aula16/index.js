const nome = 'Bruna';
const sobrenome = 'Ballerini';
const idade = 35;
const peso = 103;
const altura = 1.68;
let indiceMassaCorporal
let anoNascimento

indiceMassaCorporal = peso/(altura*altura)
anoNascimento = 2024 - idade
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'm e seu IMC é', indiceMassaCorporal )
console.log(nome + ' nasceu em '+ anoNascimento)
console.log()

let texto = nome+' '+sobrenome+' tem '+' '+idade+ ' anos, pesa '+peso+' kg tem '+altura+' m e seu IMC é '+indiceMassaCorporal 
console.log(typeof(texto))
console.log()

// template string
console.log(`${nome}, ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura}m e seu IMC é ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}`)