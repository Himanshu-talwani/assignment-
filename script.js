const sizeChartBtn = document.getElementById('sizeChartBtn');
const sizeChartModal = document.getElementById('sizeChartModal');
const closeModal = document.querySelector('.close-modal');

sizeChartBtn.addEventListener('click', () => {
    sizeChartModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    sizeChartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === sizeChartModal) {
        sizeChartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

const sizeOptions = document.querySelectorAll('.size-btn');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-btn.selected').textContent;
    alert(`Added Black Vest (Size: ${selectedSize}) to your cart!`);
});