const showBtn = document.querySelector('.page__hamburger');
const menu = document.querySelector('.page__hamburgerMenu');
const hideBtn = document.querySelector('.page__close');
const images = document.querySelectorAll('.page__image');


const showMenu = () => {
    menu.style.display = 'grid';
    showBtn.classList.add('hide');
    menu.classList.add('page__hamburgerMenu--isActive');
    hideBtn.classList.remove('hide');
};
const hideMenu = () => {
    showBtn.classList.remove('hide');
    menu.classList.remove('page__hamburgerMenu--isActive');
    hideBtn.classList.add('hide');
};
const changeImg = () => {
    if(window.innerWidth >= 1081){
        images[0].setAttribute('src', 'images/desktop/image-deep-earth.jpg');
        images[1].setAttribute('src', 'images/desktop/image-night-arcade.jpg');
        images[2].setAttribute('src', 'images/desktop/image-soccer-team.jpg');
        images[3].setAttribute('src', 'images/desktop/image-grid.jpg');
        images[4].setAttribute('src', 'images/desktop/image-from-above.jpg');
        images[5].setAttribute('src', 'images/desktop/image-pocket-borealis.jpg');
        images[6].setAttribute('src', 'images/desktop/image-curiosity.jpg');
        images[7].setAttribute('src', 'images/desktop/image-fisheye.jpg');
    }
    else{
        images[0].setAttribute('src', 'images/mobile/image-deep-earth.jpg');
        images[1].setAttribute('src', 'images/mobile/image-night-arcade.jpg');
        images[2].setAttribute('src', 'images/mobile/image-soccer-team.jpg');
        images[3].setAttribute('src', 'images/mobile/image-grid.jpg');
        images[4].setAttribute('src', 'images/mobile/image-from-above.jpg');
        images[5].setAttribute('src', 'images/mobile/image-pocket-borealis.jpg');
        images[6].setAttribute('src', 'images/mobile/image-curiosity.jpg');
        images[7].setAttribute('src', 'images/mobile/image-fisheye.jpg');
    }
};

showBtn.addEventListener('click', showMenu);
hideBtn.addEventListener('click', hideMenu);
window.addEventListener('DOMContentLoaded', changeImg);
window.addEventListener('resize', changeImg);
