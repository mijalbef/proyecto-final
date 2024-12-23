document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navbarNav = document.getElementById('navbarNav');

    hamburgerButton.addEventListener('click', function () {
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        navbarNav.classList.toggle('show'); // Agrega o quita la clase 'show'
    });
});
