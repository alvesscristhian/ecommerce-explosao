export default function borderBtn() {
    const btns = document.querySelectorAll('.btns');
    btns.forEach((btn) => {
        btn.addEventListener('click', (el) => {
            btns.forEach(b => {
                b.classList.remove('border-b-2', 'border-orange-500');
            });
            
            const target = el.target;
            target.classList.add('border-b-2', 'border-orange-500');
        });
    })
};