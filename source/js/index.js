import { getData } from './api.js';
import { renderSpecialties, renderError } from './render.js';

const TABLET_WIDTH = '(min-width: 900px)';

const mediaQuery = window.matchMedia(TABLET_WIDTH);

const onMediaChange = (evt) => {
  if (!evt.matches) {
    return;
  }


  const activeTitles = Array.from(document.querySelectorAll('.module__title--active'));
  if (activeTitles.length > 0) {
    activeTitles.forEach((title) => {
      const button = title.querySelector('.module__button');
      button.setAttribute('aria-expanded', 'false');
      title.classList.remove('module__title--active');
    });
  }

  const moduleListWrappers = Array.from(document.querySelectorAll('.module__list-wrapper'));
  moduleListWrappers.forEach((wrapper) => {
    wrapper.removeAttribute('style');
  });
};

getData(renderSpecialties, renderError);

mediaQuery.addEventListener('change', onMediaChange);
