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
