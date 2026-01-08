// ===== MENU SANDUÍCHE =====
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".menu-toggle");
  const link = e.target.closest(".nav-links a");
  const navLinks = document.querySelector(".nav-links");

  if (toggle) navLinks.classList.toggle("active");
  if (link) navLinks.classList.remove("active");
});

// ===== ACESSIBILIDADE =====
document.addEventListener("click", (e) => {
  const body = document.body;
  let fontSize = parseInt(localStorage.getItem("fontSize")) || 100;

  // Aumentar fonte
  if (e.target.closest("#increase-font")) {
    if (fontSize < 150) fontSize += 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("fontSize", fontSize);
  }

  // Diminuir fonte
  if (e.target.closest("#decrease-font")) {
    if (fontSize > 70) fontSize -= 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("fontSize", fontSize);
  }

  // Contraste
  if (e.target.closest("#high-contrast-toggle")) {
    const btn = e.target.closest("#high-contrast-toggle");
    body.classList.toggle("high-contrast");
    btn.classList.toggle("active");

    if (body.classList.contains("high-contrast")) {
      localStorage.setItem("highContrast", "on");
    } else {
      localStorage.removeItem("highContrast");
    }
  }
});

// ===== CARREGAR PREFERÊNCIAS AO INICIAR =====
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const contrastBtn = document.getElementById("high-contrast-toggle");

  let fontSize = parseInt(localStorage.getItem("fontSize")) || 100;
  document.documentElement.style.fontSize = `${fontSize}%`;

  if (localStorage.getItem("highContrast") === "on") {
    body.classList.add("high-contrast");
    if (contrastBtn) contrastBtn.classList.add("active");
  }
});
