const pessoa = {
    nome: "Bruna", 
    sobrenome: "Ballerini", 
    idade: 34, 
    endereco: {
        rua: "Av. Brasil", 
        numero: 320,
    }
}

const nome = pessoa.nome;
console.log(nome);

const { sobrenome = "Vazio", idade } = pessoa;
console.log(sobrenome, idade);

const { endereco: { rua: r, numero } } = pessoa;
console.log(numero, r);