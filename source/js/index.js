import { getData } from './api.js';
import { renderSpecialties, renderError } from './render.js';

const TABLET_WIDTH = '(min-width: 900px)';

const mediaQuery = window.matchMedia(TABLET_WIDTH);

const onMediaChange = (evt) => {
  if (!evt.matches) {
    return;
  }

  const moduleLists = Array.from(document.querySelectorAll('.module__list'));
  moduleLists.forEach((list) => {
    list.removeAttribute('style');
  });
};

getData(renderSpecialties, renderError);

mediaQuery.addEventListener('change', onMediaChange);
