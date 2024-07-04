// Promise.all Promise.race Promise.resolve Promise.reject

function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return (Math.floor(Math.random() * (max - min) + min));
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new Error("Bad Value"))
        setTimeout(() => { 
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

const promises = [
    // "Primeiro valor", 
    espera("Promise 1", 3000),
    espera("Promise 2", 500),
    espera("Promise 3", 1000),
    // "Quinto valor"
]

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function (erro) {
    console.log(erro);
})

console.log("__________________________");

Promise.race(promises)
.then(valor => { console.log(valor); })
.catch(e => { console.log(e); })

function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.resolve("Página em cache");
    } else {
        return espera("Baixando a página", 1000);
    }
}

baixaPagina()
.then(resultado => { console.log(resultado); })
.catch(e => { console.log(e); })

function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.reject("Página com erro");
    } else {
        return espera("Baixando a página", 1000);
    }
}

baixaPagina()
.then(resultado => { console.log(resultado); })
.catch(e => { console.log('Erro: ' + e); })