// =============================================
// PORTFÓLIO ERIK GOMES - SCRIPT PRINCIPAL
// =============================================

// Seletores principais
const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-nav-list a");
const header = document.querySelector("header");

// =============================================
// MENU MOBILE
// =============================================
mobileBtn.addEventListener("click", () => {
  // Alterna o menu
  mobileMenu.classList.toggle("active");

  // Muda o ícone (menu <-> fechar)
  const icon = mobileBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  // Se o menu estiver ativo, empurra o conteúdo para baixo
  if (mobileMenu.classList.contains("active")) {
    header.style.marginBottom = `${mobileMenu.scrollHeight}px`;
  } else {
    header.style.marginBottom = "0";
  }
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    const icon = mobileBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
    header.style.marginBottom = "0";
  });
});

// =============================================
// SCROLL SUAVE ENTRE SEÇÕES
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = header.offsetHeight;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// =============================================
// BOTÃO "VOLTAR AO TOPO"
// =============================================
const scrollUpBtn = document.createElement("button");
scrollUpBtn.id = "scroll-up";
scrollUpBtn.innerHTML = "↑";
document.body.appendChild(scrollUpBtn);

// Estilo direto via JS
Object.assign(scrollUpBtn.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  padding: "10px 14px",
  fontSize: "1.2rem",
  background: "#00b4ff",
  color: "#111",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 0 10px rgba(0, 180, 255, 0.5)",
  transition: "opacity 0.3s ease",
  opacity: "0",
  zIndex: "999"
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollUpBtn.style.opacity = window.scrollY > 500 ? "1" : "0";
});

// =============================================
// ANIMAÇÃO DE ENTRADA SUAVE (reveal)
// =============================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

// Observe elementos com a classe "hidden"
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// =============================================
// MENSAGEM DE FORMULÁRIO (simulação de envio)
// =============================================
const form = document.querySelector(".contato-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve. 😊");
    form.reset();
  });
}
