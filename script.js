document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const anoSpan = document.getElementById('ano');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = open 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }
});