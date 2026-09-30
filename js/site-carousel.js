class SiteCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentSlide = 0;
        this.autoplay = null;
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .carousel-section {
                    padding: 90px 0;
                    background: #ffffff;
                }

                .container {
                    width: min(92%, var(--container, 1120px));
                    margin-inline: auto;
                }

                .section-heading {
                    max-width: 700px;
                    margin-bottom: 40px;
                }

                .section-heading h2 {
                    margin-bottom: 10px;
                    color: var(--primary-dark, #2378AF);
                    font-size: clamp(2rem, 5vw, 3rem);
                    line-height: 1.1;
                }

                .section-heading > p:last-child {
                    color: var(--muted, #667085);
                }

                .eyebrow {
                    margin-bottom: 10px;
                    color: var(--primary, #4AC6F0);
                    font-size: 0.78rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }

                .carousel {
                    position: relative;
                    overflow: hidden;
                    min-height: 520px;
                    border-radius: var(--radius, 16px);
                    background: var(--primary-dark, #2378AF);
                    box-shadow: var(--shadow, 0 12px 35px rgba(20, 37, 61, 0.08));
                }

                .carousel-track {
                    position: relative;
                    width: 100%;
                    height: 520px;
                }

                .carousel-slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.5s ease, visibility 0.5s ease;
                }

                .carousel-slide.active {
                    opacity: 1;
                    visibility: visible;
                }

                .carousel-slide img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .carousel-slide::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(17, 25, 35, 0.9) 0%,
                        rgba(17, 25, 35, 0.35) 45%,
                        rgba(17, 25, 35, 0.05) 100%
                    );
                }

                .carousel-caption {
                    position: absolute;
                    z-index: 2;
                    left: 60px;
                    right: 60px;
                    bottom: 70px;
                    max-width: 600px;
                    color: #ffffff;
                }

                .carousel-caption span {
                    display: inline-block;
                    margin-bottom: 10px;
                    padding: 6px 12px;
                    border-radius: 999px;
                    background: var(--accent, #F5CB5C);
                    color: var(--primary-dark, #2378AF);
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .carousel-caption h3 {
                    margin-bottom: 8px;
                    font-size: clamp(1.8rem, 4vw, 2.8rem);
                    line-height: 1.1;
                }

                .carousel-caption p {
                    max-width: 540px;
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 1rem;
                }

                .carousel-button {
                    position: absolute;
                    z-index: 5;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 46px;
                    height: 46px;
                    display: grid;
                    place-items: center;
                    border: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.9);
                    color: var(--primary, #4AC6F0);
                    font-size: 1.3rem;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .carousel-button:hover {
                    background: #ffffff;
                }

                .carousel-button-prev {
                    left: 20px;
                }

                .carousel-button-next {
                    right: 20px;
                }

                .carousel-button:active {
                    transform: translateY(-50%) scale(0.94);
                }

                .carousel-indicators {
                    position: absolute;
                    z-index: 5;
                    left: 50%;
                    bottom: 22px;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 9px;
                }

                .carousel-dot {
                    width: 10px;
                    height: 10px;
                    padding: 0;
                    border: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.45);
                    cursor: pointer;
                    transition: width 0.25s ease, background 0.25s ease;
                }

                .carousel-dot.active {
                    width: 28px;
                    border-radius: 999px;
                    background: #ffffff;
                }

                @media (max-width: 800px) {
                    .carousel-section {
                        padding: 65px 0;
                    }

                    .carousel,
                    .carousel-track {
                        min-height: 480px;
                        height: 480px;
                    }

                    .carousel-caption {
                        left: 30px;
                        right: 30px;
                        bottom: 65px;
                    }

                    .carousel-caption h3 {
                        font-size: 1.8rem;
                    }

                    .carousel-button {
                        width: 40px;
                        height: 40px;
                    }

                    .carousel-button-prev {
                        left: 12px;
                    }

                    .carousel-button-next {
                        right: 12px;
                    }
                }

                @media (max-width: 520px) {
                    .carousel,
                    .carousel-track {
                        min-height: 430px;
                        height: 430px;
                    }

                    .carousel-caption {
                        left: 20px;
                        right: 20px;
                        bottom: 60px;
                    }

                    .carousel-caption span {
                        font-size: 0.65rem;
                    }

                    .carousel-caption h3 {
                        font-size: 1.5rem;
                    }

                    .carousel-caption p {
                        font-size: 0.88rem;
                    }

                    .carousel-button {
                        width: 36px;
                        height: 36px;
                        font-size: 1rem;
                    }

                    .carousel-button-prev {
                        left: 10px;
                    }

                    .carousel-button-next {
                        right: 10px;
                    }
                }
            </style>

            <section id="galeria" class="carousel-section">
                <div class="container">
                    <div class="section-heading">
                        <p class="eyebrow">Nuestro trabajo</p>
                        <h2>Conoce algunos de nuestros servicios</h2>
                        <p>
                            Una muestra de los trabajos que realizamos en mantenimiento,
                            diagnóstico y ensamble de equipos.
                        </p>
                    </div>

                    <div class="carousel" aria-label="Galería de trabajos">
                        <div class="carousel-track">
                            <article class="carousel-slide active">
                                <img src="img/igm_04.jpg" alt="Mantenimiento preventivo de computadora">
                                <div class="carousel-caption">
                                    <span>Mantenimiento</span>
                                    <h3>Mantenimiento preventivo</h3>
                                    <p>
                                        Limpieza interna, revisión de componentes
                                        y mantenimiento general del equipo.
                                    </p>
                                </div>
                            </article>

                            <article class="carousel-slide">
                                <img src="img/igm_01.jpg" alt="Ensamble personalizado de computadora">
                                <div class="carousel-caption">
                                    <span>Ensamble</span>
                                    <h3>Equipos a medida</h3>
                                    <p>
                                        Ensambles personalizados de acuerdo con las
                                        necesidades y presupuesto de cada cliente.
                                    </p>
                                </div>
                            </article>

                            <article class="carousel-slide">
                                <img src="img/igm_02.jpg" alt="Limpieza interna de computadora">
                                <div class="carousel-caption">
                                    <span>Mantenimiento</span>
                                    <h3>Limpieza interna</h3>
                                    <p>
                                        Eliminación de polvo y suciedad para ayudar
                                        a mantener una correcta temperatura.
                                    </p>
                                </div>
                            </article>

                            <article class="carousel-slide">
                                <img src="img/igm_03.jpg" alt="Diagnóstico y revisión de equipo de cómputo">
                                <div class="carousel-caption">
                                    <span>Diagnóstico</span>
                                    <h3>Revisión de equipos</h3>
                                    <p>
                                        Identificación de problemas de hardware
                                        y recomendaciones de solución.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <!-- Flechas -->
                        <button class="carousel-button carousel-button-prev" type="button" aria-label="Imagen anterior">
                            &#10094;
                        </button>

                        <button class="carousel-button carousel-button-next" type="button" aria-label="Imagen siguiente">
                            &#10095;
                        </button>

                        <!-- Indicadores -->
                        <div class="carousel-indicators" aria-label="Seleccionar imagen">
                            <button class="carousel-dot active" type="button" aria-label="Mostrar imagen 1"></button>
                            <button class="carousel-dot" type="button" aria-label="Mostrar imagen 2"></button>
                            <button class="carousel-dot" type="button" aria-label="Mostrar imagen 3"></button>
                            <button class="carousel-dot" type="button" aria-label="Mostrar imagen 4"></button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.initCarousel();
    }

    initCarousel() {
        const carousel = this.shadowRoot.querySelector('.carousel');
        if (!carousel) return;

        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-button-prev');
        const nextBtn = carousel.querySelector('.carousel-button-next');

        const showSlide = (index) => {
            if (index >= slides.length) {
                this.currentSlide = 0;
            } else if (index < 0) {
                this.currentSlide = slides.length - 1;
            } else {
                this.currentSlide = index;
            }

            slides.forEach((slide) => slide.classList.remove('active'));
            dots.forEach((dot) => dot.classList.remove('active'));

            if (slides[this.currentSlide]) {
                slides[this.currentSlide].classList.add('active');
            }
            if (dots[this.currentSlide]) {
                dots[this.currentSlide].classList.add('active');
            }
        };

        const nextSlide = () => showSlide(this.currentSlide + 1);
        const prevSlide = () => showSlide(this.currentSlide - 1);

        const startAutoplay = () => {
            this.stopAutoplay();
            this.autoplay = setInterval(nextSlide, 5000);
        };

        this.stopAutoplay = () => {
            if (this.autoplay) {
                clearInterval(this.autoplay);
                this.autoplay = null;
            }
        };

        const restartAutoplay = () => {
            this.stopAutoplay();
            startAutoplay();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                restartAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                restartAutoplay();
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                restartAutoplay();
            });
        });

        carousel.addEventListener('mouseenter', () => this.stopAutoplay());
        carousel.addEventListener('mouseleave', () => startAutoplay());
        carousel.addEventListener('touchstart', () => this.stopAutoplay(), { passive: true });
        carousel.addEventListener('touchend', () => restartAutoplay());

        showSlide(0);
        startAutoplay();
    }

    disconnectedCallback() {
        if (this.stopAutoplay) {
            this.stopAutoplay();
        }
    }
}

customElements.define('site-carousel', SiteCarousel);
