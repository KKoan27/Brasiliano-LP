document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona elementos DENTRO da section #rating
    const ratingTrack = document.querySelector('#rating .carousel-track');
    const ratingNextBtn = document.getElementById('nextBtn');
    const ratingPrevBtn = document.getElementById('prevBtn');

    // Se não achar o carrossel na página, para o código (evita erros)
    if (!ratingTrack || !ratingNextBtn || !ratingPrevBtn) return;

    const ratingCards = Array.from(ratingTrack.children);
    let ratingCurrentIndex = 0;

    // Pega a largura do card + o espaçamento (gap) se houver
    // getBoundingClientRect() precisa dos parênteses
    let cardWidth = ratingCards[0].getBoundingClientRect().width;

    // Função que move o carrossel
    const moveRatingSlide = (index) => {
        ratingTrack.style.transform = 'translateX(-' + (cardWidth * index) + 'px)';
        ratingCurrentIndex = index;
    }

    // --- Botão Próximo ---
    ratingNextBtn.addEventListener('click', () => {
        // Define quantos cards aparecem na tela (ex: 3). 
        // Subtraímos esse valor do total para saber o limite.
        // Se estiver mostrando 3 cards por vez, use -3. Se for 1 por vez, use -1.
        const cardsVisible = 3;
        const maxIndex = ratingCards.length - cardsVisible;

        if (ratingCurrentIndex >= maxIndex) {
            // Volta para o inicio (Loop)
            moveRatingSlide(0);
        } else {
            moveRatingSlide(ratingCurrentIndex + 1);
        }
    });

    // --- Botão Anterior ---
    ratingPrevBtn.addEventListener('click', () => {
        const cardsVisible = 3;
        const maxIndex = ratingCards.length - cardsVisible;

        if (ratingCurrentIndex === 0) {
            // Vai para o final (Loop)
            moveRatingSlide(maxIndex);
        } else {
            moveRatingSlide(ratingCurrentIndex - 1);
        }
    });

    // Atualiza a largura se a tela for redimensionada
    window.addEventListener('resize', () => {
        cardWidth = ratingCards[0].getBoundingClientRect().width;
    });
});