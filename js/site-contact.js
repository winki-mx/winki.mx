class SiteContact extends HTMLElement {
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

                .section {
                    padding: 90px 0;
                }

                .contact {
                    background: var(--primary, #4AC6F0);
                    color: #fff;
                }

                .container {
                    width: min(92%, var(--container, 1120px));
                    margin-inline: auto;
                }

                .contact-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 40px;
                }

                .eyebrow {
                    margin-bottom: 10px;
                    color: #fff;
                    font-size: 0.78rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }

                .contact h2 {
                    color: #fff;
                    margin-bottom: 12px;
                    font-size: clamp(2rem, 5vw, 3rem);
                    line-height: 1.1;
                }

                .contact-content > div > p:last-child {
                    max-width: 650px;
                    color: rgba(255, 255, 255, 0.78);
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

                .button-light {
                    flex-shrink: 0;
                    background: #fff;
                    color: var(--primary, #4AC6F0);
                }

                .button-light:hover {
                    background: #f2f4f7;
                    transform: translateY(-2px);
                }

                @media (max-width: 800px) {
                    .contact-content {
                        align-items: flex-start;
                        flex-direction: column;
                    }
                }

                @media (max-width: 520px) {
                    .section {
                        padding: 65px 0;
                    }
                }
            </style>

            <section id="contacto" class="contact section">
                <div class="container contact-content">
                    <div>
                        <p class="eyebrow">¿LISTO PARA OPTIMIZAR TU EQUIPO?</p>
                        <h2>Cotiza tu mantenimiento o ensamble</h2>
                        <p>
                            Envíanos un mensaje con los detalles de tu equipo o los componentes que deseas ensamblar para
                            darte una atención personalizada.
                        </p>
                    </div>
                    <a class="button button-light"
                        href="https://wa.me/525657141204?text=Hola%20,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20para%20mi%20equipo.">
                        Enviar mensaje / WhatsApp
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('site-contact', SiteContact);
