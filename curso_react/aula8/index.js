class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){ console.log(`${this.nome} está falando.`); }
    comer(){ console.log(`${this.nome} está comendo.`); }
    beber(){ console.log(`${this.nome} está bebendo`); }
}

const p1 = new Pessoa("Bruna", "Fernandes");
p1.comer();
const p2 = new Pessoa("Marcelo", "Godde");
p2.falar();

