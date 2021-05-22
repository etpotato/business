const onButtonClick = (evt) => {
  evt.preventDefault();

  const button = evt.target;
  const module = button.closest('.module');
  const listWrapper = module.querySelector('.module__list-wrapper');
  const expanded = button.getAttribute('aria-expanded') === 'true';

  button.removeEventListener('click', onButtonClick);

  if (expanded) {
    module.classList.remove('module--active');
    listWrapper.style.maxHeight = 0;

    listWrapper.addEventListener('transitionend', () => {
      listWrapper.style.display = 'none';
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  } else {
    listWrapper.style.display = 'block';
    module.classList.add('module--active');
    listWrapper.style.maxHeight = listWrapper.scrollHeight + 'px';
    listWrapper.addEventListener('transitionend', () => {
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  }

  button.setAttribute('aria-expanded', !expanded);
};

export { onButtonClick };
