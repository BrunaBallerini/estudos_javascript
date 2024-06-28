// Function Hoisting
falaOi();
function falaOi() {
    console.log("Oi");
}
// Function Expression
const dado = function dado() {
    console.log("Dado");   
}
const dado_ = function() {
    console.log("Dado_");   
}
dado_()
// First-class object
function execFuncao(funcao) {
    funcao();
}
execFuncao(dado);
// Arrow Function
const funcaoArrow = () => {
    console.log("Arrow Function");
}
funcaoArrow();
// Função dentro de objeto
const obj = {
    falar: function() {
        console.log("Falar");        
    }
}
obj.falar();

const obj_ = {
    falar(){
        console.log("Falando_");
    }
}
obj_.falar();