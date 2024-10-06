// script.js

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.botones');

    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const newImageSrc = boton.getAttribute('data-image');
            const img = document.getElementById(`img${index + 1}`);
            cambiarImagen(img, `https://dragonball-api.com/transformaciones/${newImageSrc}`);
        });
    });
});

function cambiarImagen(imgElement, newSrc) {
    imgElement.style.opacity = '0'; // Inicia la transición de desvanecimiento
    imgElement.src = newSrc; // Cambia la fuente de la imagen
        imgElement.style.opacity = '2'; // Transición de aparición
}