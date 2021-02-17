const showBtn = document.querySelector('.page__hamburger');
const menu = document.querySelector('.page__hamburgerMenu');
const hideBtn = document.querySelector('.page__close');

const showMenu = () => {
    showBtn.classList.add('hide');
    menu.classList.add('page__hamburgerMenu--isActive');
    hideBtn.classList.remove('hide');
};
const hideMenu = () => {
    showBtn.classList.remove('hide');
    menu.classList.remove('page__hamburgerMenu--isActive');
    hideBtn.classList.add('hide');
};

showBtn.addEventListener('click', showMenu);
hideBtn.addEventListener('click', hideMenu);