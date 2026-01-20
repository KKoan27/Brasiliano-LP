
const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');
const slides = Array.from(track.children);

let currentSlideIndex = 0;


let slideWidth = slides[0].getBoundingClientRect().width;
const moveToSlide = (index) => {
    track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
    currentSlideIndex = index;
}


nextButton.addEventListener('click', () => {
    if (currentSlideIndex === slides.length - 3) {
        // opção para quando for o ultimo, retornar ao primeiro
        moveToSlide(0);
    } else {
        moveToSlide(currentSlideIndex + 1);
    }


})


prevButton.addEventListener('click', () => {
    if (currentSlideIndex === 0) {
        moveToSlide(slides.length - 3);
    }
    else {
        moveToSlide(currentSlideIndex - 1);
    }

});

window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentSlideIndex); // Realinha o carrossel
});





