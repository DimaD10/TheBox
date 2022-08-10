(function () {
    const burger = document.querySelector('.burger__box');
    const menuBlock = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        menuBlock.classList.toggle('menu__active');
    });
}());