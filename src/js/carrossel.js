const paineis = document.querySelectorAll('.imagem-painel');
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');
const container = document.querySelector('.paineis'); // ← nome diferente

let indiceAtual = 0;

function mostrarPainel(indice) {
    paineis.forEach(painel => painel.classList.remove('mostrar'));
    paineis[indice].classList.add('mostrar');
}

btnAvancar.addEventListener('click', function(e) {
    e.preventDefault();
    indiceAtual = (indiceAtual + 1) % paineis.length;
    mostrarPainel(indiceAtual);
});

btnVoltar.addEventListener('click', function(e) {
    e.preventDefault();
    indiceAtual = (indiceAtual - 1 + paineis.length) % paineis.length;
    mostrarPainel(indiceAtual);
});

// ← Chama a função diretamente, sem depender do click do botão
function avancarAutomatico() {
    indiceAtual = (indiceAtual + 1) % paineis.length;
    mostrarPainel(indiceAtual);
}

let intervalo = setInterval(avancarAutomatico, 2000);

container.addEventListener('mouseenter', () => clearInterval(intervalo));
container.addEventListener('mouseleave', () => {
    intervalo = setInterval(avancarAutomatico, 2000);
});