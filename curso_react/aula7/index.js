const array_ = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let valor of array_){
    console.log(valor);
}

array_.forEach(function(valor, indice, array){
    console.log(`${indice} - ${valor}`);
    console.log(array_[indice]);
});

array_.forEach(valor => console.log(valor));

let total = 0;
array_.forEach(valor => {
    total += valor;
});
console.log(total);

const soma = array_.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(soma);