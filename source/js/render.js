import { onButtonClick } from './accordion.js';

const SPECIALTY_NUMBER = 5;
const MODULE_NUMBER = 2;
const ITEM_NUMBER = 5;
const ERROR_MESSAGE = 'Ошибка загрузки. Обновите\u00A0страницу';

const progress = document.querySelector('.main__stream-progress');

const getRundomFromArray = (array) => {
  return array[Math.floor(array.length * Math.random())];
};

const renderModuleButton = () => {
  const button = document.createElement('button');
  button.classList.add('module__button');
  button.type = 'button';
  button.ariaExpanded = 'false';
  button.innerHTML = '<span class="visually-hidden">Открыть/скрыть секцию</span>';
  button.addEventListener('click', onButtonClick);
  return button;
};

const renderModuleList = (data) => {
  const list = document.createElement('ul');
  list.classList.add('module__list');
  data.forEach((dataItem) => {
    const item = document.createElement('li');
    item.classList.add('module__item');
    item.textContent = dataItem;
    list.append(item);
  });
  return list;
};

const renderModule = (data, number) => {
  const itemsData = data.specializedSubjects.slice(number * ITEM_NUMBER, (number * ITEM_NUMBER + ITEM_NUMBER));
  const list = renderModuleList(itemsData);

  if (list.childNodes.length === 0) {
    return '';
  }

  const module = document.createElement('section');
  module.classList.add('specialty__module', 'module');
  const title = document.createElement('h4');
  title.classList.add('module__title');
  title.textContent = `${number + 1} модуль`;
  title.append(renderModuleButton());

  module.append(title, list);
  return module;
};

const renderSpecialty = (data) => {
  const specialty = document.createElement('section');
  specialty.classList.add('main__specialty', 'specialty');

  const title = document.createElement('h3');
  title.classList.add('specialty__title');
  title.textContent = data.title;
  specialty.append(title);

  for (let i = 0; i < MODULE_NUMBER; i++) {
    specialty.append(renderModule(data, i));
  }

  return specialty;
};

const renderSpecialties = (data) => {
  const dataSlice = [];
  for (let i = 0; i < SPECIALTY_NUMBER; i++) {
    dataSlice.push(getRundomFromArray(data.data));
  }

  let j = 0;
  function render () {
    progress.before(renderSpecialty(dataSlice[j]));
    j++;
    if (j >= dataSlice.length) {
      return;
    }
    requestAnimationFrame(render);
  }

  render();
};

const renderError = () => {
  const error = document.createElement('p');
  error.classList.add('main__stream-error');
  error.textContent = ERROR_MESSAGE;

  progress.before(error);
};

export { renderSpecialties, renderError };
