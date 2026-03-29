const paineis = document.querySelectorAll('.imagem-painel');
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

let indiceAtual = 0;

function mostrarPainel(indice) {
    paineis.forEach(painel => painel.classList.remove('mostrar'));
    paineis[indice].classList.add('mostrar');
}

btnAvancar.addEventListener('click', function(e) {
    e.preventDefault();
    indiceAtual = (indiceAtual + 1) % paineis.length; // volta ao início ao chegar no fim
    mostrarPainel(indiceAtual);
});

btnVoltar.addEventListener('click', function(e) {
    e.preventDefault();
    indiceAtual = (indiceAtual - 1 + paineis.length) % paineis.length; // vai ao fim ao chegar no início
    mostrarPainel(indiceAtual);
});