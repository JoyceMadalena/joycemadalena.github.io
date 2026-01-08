document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".menu-toggle");
  const link = e.target.closest(".nav-links a");
  const navLinks = document.querySelector(".nav-links");

  if (toggle) {
    navLinks.classList.toggle("active");
  }

  if (link) {
    navLinks.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Selecionando elementos
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");
  const contrastBtn = document.getElementById("high-contrast-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Tamanho de fonte padrão
  let fontSize = 100;

  // Carregar preferências salvas
  const savedFontSize = localStorage.getItem("fontSize");
  if (savedFontSize) {
    fontSize = parseInt(savedFontSize);
    document.documentElement.style.fontSize = `${fontSize}%`;
  }

  if (localStorage.getItem("highContrast") === "on") {
    body.classList.add("high-contrast");
    contrastBtn.classList.add("active");
  }

  // Funções de ajuste de fonte
  increaseFontButton.addEventListener("click", () => {
    if (fontSize < 150) {
      fontSize += 10;
      document.documentElement.style.fontSize = `${fontSize}%`;
      localStorage.setItem("fontSize", fontSize);
    }
  });

  decreaseFontButton.addEventListener("click", () => {
    if (fontSize > 70) {
      fontSize -= 10;
      document.documentElement.style.fontSize = `${fontSize}%`;
      localStorage.setItem("fontSize", fontSize);
    }
  });

  // Botão de alto contraste
  contrastBtn.addEventListener("click", () => {
    body.classList.toggle("high-contrast");
    contrastBtn.classList.toggle("active");

    if (body.classList.contains("high-contrast")) {
      localStorage.setItem("highContrast", "on");
    } else {
      localStorage.removeItem("highContrast");
    }
  });
});
