// Adiciona efeito de hover nos cards
document.querySelectorAll(".details-container").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Animação de entrada quando o elemento entra na viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".details-container").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  observer.observe(card);
});

/* ABA DE CONTATOS */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simular envio do formulário
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("contactForm").reset();

    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  }, 1000);
});

// Adicionar efeitos de foco nos inputs
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.querySelector("label").style.color = "#667eea";
  });

  input.addEventListener("blur", function () {
    if (!this.value) {
      this.parentElement.querySelector("label").style.color = "#555";
    }
  });
});
