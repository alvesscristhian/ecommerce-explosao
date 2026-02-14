export default function trocaMapa() {
    const maps = [
        {
            nome: 'Loja 1',
            endereco: 'R. Dom Duarte da Costa, 304 - Vila Jockei Clube',
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.434784590569!2d-46.412807923842664!3d-23.945060875802312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1b5060355f1b%3A0x1b9cc894f88ba6e5!2sGrupo%20Explos%C3%A3o%20Bike!5e0!3m2!1spt-BR!2sbr!4v1768279011235!5m2!1spt-BR!2sbr"
        },
        {
            nome: 'Loja 2',
            endereco: 'R. Alferes Germano da Costa, 390 - Cidade Náutica',
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.3001530730758!2d-46.39642092384249!3d-23.94982407598018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1b7a7c312c1d%3A0xe5e230dae59be411!2sExplos%C3%A3o%20Bike!5e0!3m2!1spt-BR!2sbr!4v1768277800399!5m2!1spt-BR!2sbr"
        }
    ];

    let index = 0;
    const mapa = document.querySelector('.map-frame');
    const back = document.querySelector('.back-map');
    const next = document.querySelector('.next-map');
    const loja = document.querySelector('.nome');
    const endereco = document.querySelector('.endereco');

    next.addEventListener('click', () => {
        mapa.src = maps[index].src;
        index = (index + 1) % maps.length;
        loja.innerText = maps[index].nome;
        endereco.innerHTML = maps[index].endereco;
    });
    
    back.addEventListener('click', () => {
        mapa.src = maps[index].src;
        index = (index - 1 + maps.length) % maps.length;
        loja.innerHTML = maps[index].nome;
        endereco.innerHTML = maps[index].endereco;
    });
};