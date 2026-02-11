const buttons = document.querySelectorAll('.btns');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('border-b-2', 'border-orange-500'));
        button.classList.add('border-b-2', 'border-orange-500');
    });
});
