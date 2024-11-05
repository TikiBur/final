document.addEventListener('DOMContentLoaded', () => {
    const burgerOpenButton = document.querySelector('#burger-open-button');
    const burgerCloseButton = document.querySelector('#burger-close-button');
    const burgerMenu = document.querySelector('#burger-menu');
    const burgerMenuContainer = document.querySelector('.burger-menu__container');
    const phoneOpenButton = document.querySelector('#phone-menu-open');
    const feedbackOpenButton = document.querySelector('#feedback-menu-open');

    
    burgerOpenButton.addEventListener('click', () => {
        burgerMenu.classList.add('burger-menu--active');
    });

    
    burgerCloseButton.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu--active');
    });

    phoneOpenButton.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu--active');
    });

    feedbackOpenButton.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu--active');
    });


    burgerMenu.addEventListener('click', (ev) => {
        if(!burgerMenuContainer.contains(ev.target)) {
            burgerMenu.classList.remove('burger-menu--active');
        }
    });
});