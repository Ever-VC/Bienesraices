document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    darkMode();
});

function darkMode() {
    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode') ;
    });
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.navegacion a');

    // Toggle mobile menu
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar'); // Si existe, lo quita; si no, lo añade
}