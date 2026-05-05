// ─── Navbar: adiciona classe ao rolar ───────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── Modal: abrir e fechar ──────────────────────────────────────
const btnCarta = document.getElementById('btnCarta');
const modal = document.getElementById('modalCarta');
const btnClose = document.getElementById('modalClose');
const backdrop = document.getElementById('modalBackdrop');

function abrirCarta() {
  modal.classList.add('active');
  // Impede o scroll do site ao fundo enquanto lê a carta
  document.body.style.overflow = 'hidden';
}

function fecharCarta() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

if (btnCarta) {
  btnCarta.addEventListener('click', abrirCarta);
}
if (btnClose) {
  btnClose.addEventListener('click', fecharCarta);
}
if (backdrop) {
  backdrop.addEventListener('click', fecharCarta);
}

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    fecharCarta();
  }
});

// ─── Controle de Áudio do Background ────────────────────────────────
const videoBg = document.querySelector('.hero__bg-video');
const btnAudioToggle = document.getElementById('btnAudioToggle');
const iconMuted = document.getElementById('icon-muted');
const iconUnmuted = document.getElementById('icon-unmuted');

// Certifica-se de que o vídeo sempre carrega no mudo inicialmente
if (videoBg) {
  videoBg.muted = true;
}

if (btnAudioToggle && videoBg) {
  btnAudioToggle.addEventListener('click', () => {
    // Alterna o estado de mudo do vídeo
    videoBg.muted = !videoBg.muted;
    
    // Troca a exibição dos ícones SVG
    if (videoBg.muted) {
      iconMuted.style.display = 'block';
      iconUnmuted.style.display = 'none';
      btnAudioToggle.style.color = 'var(--color-gold)';
    } else {
      iconMuted.style.display = 'none';
      iconUnmuted.style.display = 'block';
      // Muda a cor para roxo vibrante quando o som está tocando
      btnAudioToggle.style.color = 'var(--color-purple-glow)'; 
    }
  });
}

// ─── Animação de Scroll (Intersection Observer) ─────────────────────
const fadeElements = document.querySelectorAll('.fade-in-scroll');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Caso queira que a animação aconteça apenas uma vez, descomente a linha abaixo:
      // fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => fadeObserver.observe(el));

// Adiciona a escuta de evento para o botão do footer abrir a mesma carta do Hero
const btnFooterCarta = document.getElementById('btnFooterCarta');
if (btnFooterCarta && typeof abrirCarta === 'function') {
  btnFooterCarta.addEventListener('click', abrirCarta);
}