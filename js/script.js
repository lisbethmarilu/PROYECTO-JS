const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card-lista');

// Variables para controlar el índice actual de las cards
let currentIndex = 0;

// Función para actualizar el slider
function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // 20px es el margen entre cards
    const sliderWidth = slider.offsetWidth; // Ancho del contenedor visible
    const totalWidth = cardWidth * cards.length; // Ancho total del slider
    const maxTranslate = Math.max(0, totalWidth - sliderWidth); // Máxima traslación permitida

    const translateX = Math.min(currentIndex * cardWidth, maxTranslate);
    slider.style.transform = `translateX(-${translateX}px)`;
}

// Función para mover hacia la izquierda
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Función para mover hacia la derecha
nextBtn.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth + 20; // 20px es el margen entre cards
    const sliderWidth = slider.offsetWidth; // Ancho del contenedor visible
    const maxIndex = Math.ceil((cards.length * cardWidth - sliderWidth) / cardWidth);

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});