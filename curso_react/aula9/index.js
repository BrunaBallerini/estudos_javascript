function funcaoParaContrutor() {
    console.log("Função separada.");
    console.log(this);
}

class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        funcaoParaContrutor();
    }
    // Metodo de instancia
    aumentarVolume() {
        this.volume += 5;
    }

    diminuirVolume() {
        this.volume -= 5;
    }

    // Metodo estático -> referente à classe
    static trocaPilha() {
        console.log("Trocar pilha de todos os controles.");
        console.log(this);
    }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();
console.log(Math.random());
