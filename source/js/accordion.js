const LIST_PADDING = 17;

const onButtonClick = (evt) => {
  evt.preventDefault();

  const button = evt.target;
  const module = button.closest('.module');
  const list = module.querySelector('.module__list');
  const expanded = button.getAttribute('aria-expanded') === 'true';

  button.removeEventListener('click', onButtonClick);

  if (expanded) {
    module.classList.remove('module--active');
    list.style.padding = 0;
    list.style.maxHeight = 0;

    list.addEventListener('transitionend', () => {
      list.style.display = 'none';
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  } else {
    list.style.display = 'block';
    requestAnimationFrame(() => module.classList.add('module--active'));
    list.style.padding = `${LIST_PADDING}px 0`;
    list.style.maxHeight = list.scrollHeight + (LIST_PADDING * 2) + 'px';

    list.addEventListener('transitionend', () => {
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  }

  button.setAttribute('aria-expanded', !expanded);
};

export { onButtonClick };
