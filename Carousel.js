const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 2; // Start with the 3rd image as the central one

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next', 'prev-prev', 'next-next');
        item.style.display = 'none';

        if(currentIndex == 1) currentIndex = items.length-3;
        if(currentIndex == 0) currentIndex = items.length-4;
        if(currentIndex == items.length-2) currentIndex = 2;
        if(currentIndex == items.length-1) currentIndex = 3;
        
        const relativeIndex = (index - currentIndex + items.length) % items.length;

        if (relativeIndex === 0) {
            item.classList.add('active');
            item.style.display = 'block';
        } else if (relativeIndex === 1 || relativeIndex === (items.length - 1)) {
            item.classList.add('next');
            item.classList.add('prev');
            item.style.display = 'block';
        } else if (relativeIndex === 2 || relativeIndex === (items.length - 2)) {
            item.classList.add('next-next');
            item.classList.add('prev-prev');
            item.style.display = 'block';
        }
    });

    // Adjust the transform to center the current active element
}

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initialize the carousel display
updateCarousel();