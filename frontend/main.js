import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import { images } from './modules/images';

document.querySelector('.logo').src = images.logo;
document.querySelector('.melhores-ano').src = images.melhoresAno;
document.querySelector('.about-banner').src = images.aboutBanner;
document.querySelector('.criancas-banner').src = images.criancasBanner;
document.querySelector('.feminina-banner').src = images.femininaBanner;
document.querySelector('.oficina-banner').src = images.oficinaBanner;
document.querySelector('.principal-banner').src = images.principalBanner;

import btnFunc from './modules/buttons';
btnFunc();

import trocaMapa from './modules/switchMap';
trocaMapa();