// slider med billeder
const sliderImages = document.querySelector('.sliderImages');


const nextButton = document.querySelector('.sliderNext');
const previousButton = document.querySelector('.sliderPrevious');

nextButton.addEventListener('click', () => {
    sliderImages.scrollBy({
        left: sliderImages.clientWidth,
        behavior: 'smooth'
    });
});

previousButton.addEventListener('click', () => {
    sliderImages.scrollBy({
        left: -sliderImages.clientWidth,
        behavior: 'smooth'
    });
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
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        overlay.classList.remove('active');
    }
});




// Scroll til toppen
const backButton = document.querySelector('.backToOverview');

backButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});