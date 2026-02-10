const buttons = document.querySelectorAll('.btns');
const bikes = document.querySelectorAll('.bike-card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('border-b-2', 'border-orange-500'));
        button.classList.add('border-b-2', 'border-orange-500');

        bikes.forEach(bike => {
            const aroBike = bike.dataset.aro;

            if (aroBike === aroSelecionado) {
                bike.style.display = '';
            } else {
                bike.style.display = 'none';
            }
        });
    });
});
