const lig = document.getElementById ('lig');
const des = document.getElementById ('des');
const lam = document.getElementById ('lam');

//Funções da lâmpada para ligar, desligar e resetar

function resetar (){ 
    return lam.src.indexOf ('quebrada') > -1;
}

function ligar(){
    if ( !resetar() ) {
        lam.src = './img/LamAcessa.png';

    }
}

function desligar(){
    if ( !resetar() ) {   
        lam.src = './img/LamApagada.png';
    }
}

function quebrar(){
    lam.src = './img/LamQuebrada.png'
}

//Aplicação das funções com o mouse

lig.addEventListener ('click', ligar);
des.addEventListener ('click', desligar);
lam.addEventListener('mouseover', ligar); 
lam.addEventListener('mouseleave', desligar); 
lam.addEventListener('dblclick', quebrar);




 // troca de cor do fundo


 function trocarDia() {
    const tudo = document.getElementById("tudo");
    const cores = ["#fcffba"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    tudo.style.backgroundColor = corAleatoria;
}

const botaoTrocarCor = document.getElementById("lig");
botaoTrocarCor.addEventListener("click", trocarDia);


function trocarNoite() {
    const tudo = document.getElementById("tudo");
    const cor = ["#baf0ff"];
    const corAle = cor[Math.floor(Math.random() * cor.length)];
    tudo.style.backgroundColor = corAle;
}

const botaoTrocar = document.getElementById("des");
botaoTrocar.addEventListener("click", trocarNoite);


const TrocarCor = document.getElementById("lam");
TrocarCor.addEventListener("mouseover", trocarDia);


const trocaa = document.getElementById("lam");
trocaa.addEventListener("mouseleave",trocarNoite)




