
const colorMode = document.getElementById('color-mode');
const body = document.body; // Corrigindo o seletor para document.body

colorMode.addEventListener('change', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('white-mode');
    document.documentElement.style.setProperty('--text-color', '#343d48'); // Define a cor do texto para o modo claro
    document.documentElement.style.setProperty('--cor-primaria', 'rgb(251, 247, 244)'); // Define a cor do light-tertiary-color para o modo claro
    document.querySelector('.element-with-blur-effect').style.filter = 'none'; // Remova o efeito de desfoque no elemento específico
  } else {
    body.classList.remove('white-mode');
    body.classList.add('dark-mode');
    document.documentElement.style.setProperty('--text-color', '#ffffff'); // Define a cor do texto para o modo escuro
    document.documentElement.style.setProperty('--cor-primaria', '#222222'); // Define a cor do light-tertiary-color para o modo escuro
    document.querySelector('.element-with-blur-effect').style.filter = 'blur(4px)'; // Adicione um efeito de desfoque de 4px no elemento específico
  }
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }