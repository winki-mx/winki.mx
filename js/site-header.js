class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    display: block;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.96);
                    border-bottom: 1px solid var(--border, #e2e6eb);
                    backdrop-filter: blur(10px);
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .container {
                    width: min(92%, var(--container, 1120px));
                    margin-inline: auto;
                }

                .header-content {
                    min-height: 76px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }

                .brand {
                    color: var(--primary, #4AC6F0);
                    font-size: 1.35rem;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .logo-icon {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background-image: url('img/favicon.svg');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .main-nav {
                    display: flex;
                    align-items: center;
                    gap: 28px;
                }

                .main-nav a {
                    color: var(--text, #2378AF);
                    font-size: 0.95rem;
                    font-weight: 600;
                    transition: color 0.2s ease;
                }

                .main-nav a:hover {
                    color: var(--primary, #4AC6F0);
                }

                .menu-toggle {
                    display: none;
                    border: 0;
                    background: transparent;
                    color: var(--primary, #4AC6F0);
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                @media (max-width: 800px) {
                    .menu-toggle {
                        display: block;
                    }

                    .main-nav {
                        position: absolute;
                        top: 76px;
                        left: 0;
                        width: 100%;
                        display: none;
                        padding: 20px 4%;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                        background: #fff;
                        border-bottom: 1px solid var(--border, #e2e6eb);
                        box-shadow: var(--shadow, 0 12px 35px rgba(20, 37, 61, 0.08));
                    }

                    .main-nav.open {
                        display: flex;
                    }
                }
            </style>

            <header class="site-header">
                <div class="container header-content">
                    <a href="#inicio" class="brand"><span class="logo-icon"></span>winki</a>

                    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
                        ☰
                    </button>

                    <nav class="main-nav" aria-label="Navegación principal">
                        <a href="#inicio">Inicio</a>
                        <a href="#paquetes">Paquetes</a>
                        <a href="#politicas">Políticas</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </div>
            </header>
        `;

        this.initMenu();
    }

    initMenu() {
        const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        const mainNav = this.shadowRoot.querySelector('.main-nav');

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                const isOpen = mainNav.classList.toggle('open');
                menuToggle.setAttribute('aria-expanded', String(isOpen));
            });

            mainNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    mainNav.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }
}

customElements.define('site-header', SiteHeader);
