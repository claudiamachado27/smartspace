// // Toggle menu for mobile 
function toggleMenu() {
    // 1Encontra o elemento do menu de navegação
    const navMenu = document.querySelector('.nav-menu');
    // Adiciona ou remove a classe 'active'
    // A classe 'active' é a responsável por mudar o 'display: none' para 'display: flex' (ou 'block') no CSS
    navMenu.classList.toggle('active');
}

// Fechar o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});