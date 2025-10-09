// Funcionalidade do modo escuro
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// Função para atualizar o ícone do tema
function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.textContent = "☀️";
  } else {
    themeIcon.textContent = "🌙";
  }
}

// Event listener para o toggle do tema
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// Detecta preferência do sistema
if (!savedTheme) {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    body.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  }
}
