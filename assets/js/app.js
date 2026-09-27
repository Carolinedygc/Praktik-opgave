// slider med billeder
const sliderImages = document.querySelector('.sliderImages');
const sliderIndicator = document.querySelector('.sliderIndicator');

sliderImages.addEventListener('scroll', () => {
    const scrolledToEnd = sliderImages.scrollLeft + sliderImages.clientWidth >= sliderImages.scrollWidth - 1;

    if (scrolledToEnd) {
        sliderIndicator.classList.add('hidden');
    } else {
        sliderIndicator.classList.remove('hidden');
    }
});


// overlay med plantegning
const floorplanBtn = document.querySelector('.floorplanButton');
const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlayClose');

floorplanBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

overlayClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});


// Scroll til toppen
const backButton = document.querySelector('.backToOverview');

backButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});