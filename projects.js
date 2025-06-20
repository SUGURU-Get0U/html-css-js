// Funcionalidade das abas
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Remove active de todos os botões e conteúdos
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Adiciona active ao botão clicado e conteúdo correspondente
    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

// Salva a aba ativa
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeTab = button.getAttribute("data-tab");
    localStorage.setItem("activeTab", activeTab);
  });
});

// Restaura a aba ativa
const savedTab = localStorage.getItem("activeTab");
if (savedTab) {
  const targetButton = document.querySelector(`[data-tab="${savedTab}"]`);
  if (targetButton) {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    targetButton.classList.add("active");
    document.getElementById(savedTab).classList.add("active");
  }
}
