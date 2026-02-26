export default function imagensCadastro() {
    const input = document.getElementById('imagem-bike');
    const texto = document.getElementById('nome-imagem');

    if (input && texto) {
        input.addEventListener('change', () => {
            texto.textContent = input.files.length + " imagem(ns) selecionada(s)";
        });
    };
}