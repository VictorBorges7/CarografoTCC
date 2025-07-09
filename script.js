// Inicio da animacao da navbar

//window.addEventListener("scroll", function(){
//    let header = this.document.querySelector('#header')
//    header.classList.toggle('rolagem', window.scrollY > 0)
//})

// Fim da animacao da navbar
// Inicio config dropdown

const botao = document.getElementById('botao-header');
const dropdown = document.getElementById('dropdownMenu');

botao.addEventListener('click', (e) => {
e.stopPropagation(); // Evita que clique no botão feche o menu
    dropdown.classList.toggle('show');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('show'); // Fecha se clicar fora
})

// fim config dropdown

// config para a barra de pesquisa nao dar conflito com a navbar

window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
    const banner = document.querySelector(".banner");
    const headerHeight = header.offsetHeight;
    banner.style.paddingTop = headerHeight + "px";
});

// fim da parte de config para a barra de pesquisa nao dar conflito com a navbar