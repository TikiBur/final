document.addEventListener('DOMContentLoaded', () => {
    const phoneOpenButton = document.querySelector('#phone-menu-open');
    const phoneOpenButtonTl = document.querySelector('#phone-menu-open-tl');
    const phoneCloseButton = document.querySelector('#phone-menu-close');
    const phoneMenu = document.querySelector('#phone-menu');
    const phoneMenuContainer = document.querySelector('.phone-menu__container');

    
    phoneOpenButton.addEventListener('click', () => {
        phoneMenu.classList.add('phone-menu--active');
    });

    phoneOpenButtonTl.addEventListener('click', () => {
        phoneMenu.classList.add('phone-menu--active');
    });

    
    phoneCloseButton.addEventListener('click', () => {
        phoneMenu.classList.remove('phone-menu--active');
    });

    phoneMenu.addEventListener('click', (ev) => {
        if(!phoneMenuContainer.contains(ev.target)) {
            phoneMenu.classList.remove('phone-menu--active');
        }
    });
});