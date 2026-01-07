async function load(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

load("header", "partials/header.html");
load("hero", "partials/hero.html");
load("skills", "partials/skills.html");
load("projects", "partials/projects.html");
load("footer", "partials/footer.html");
