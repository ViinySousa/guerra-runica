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

btnCarta.addEventListener('click', abrirCarta);
btnClose.addEventListener('click', fecharCarta);
backdrop.addEventListener('click', fecharCarta);

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
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