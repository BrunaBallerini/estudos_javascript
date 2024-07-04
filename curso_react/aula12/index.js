function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return (Math.floor(Math.random() * (max - min) + min));
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (typeof msg !== "string") {
                reject("Erro!");
                return;
            }
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = espera('Fase 1', tempoAleatorio(1, 3));
        console.log(fase1);

        setTimeout(function() {
            console.log('Esta promise estava pendente', fase1);            
        }, 5000)

        const fase2 = await espera('Fase 2', tempoAleatorio(1, 2));
        console.log(fase2);

        const fase3 = await espera(3, tempoAleatorio(1, 4));
        console.log(fase3);

        console.log('Terminamos na ' + fase3);
    } catch (erro) {
        console.log('Passou por aqui: ' + erro);
    }
}

executa();
