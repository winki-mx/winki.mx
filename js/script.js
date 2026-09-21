// ==============================
// TARJETAS DESPLEGABLES
// ==============================

const productToggles = document.querySelectorAll(".product-toggle");

productToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const card = toggle.closest(".product-card");
        const isOpen = card.classList.contains("active");

        // Cierra las demás tarjetas para mantener el catálogo limpio.
        document.querySelectorAll(".product-card.active").forEach((openCard) => {
            if (openCard !== card) {
                openCard.classList.remove("active");
                openCard.querySelector(".product-toggle").setAttribute("aria-expanded", "false");
            }
        });

        card.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(!isOpen));
    });
});

// ==============================
// MENÚ RESPONSIVO
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú después de seleccionar una sección.
    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
