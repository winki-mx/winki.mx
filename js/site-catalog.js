class SiteCatalog extends HTMLElement {
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
                    line-height: 1.6;
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

                .eyebrow h3 {
                    font-size: 0.95rem;
                    letter-spacing: 0.08em;
                }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 20px;
                }

                .product-card {
                    overflow: hidden;
                    background: var(--surface, #ffffff);
                    border: 1px solid var(--border, #e2e6eb);
                    border-radius: var(--radius, 16px);
                    box-shadow: var(--shadow, 0 12px 35px rgba(20, 37, 61, 0.08));
                }

                .product-toggle {
                    width: 100%;
                    min-height: 105px;
                    padding: 22px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    border: 0;
                    background: transparent;
                    color: var(--text, #2378AF);
                    text-align: left;
                    cursor: pointer;
                    font-family: inherit;
                }

                .product-toggle:hover {
                    background: #fafbfc;
                }

                .product-toggle small {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--muted, #667085);
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .product-toggle strong {
                    display: block;
                    color: var(--primary-dark, #2378AF);
                    font-size: 1.2rem;
                }

                .arrow {
                    flex: 0 0 auto;
                    width: 38px;
                    height: 38px;
                    display: grid;
                    place-items: center;
                    border-radius: 50%;
                    background: #eef2f6;
                    color: var(--primary, #4AC6F0);
                    font-size: 1.35rem;
                    transition: transform 0.3s ease, background 0.2s ease;
                }

                .product-card.active .arrow {
                    transform: rotate(180deg);
                    background: var(--primary, #4AC6F0);
                    color: #fff;
                }

                .product-info {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s ease;
                }

                .product-card.active .product-info {
                    grid-template-rows: 1fr;
                }

                .product-info-inner {
                    min-height: 0;
                    overflow: hidden;
                    padding: 0 24px;
                    color: var(--muted, #667085);
                    line-height: 1.6;
                }

                .product-card.active .product-info-inner {
                    padding-bottom: 24px;
                }

                .product-info p {
                    margin-bottom: 14px;
                }

                .product-info ul {
                    margin: 0 0 18px 20px;
                }

                .product-info li {
                    margin-bottom: 5px;
                }

                .price {
                    color: var(--primary-dark, #2378AF);
                    font-size: 1.4rem;
                    font-weight: 800;
                }

                .price span {
                    font-size: 0.75rem;
                    color: var(--muted, #667085);
                }

                @media (max-width: 800px) {
                    .product-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 520px) {
                    .section {
                        padding: 65px 0;
                    }

                    .product-toggle {
                        padding: 18px;
                    }

                    .product-info-inner {
                        padding-inline: 18px;
                    }

                    .product-card.active .product-info-inner {
                        padding-bottom: 18px;
                    }
                }
            </style>

            <section id="paquetes" class="catalog section">
                <div class="container">
                    <div class="section-heading">
                        <p class="eyebrow">Nuestros servicios</p>
                        <h2>Paquetes disponibles</h2>
                        <p>Haz clic en la flecha de cada tarjeta para consultar la información.</p>
                    </div>

                    <div class="eyebrow">
                        <h3>Mantenimiento Técnico y Térmico</h3>
                    </div>

                    <div class="product-grid">
                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete</small>
                                    <strong>Mantenimiento Preventivo Básico</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Limpieza general y refresco térmico para PC de escritorio o laptops de uso general.</p>
                                    <ul>
                                        <li>Soplado general y limpieza de filtros de polvo</li>
                                        <li>Limpieza superficial de ventiladores y chasis</li>
                                        <li>Cambio de pasta térmica de alta calidad en CPU (procesador)</li>
                                        <li>Pruebas de temperatura iniciales y finales</li>
                                    </ul>
                                    <p class="price">$380<span>MXN</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete</small>
                                    <strong>Mantenimiento Profundo</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Limpieza a detalle y gestión térmica para PC Gamer, Workstations o Laptops de alto rendimiento.</p>
                                    <ul>
                                        <li>Desarme detallado del gabinete o chasis de la laptop</li>
                                        <li>Limpieza profunda de disipadores, ventiladores y tarjeta madre / RAM</li>
                                        <li>Cambio de pasta térmica de alto rendimiento en CPU (y GPU en laptops gamer)</li>
                                        <li>Reacomodado y peinado de cables (cable management) para flujo de aire</li>
                                        <li>Pruebas de estrés (stress test) de estabilidad y temperaturas</li>
                                    </ul>
                                    <p class="price"><span>DESDE </span>$850<span>MXN</span></p>
                                    <p>Revisión de thermal pads / masilla térmica. Reemplazo cotizado aparte según estado y modelo.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="eyebrow">
                        <h3>Servicio Especializado para Tarjetas de Video (GPUs)</h3>
                    </div>

                    <div class="product-grid">
                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete</small>
                                    <strong>Mantenimiento Básico GPU</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Limpieza y reemplazo térmico en el chip principal.</p>
                                    <ul>
                                        <li>Desarme y limpieza profunda del disipador y aspas de ventiladores</li>
                                        <li>Remoción de residuos y cambio de pasta térmica de alto rendimiento en el die principal</li>
                                        <li>Inspección de thermal pads de fábrica (se conservan si están en buen estado)</li>
                                        <li>Prueba de temperatura en carga de trabajo</li>
                                    </ul>
                                    <p class="price">$350<span>MXN</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete</small>
                                    <strong>Mantenimiento Full GPU + Thermal Pads</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Renovación térmica integral para tarjetas de video de gama media y alta</p>
                                    <ul>
                                        <li>Desarme completo y limpieza profunda del disipador de calor y ventiladores</li>
                                        <li>Cambio de pasta térmica de alto rendimiento en el procesador gráfico</li>
                                        <li>Reemplazo completo de Thermal Pads nuevos (medidos a escala exacta en grosor para VRAM y MOSFETs)</li>
                                        <li>Pruebas de estrés (stress test) y monitoreo de hotspot/VRAM pre y post servicio</li>
                                    </ul>
                                    <p class="price"><span>DESDE </span>$650<span>MXN</span></p>
                                    <p>Reemplazo de thermal pads cotizado aparte según el modelo.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="eyebrow">
                        <h3>Ensamblaje de PC</h3>
                    </div>

                    <div class="product-grid">
                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete 01</small>
                                    <strong>Ensamble Básico</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>El cliente entrega las piezas y se lleva el equipo listo para instalar SO.</p>
                                    <ul>
                                        <li>Armado físico completo de componentes</li>
                                        <li>Peinado de cables (cable management) estándar</li>
                                        <li>Prueba de encendido / POST</li>
                                    </ul>
                                    <p class="price">$350<span>MXN</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete 02</small>
                                    <strong>Ensamble Intermedio</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Ensamble físico completo + Instalación de Sistema Operativo.</p>
                                    <ul>
                                        <li>Armado físico completo de componentes</li>
                                        <li>Montaje de enfriamiento líquido (AIO) o controladoras ARGB</li>
                                        <li>Instalación limpia de Windows (versión de prueba) / Linux</li>
                                        <li>Instalación y actualización de drivers oficiales</li>
                                        <li>Actualización y configuración de BIOS</li>
                                        <li>Prueba de encendido y estabilidad</li>
                                    </ul>
                                    <p class="price">$550<span>MXN</span></p>
                                </div>
                            </div>
                        </article>

                        <article class="product-card">
                            <button class="product-toggle" type="button" aria-expanded="false">
                                <span>
                                    <small>Paquete 03</small>
                                    <strong>Ensamble Profesional Personalizado</strong>
                                </span>
                                <span class="arrow" aria-hidden="true">⌄</span>
                            </button>
                            <div class="product-info">
                                <div class="product-info-inner">
                                    <p>Asesoría completa + Ensamble + Sistema Operativo + Pruebas.</p>
                                    <ul>
                                        <li>Asesoría previa en selección de piezas (compatibilidad y presupuesto)</li>
                                        <li>Armado físico completo de componentes</li>
                                        <li>Gestión de cables (cable management) avanzada</li>
                                        <li>Instalación limpia de Windows (versión de prueba) / Linux</li>
                                        <li>Instalación y actualización de drivers oficiales</li>
                                        <li>Actualización y configuración de BIOS</li>
                                        <li>Pruebas de estrés (stress test) de rendimiento y temperaturas</li>
                                    </ul>
                                    <p class="price">$800<span>MXN</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        `;

        this.initAccordion();
    }

    initAccordion() {
        const productToggles = this.shadowRoot.querySelectorAll('.product-toggle');

        productToggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const card = toggle.closest('.product-card');
                const isOpen = card.classList.contains('active');

                this.shadowRoot.querySelectorAll('.product-card.active').forEach((openCard) => {
                    if (openCard !== card) {
                        openCard.classList.remove('active');
                        openCard.querySelector('.product-toggle').setAttribute('aria-expanded', 'false');
                    }
                });

                card.classList.toggle('active');
                toggle.setAttribute('aria-expanded', String(!isOpen));
            });
        });
    }
}

customElements.define('site-catalog', SiteCatalog);
