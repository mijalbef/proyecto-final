 //Locomotive
   /* (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();*/
    const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.05, // Aumenta la velocidad del scroll
        inertia: 0.5, // Reduce la inercia para detenerse rápidamente
        smoothMobile: true, // Suavidad en dispositivos móviles
        direction: "vertical", // Scroll en vertical
        multiplier: 1, // Multiplicador de la velocidad
        reloadOnContextChange: true, // Recarga al cambiar de contexto
    });
    
    // Actualiza Locomotive Scroll al cargar la página
    window.addEventListener("load", () => {
        locomotiveScroll.update();
    });
    
    // Ajusta el tamaño correctamente al redimensionar la ventana
    window.addEventListener("resize", () => {
        locomotiveScroll.update();
    });
    
    // Refresca Locomotive Scroll al cargar contenido adicional
    window.addEventListener('load', () => {
        locomotiveScroll.update();
    });
    
    // Refresca al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        locomotiveScroll.update();

        AOS.init({
            duration: 1000, // Duración de las animaciones
            once: true // Animar solo una vez
        });


        // ANIMACION TIT CARROUSEL
    });