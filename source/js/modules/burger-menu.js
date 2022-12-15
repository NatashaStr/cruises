const header = document.querySelector('.header');
const toggle = document.querySelector('.header__button');

header.classList.remove('header__menu--opened');
header.classList.add('header__menu--closed');

toggle.addEventListener('click', () => {
  if (header.classList.contains('header__menu--closed')) {
    header.classList.remove('header__menu--closed');
    header.classList.add('header__menu--opened');
  } else {
    header.classList.add('header__menu--closed');
    header.classList.remove('header__menu--opened');
  }
});
