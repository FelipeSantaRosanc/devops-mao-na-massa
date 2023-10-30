let minhadiv = document.getElementById("testeDOM");
let botao2 = document.getElementById("botao2");

function aterarValor(){
    console.log('funciton')
    const nomeUsuarioVindoDoInput = document.getElementById("nome")
    minhadiv.textContent = nomeUsuarioVindoDoInput;
    minhadiv.style.color = 'white'; 
}

botao2.addEventListener('cliock', (e) =>{
    e.preventDefault();
    alterarValor();
})

const multiplicarPorDois = function(numero){
    return numero = 2;
}

console.log(multiplicarPorDois(5));

let meuNome = "caelum"

console.log(meuNome)
console.log(meuNome.length)

let meuNome2 = meuNome.replace('lum', 'tano');
console.log(meuNome2);

let meuNumero = "2";
let OutroNumero = meuNumero + 1;
console.log(meuNumero)
console.log(OutroNumero)