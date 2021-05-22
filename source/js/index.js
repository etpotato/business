import { getData } from './api.js';
import { renderSpecialties, renderError } from './render.js';

const TABLET_WIDTH = '(min-width: 900px)';

const mediaQuery = window.matchMedia(TABLET_WIDTH);

const onMediaChange = (evt) => {
  if (!evt.matches) {
    return;
  }

  const moduleListWrappers = Array.from(document.querySelectorAll('.module__list-wrapper'));
  moduleListWrappers.forEach((wrapper) => {
    wrapper.removeAttribute('style');
  });
};

getData(renderSpecialties, renderError);

mediaQuery.addEventListener('change', onMediaChange);
