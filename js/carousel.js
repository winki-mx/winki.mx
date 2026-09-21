// ==============================
// CARRUSEL DE IMÁGENES
// ==============================

const carousel = document.querySelector(".carousel");

if (carousel) {

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");

    const previousButton = carousel.querySelector(
        ".carousel-button-prev"
    );

    const nextButton = carousel.querySelector(
        ".carousel-button-next"
    );

    let currentSlide = 0;
    let autoplay;

    function showSlide(index) {

        // Permite que el carrusel sea infinito
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Quitar estado activo
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        // Activar imagen actual
        slides[currentSlide].classList.add("active");

        // Activar indicador
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    // Flecha siguiente
    nextButton.addEventListener("click", () => {
        nextSlide();
        restartAutoplay();
    });

    // Flecha anterior
    previousButton.addEventListener("click", () => {
        previousSlide();
        restartAutoplay();
    });

    // Indicadores
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            showSlide(index);
            restartAutoplay();
        });

    });

    // ==============================
    // CAMBIO AUTOMÁTICO
    // ==============================

    function startAutoplay() {

        autoplay = setInterval(() => {
            nextSlide();
        }, 5000);

    }

    function stopAutoplay() {
        clearInterval(autoplay);
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pausar cuando el usuario coloca el mouse encima
    carousel.addEventListener("mouseenter", stopAutoplay);

    carousel.addEventListener("mouseleave", startAutoplay);

    // Soporte básico para dispositivos táctiles
    carousel.addEventListener("touchstart", stopAutoplay);

    carousel.addEventListener("touchend", () => {
        restartAutoplay();
    });

    // Iniciar carrusel
    showSlide(0);
    startAutoplay();
}