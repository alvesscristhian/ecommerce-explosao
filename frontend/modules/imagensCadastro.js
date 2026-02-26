export default function imagensCadastro() {
    const input = document.querySelector('#imagem-bike');
    const texto = document.querySelector('#nome-imagem');

    if (input && texto) {
        input.addEventListener('change', () => {
            texto.textContent = input.files.length + " imagem(ns) selecionada(s)";
        });
    };
}