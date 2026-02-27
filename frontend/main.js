import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import * as emailjs from '@emailjs/browser';

import { images } from './modules/images';
import setImage from './modules/setImage';

setImage('.logo', images.logo);
setImage('.melhores-ano', images.melhoresAno);
setImage('.about-banner', images.aboutBanner);
setImage('.criancas-banner', images.criancasBanner);
setImage('.feminina-banner', images.femininaBanner);
setImage('.oficina-banner', images.oficinaBanner);
setImage('.principal-banner', images.principalBanner);
setImage('.dashboard-svg', images.dashboardSvg);
setImage('.create-svg', images.createSvg);
setImage('.visitar-svg', images.visitarSvg);

import filtraAroProdutos from './modules/filtraAroProdutos'
filtraAroProdutos();

import trocaMapa from './modules/switchMap';
trocaMapa();

import confirmaSelect from './modules/confirmaSelect';
confirmaSelect();

import imagensCadastro from './modules/imagensCadastro';
imagensCadastro();

import galeriaProduto from './modules/galeriaProduto';
import { set } from 'core-js/core/dict';
galeriaProduto();


// Valida form do contato
emailjs.init("HHdLGyCcyfm2-1h4m");
document.querySelector('#form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.querySelector('[name="name"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        subject: document.querySelector('[name="subject"]').value,
        message: document.querySelector('[name="message"]').value
    }
    const templateId = 'template_rv486w3';
    const serviceId = 'service_lyb11yl';
    const submitButton = document.querySelector('#submit');
    const feedback = document.querySelector('#feedback');
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceId, templateId, formData)
        .then(() => {
            feedback.innerHTML = 'Sua mensagem foi enviada!'
            feedback.classList.remove('hidden');

            setTimeout(() => {
                feedback.innerHTML = '';
                feedback.classList.add('hidden');
            }, 2000)
        })
        .catch((e) => {
            console.error("Erro no envio", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar mensagem"
            submitButton.disabled = false;
        });
})