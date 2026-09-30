class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const currentYear = new Date().getFullYear();

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

                .site-footer {
                    background: #2378AF;
                    color: #fff;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 1.6;
                }

                .site-footer a {
                    color: inherit;
                    text-decoration: none;
                }

                .container {
                    width: min(92%, 1120px);
                    margin-inline: auto;
                }

                .footer-grid {
                    padding: 55px 0;
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr;
                    gap: 40px;
                }

                .footer-grid h3 {
                    margin-bottom: 12px;
                }

                .footer-grid p {
                    color: rgba(255, 255, 255, 0.65);
                }

                .footer-grid a:hover {
                    color: #fff;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-bottom p {
                    padding: 20px 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.85rem;
                    text-align: center;
                }

                @media (max-width: 800px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }
                }
            </style>

            <footer class="site-footer">
                <div class="container footer-grid">
                    <div>
                        <h3>winki</h3>
                        <p>Optimizamos tu hardware para mantener las temperaturas bajo control.</p>
                    </div>

                    <div>
                        <h3>Dirección</h3>
                        <p>Av. Emiliano Zapata<br>Atenco, Estado de México y zonas aledañas</p>
                        <p>(Atención únicamente previa cita)</p>
                    </div>

                    <div>
                        <h3>Contacto</h3>
                        <p>
                            <span>Ventas y Cotizaciones:</span>
                            <a href="mailto:winki.mx@outlook.com">winki.mx@outlook.com</a><br>

                            <span>Soporte y Garantías:</span>
                            <a href="mailto:winki.soporte@outlook.com">winki.soporte@outlook.com</a><br>
                        </p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <p>© ${currentYear} winki. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
