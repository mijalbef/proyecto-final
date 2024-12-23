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
        typeSpeed: 20, // Aumenta la velocidad de tipeo
        backSpeed: 30, // Velocidad al borrar
        backDelay: 300, // Retraso entre cada palabra
        startDelay: 500, // Retraso inicial de medio segundo
        loop: false, // No repetir la animación
        showCursor: true, // Mostrar el cursor durante el efecto
        cursorChar: "|", // Caracter del cursor (opcional)
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
    }, 300); // Reducción del retraso adicional para una transición más rápida
});


// CTITULO CARROUSEL

AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    easing: 'ease-in-out', // Suavizado
    once: true // Ejecutar animación solo una vez
});


// 3DDD
