window.addEventListener("load", selectCorrectImage);
window.addEventListener("resize", selectCorrectImage);

const heroImage = document.querySelector(".hero__img");

function selectCorrectImage() {
    let windowViewportWidth = window.innerWidth;
    let forTabletSize = windowViewportWidth >= 600 && windowViewportWidth <= 768;


    if (forTabletSize) {
        heroImage.src = "Chirp Starter Files/Assets/Hero Image (Tablet View).png";
    } else {
        heroImage.src = "Chirp Starter Files/Assets/Hero Image (Desktop View).png";
    }
}