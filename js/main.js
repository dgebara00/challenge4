const showBtn = document.querySelector('.page__hamburger');
const menu = document.querySelector('.page__hamburgerMenu');
const hideBtn = document.querySelector('.page__close');

const showMenu = () => {
    showBtn.classList.add('hide');
    menu.classList.remove('hide');
    hideBtn.classList.remove('hide');
};
const hideMenu = () => {
    showBtn.classList.remove('hide');
    menu.classList.add('hide');
    hideBtn.classList.add('hide');
};

showBtn.addEventListener('click', showMenu);
hideBtn.addEventListener('click', hideMenu);
