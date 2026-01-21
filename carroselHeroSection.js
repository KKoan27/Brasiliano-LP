
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    // Converte HTMLCollection para Array para usar métodos de array
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-next');
    const prevButton = document.querySelector('.btn-prev');

    // Pega a largura do primeiro slide para saber quanto mover
    // getBoundingClientRect precisa dos parenteses ()
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Posiciona os slides um ao lado do outro
    // Slide 0: left 0px, Slide 1: left 1300px, etc.
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    // Esta linha não é estritamente necessária com Flexbox, 
    // mas ajuda se mudar o layout CSS. Com flexbox o CSS resolve.

    // Função para mover para o slide alvo
    const moveToSlide = (currentSlide, targetSlide) => {
        // Move a trilha inteira usando transform
        // Descobrimos o index do slide alvo para multiplicar pela largura
        const targetIndex = slides.findIndex(slide => slide === targetSlide);

        track.style.transform = 'translateX(-' + (targetIndex * slideWidth) + 'px)';

        // Atualiza as classes
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    // Clique no botão Anterior
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;

        // Loop infinito: se não houver anterior (é o primeiro), vai para o último
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
        }

        moveToSlide(currentSlide, prevSlide);
    });

    // Clique no botão Próximo
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;

        // Loop infinito: se não houver próximo (é o último), volta para o primeiro
        if (!nextSlide) {
            nextSlide = slides[0];
        }

        moveToSlide(currentSlide, nextSlide);
    });
});
