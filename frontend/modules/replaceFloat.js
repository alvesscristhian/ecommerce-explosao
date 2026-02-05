export default function formataPreco() {
    let preco = document.querySelector('#preco').value;
    let avista = document.querySelector('#avista').value;

    preco = preco.replace(',', '.');
    avista = avista.replace(',', '.');

    preco = Number(preco);
    avista = Number(preco);
}