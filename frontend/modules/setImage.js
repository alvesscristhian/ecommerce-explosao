export default function setImage (selecao, src) {
    const el = document.querySelector(selecao);
    if (!el) return;
    return el.src = src;
}