class SitePolicies extends HTMLElement {
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

                .policies {
                    background: #fff;
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

                .eyebrow {
                    margin-bottom: 10px;
                    color: var(--primary, #4AC6F0);
                    font-size: 0.78rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }

                .policy-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                .policy-item {
                    padding: 25px;
                    border: 1px solid var(--border, #e2e6eb);
                    border-radius: var(--radius, 16px);
                    background: var(--background, #f6f7f9);
                }

                .policy-item h3 {
                    margin-bottom: 8px;
                    color: var(--primary-dark, #2378AF);
                }

                .policy-item p {
                    color: var(--muted, #667085);
                    font-size: 0.94rem;
                    line-height: 1.6;
                }

                @media (max-width: 800px) {
                    .policy-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 520px) {
                    .section {
                        padding: 65px 0;
                    }
                }
            </style>

            <section id="politicas" class="policies section">
                <div class="container">
                    <div class="section-heading">
                        <p class="eyebrow">Información importante</p>
                        <h2>Políticas</h2>
                    </div>

                    <div class="policy-grid">
                        <div class="policy-item">
                            <h3>Aprobación de Políticas y Cotización</h3>
                            <p>No se realiza ningún trabajo ni aplicación de insumos sin previa autorización de políticas de servicio y aceptación de la cotización.</p>
                        </div>
                        <div class="policy-item">
                            <h3>Modalidad y Horarios</h3>
                            <p>Atención con previa cita en punto de entrega/puerta. Horario: Lunes a Sábado de 10:00 a 19:00 hrs.</p>
                        </div>
                        <div class="policy-item">
                            <h3>Pagos</h3>
                            <p>50% de anticipo en ensambles a medida o pago contra entrega al finalizar las pruebas de rendimiento.</p>
                        </div>
                        <div class="policy-item">
                            <h3>Garantía</h3>
                            <p>30 días de garantía por escrito en mano de obra y aplicación de insumos térmicos de gama alta (Arctic).</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('site-policies', SitePolicies);
