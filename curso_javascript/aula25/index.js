const nome = prompt('Digite seu nome completo:');
window.document.body.innerHTML += `Seu nome é ${nome}<br/>`;
window.document.body.innerHTML += `Seu nome tem ${nome.length}<br/>`;
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome.slice(1, 2)}<br/>`;
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)}<br/>`;
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br/>`;
window.document.body.innerHTML += `Qual o primeiro índice da letra a do seu nome? ${nome.indexOf('a')}<br/>`;
window.document.body.innerHTML += `Qual o último índice da letra a do seu nome? ${nome.lastIndexOf('a')}<br/>`;
window.document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3)}<br/>`;
window.document.body.innerHTML += `As palavras do seu nome são:  ${nome.split(' ')}<br/>`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br/>`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br/>`;
