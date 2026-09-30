class SiteHero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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

                .hero {
                    min-height: 570px;
                    display: grid;
                    place-items: center;
                    background:
                        radial-gradient(circle at 80% 20%, rgba(233, 185, 73, 0.18), transparent 30%),
                        linear-gradient(135deg, #edf2f7, #ffffff);
                }

                .container {
                    width: min(92%, var(--container, 1120px));
                    margin-inline: auto;
                }

                .hero-content {
                    max-width: 820px;
                    text-align: center;
                }

                .eyebrow {
                    margin-bottom: 10px;
                    color: var(--primary, #4AC6F0);
                    font-size: 0.78rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-top: 22px;
                }

                .hero h1 {
                    max-width: 780px;
                    margin: 0 auto 22px;
                    color: var(--primary-dark, #2378AF);
                    font-size: clamp(2.5rem, 7vw, 5rem);
                    line-height: 1.05;
                    letter-spacing: -0.05em;
                }

                .hero-text {
                    max-width: 650px;
                    margin: 0 auto 30px;
                    color: var(--muted, #667085);
                    font-size: 1.08rem;
                    line-height: 1.6;
                }

                .button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 48px;
                    padding: 0 24px;
                    border-radius: 999px;
                    background: var(--primary, #4AC6F0);
                    color: #fff;
                    font-weight: 700;
                    text-decoration: none;
                    transition: transform 0.2s ease, background 0.2s ease;
                }

                .button:hover {
                    background: var(--primary-dark, #2378AF);
                    transform: translateY(-2px);
                }

                @media (max-width: 520px) {
                    .hero {
                        min-height: 500px;
                    }
                }
            </style>

            <section id="inicio" class="hero">
                <div class="container hero-content">
                    <p class="eyebrow">SERVICIOS TÉCNICOS</p>
                    <h1>Olvídate del sobrecalentamiento y el ruido</h1>
                    <p class="hero-text">
                        Mantenimiento profundo, gestión térmica y ensambles a medida.
                    </p>
                    <p class="hero-text">
                        Le devolvemos la potencia y la estabilidad a tu equipo con insumos de alta calidad.
                    </p>
                    <a class="button" href="#paquetes">Ver paquetes de servicio</a>
                </div>
            </section>
        `;
    }
}

customElements.define('site-hero', SiteHero);
