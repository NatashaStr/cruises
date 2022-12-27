const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.header__button');
const wrapper = document.querySelector('.header__nav');

header.classList.remove('header__menu--no-js');
header.classList.add('header__menu--closed');

const initBurger = () => {
  header.classList.add('header__menu--closed');
  burgerBtn.addEventListener('click', toggleBurger);
};

const toggleBurger = () => {
  header.classList.toggle('header__menu--closed');
  header.classList.toggle('header__menu--opened');
  document.body.classList.toggle('scroll-lock');
};

const burgerClickHandler = (e) => {
  if (e.target.classList.contains('header__nav')) {
    toggleBurger();
  }
  if (e.target.classList.contains('header__nav-link')) {
    toggleBurger();
  }
};

const breakpoint = window.matchMedia(`(min-width:768px)`);

const breakpointChecker = () => {
  if (breakpoint.matches) {
    burgerBtn.removeEventListener('click', toggleBurger);
  } else {
    wrapper.addEventListener('click', (e) => burgerClickHandler(e));
  }
};
// toggle.addEventListener('click', () => {
//   if (header.classList.contains('header__menu--closed')) {
//     header.classList.remove('header__menu--closed');
//     header.classList.add('header__menu--opened');
//   } else {
//     header.classList.add('header__menu--closed');
//     header.classList.remove('header__menu--opened');
//   }
// });

export {initBurger, breakpointChecker, burgerBtn};
