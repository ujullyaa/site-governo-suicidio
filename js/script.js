// Menu responsivo
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

// Botão de alto contraste (acessibilidade)
const contrasteBtn = document.getElementById("contraste-btn");

contrasteBtn.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
  contrasteBtn.textContent = document.body.classList.contains("alto-contraste") ? "Modo Normal" : "Alto Contraste";
});

// Mensagem de inicialização
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site governamental de prevenção carregado com sucesso!");
});
