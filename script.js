
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );
});

navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

const pixelField = document.getElementById("pixelField");

if (pixelField) {
    const count = window.innerWidth < 600 ? 45 : 100;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const pixel = document.createElement("span");

        pixel.className = "pixel";
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        pixel.style.setProperty(
            "--delay",
            `${Math.random() * -5}s`
        );
        pixel.style.setProperty(
            "--brightness",
            `${0.25 + Math.random() * 0.75}`
        );

        fragment.appendChild(pixel);
    }

    pixelField.appendChild(fragment);
}
