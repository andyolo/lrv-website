
const pixelField = document.getElementById("pixelField");

function createPixels() {
    if (!pixelField) {
        console.error("Elemen pixelField tidak ditemukan!");
        return;
    }

    pixelField.replaceChildren();

    const count = window.innerWidth < 600 ? 45 : 100;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const pixel = document.createElement("span");

        pixel.className = "pixel";
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        pixel.style.setProperty("--delay", `${Math.random() * -5}s`);
        pixel.style.setProperty(
            "--brightness",
            `${0.25 + Math.random() * 0.75}`
        );

        fragment.appendChild(pixel);
    }

    pixelField.appendChild(fragment);
    console.log(`${count} pixel berhasil dibuat.`);
}

createPixels();
