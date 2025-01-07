
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navbarNav = document.getElementById('navbarNav');
});

    hamburgerButton.addEventListener('click', function () {
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        navbarNav.classList.toggle('show'); // Agrega o quita la clase 'show'
    });

    document.getElementById('hamburgerButton').addEventListener('click', function () {
        const navbarNav = document.getElementById('navbarNav');
        navbarNav.classList.toggle('show');
    });
    

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector("#hamburgerButton");
    const collapse = document.querySelector("#navbarNav");

    toggler.addEventListener("click", function () {
        collapse.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ["FRESH FRAMES", "TUS NUEVOS", "ARTISTAS FAVORITOS"],
        typeSpeed: 20,
        backSpeed: 30, 
        backDelay: 300, 
        startDelay: 500, 
        loop: false,
        showCursor: true, 
        cursorChar: "|", 
        onComplete: () => {
            // Mantener el texto completo visible
            document.getElementById("typed-text").innerHTML = `
                <span style="font-family: 'Montserrat', sans-serif;">FRESH FRAMES</span><br>
                <span style="font-family: 'Montserrat', sans-serif;">TUS NUEVOS</span><br>
                <span style="font-family: 'Montserrat', sans-serif;">ARTISTAS FAVORITOS</span>
            `;
        }
    };

    // Inicia Typed.js
    setTimeout(() => {
        new Typed("#typed-text", options);
    }, 300); 
});


// CTITULO CARROUSEL

AOS.init({
    duration: 1000, 
    easing: 'ease-in-out', 
    once: true 

});


// 3DDD

