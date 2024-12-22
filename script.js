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
        typeSpeed: 70, // Reduce la velocidad de tipeo para que sea más suave
        backSpeed: 90, // Velocidad al borrar (no se usa aquí pero es un ajuste general)
        backDelay: 600, // Retraso entre cada palabra
        startDelay: 1000, // Retraso inicial de 1 segundo
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
    }, 700); // Retraso adicional para mejorar la transición
});


