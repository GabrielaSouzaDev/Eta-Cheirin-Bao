const botao = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.navegacao');
const itensMenu = document.querySelectorAll('.item');

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {
        botao.textContent = '✕';
    } else {
        botao.textContent = '☰';
    }
});

itensMenu.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('ativo');
        botao.textContent = '☰';
    });
});