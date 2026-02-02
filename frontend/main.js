import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import { images } from './modules/images';
import setImage from './modules/setImage';

setImage('.logo', images.logo);
setImage('.melhores-ano', images.melhoresAno);
setImage('.about-banner', images.aboutBanner);
setImage('.criancas-banner', images.criancasBanner);
setImage('.feminina-banner', images.femininaBanner);
setImage('.oficina-banner', images.oficinaBanner);
setImage('.principal-banner', images.principalBanner);

import btnFunc from './modules/buttons';
btnFunc();

import trocaMapa from './modules/switchMap';
trocaMapa();