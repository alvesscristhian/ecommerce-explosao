export default function galeriaProduto() {
    const imagemPrincipal = document.querySelector('#imagem-principal');
    const thumbs = document.querySelectorAll('.thumb');
    const container = document.querySelector('#zoom-container');

    if (!imagemPrincipal || !container || thumbs.length === 0) return;

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {

            imagemPrincipal.classList.add('opacity-0');

            setTimeout(() => {
                imagemPrincipal.src = thumb.src;
                imagemPrincipal.classList.remove('opacity-0');
            }, 150);

        });
    });

    container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imagemPrincipal.style.transformOrigin = `${x}% ${y}%`;
    imagemPrincipal.style.transform = "scale(2)";
  });

  container.addEventListener('mouseleave', () => {
    imagemPrincipal.style.transform = "scale(1)";
  });


}
