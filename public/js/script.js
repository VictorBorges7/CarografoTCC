// Inicio da animacao da navbar

//window.addEventListener("scroll", function(){
//    let header = this.document.querySelector('#header')
//    header.classList.toggle('rolagem', window.scrollY > 0)
//})

// Fim da animacao da navbar
// Inicio config dropdown

const botao = document.getElementById('botao-header');
const dropdown = document.getElementById('dropdownMenu');

document.getElementById("button-submit").addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "/pesquisa"
});

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

// inicio animacao seta

const botao1 = document.getElementById("botao-header");
  const btnOla = document.getElementById("btnOla");

  botao.addEventListener("click", (e) => {
    e.stopPropagation(); // Impede que o clique feche imediatamente
    btnOla.classList.toggle("ativo");
  });

  document.addEventListener("click", (e) => {
    // Fecha se o clique for fora do botão e do menu
    if (!btnOla.contains(e.target)) {
      btnOla.classList.remove("ativo");
    }
  });

  // fim animacao seta
  
  // inicio confirmacao logout 

  document.getElementById("botao-sair").addEventListener("click", function (e) {
    e.preventDefault(); // impede o link de redirecionar

    const confirmarSaida = confirm("Tem certeza que deseja sair?");
    
    if (confirmarSaida) {
      window.location.href = "Login/login.html";
    }
  });

  // fim confirmacao logout