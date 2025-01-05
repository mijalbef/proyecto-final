window.addEventListener('load', () => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    
    if (!scrollContainer) {
        console.error('Scroll container not found');
        return;
    }

    try {
        const scroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            smoothMobile: true,
            inertia: 0.5,
            getDirection: true,
            mobile: {
                smooth: true,
                inertia: 0.5,
            },
            tablet: {
                smooth: true,
                inertia: 0.5,
            }
        });

        // Refresh on images load
        const images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].onload = () => scroll.update();
        }

        // Handle AOS integration
        if (typeof AOS !== 'undefined') {
            scroll.on('scroll', () => {
                AOS.refresh();
            });
        }

        // Update scroll on window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                scroll.update();
            }, 250);
        });

        // Initial update after a short delay
        setTimeout(() => {
            scroll.update();
        }, 500);

    } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
    }
});