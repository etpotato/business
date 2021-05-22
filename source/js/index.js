import { getData } from './api.js';
import { renderSpecialties } from './render.js';

getData(renderSpecialties, () => supplyWrapper.before('Произошла ошибка загрузки!'));
