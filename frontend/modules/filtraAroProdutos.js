export default function filtraAroProdutos() {
    const buttons = document.querySelectorAll('.btns');

    document.addEventListener('DOMContentLoaded', () => {
        const activeButtonId = localStorage.getItem('activeButton');

        if (activeButtonId) {
            const activeBtn = document.getElementById(activeButtonId);
            if (activeBtn) {
                activeBtn.classList.add('border-b-2', 'border-orange-500');
            }
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b =>
                b.classList.remove('border-b-2', 'border-orange-500')
            );

            btn.classList.add('border-b-2', 'border-orange-500');

            localStorage.setItem('activeButton', btn.id);
        });
    });
}