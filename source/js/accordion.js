const onButtonClick = (evt) => {
  evt.preventDefault();

  const button = evt.target;
  const title = button.closest('.module__title');
  const listWrapper = title.parentNode.querySelector('.module__list-wrapper');
  const expanded = button.getAttribute('aria-expanded') === 'true';

  button.removeEventListener('click', onButtonClick);

  if (expanded) {
    title.classList.remove('module__title--active');
    listWrapper.style.maxHeight = 0;

    listWrapper.addEventListener('transitionend', () => {
      listWrapper.style.display = 'none';
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  } else {
    listWrapper.style.display = 'block';
    title.classList.add('module__title--active');
    listWrapper.style.maxHeight = listWrapper.scrollHeight + 'px';
    listWrapper.addEventListener('transitionend', () => {
      button.addEventListener('click', onButtonClick);
    }, { once: true });
  }

  button.setAttribute('aria-expanded', !expanded);
};

export { onButtonClick };
