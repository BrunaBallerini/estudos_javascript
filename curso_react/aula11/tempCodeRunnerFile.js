function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new Error("Bad Value"))
        setTimeout(() => { 
            resolve(msg.toUpperCase());
        }, tempo);
    });
}