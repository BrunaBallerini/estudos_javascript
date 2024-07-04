// function espera(msg, tempo) {
//     setTimeout(function() {
//         console.log(msg);
//     }, tempo);
// }
// espera("FRASE 1", 1000);

function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return (Math.floor(Math.random() * (max - min) + min));
}

// function espera(msg, tempo, func) {
//     setTimeout(() => { console.log(msg);
//         if (func) func()
//      }, tempo);
// }

// espera("FRASE 1", tempoAleatorio(1, 5), espera(
//     "FRASE 2", tempoAleatorio(1, 5), espera(
//         "FRASE 3", tempoAleatorio(1, 5)
//     )));


function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new Error("Bad Value"))
        setTimeout(() => { 
            resolve(msg);
        }, tempo);
    });
}

espera("Conexão com BD", tempoAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera("Buscando dados no BD", tempoAleatorio(1, 3))
    })
    .then(resposta2 => {
        console.log(resposta2);
        // return espera("Tratando dados", tempoAleatorio(1, 3))
        return espera(21651, tempoAleatorio(1, 3))
    })
    .then(resposta3 => {
        console.log(resposta3);
    })
    .then(() => {
        console.log("Exibe dados na tela");
    })
    .catch(e => {
        console.log(e);
    });

console.log("Código exibido antes da Promise");