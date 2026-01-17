// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Fecha o menu ao clicar em um link
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Copiar mensagens rápidas
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copiado ✅";
      setTimeout(() => (btn.textContent = "Copiar mensagem"), 1400);
    } catch {
      alert("Não consegui copiar automaticamente. Copie manualmente:\n\n" + text);
    }
  });
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
