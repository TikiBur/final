document.addEventListener('DOMContentLoaded', () => {
    const feedbackOpenButton = document.querySelector('#feedback-menu-open');
    const feedbackOpenButtonTl = document.querySelector('#feedback-menu-open-tl');
    const feedbackCloseButton = document.querySelector('#feedback-menu-close');
    const feedbackMenu = document.querySelector('#feedback-menu');
    const feedbackMenuContainer = document.querySelector('.feedback-menu__container');


    feedbackOpenButton.addEventListener('click', () => {
        feedbackMenu.classList.add('feedback-menu--active');
    });

    feedbackOpenButtonTl.addEventListener('click', () => {
        feedbackMenu.classList.add('feedback-menu--active');
    });


    feedbackCloseButton.addEventListener('click', () => {
        feedbackMenu.classList.remove('feedback-menu--active');
    });

    feedbackMenu.addEventListener('click', (ev) => {
        if(!feedbackMenuContainer.contains(ev.target)) {
            feedbackMenu.classList.remove('feedback-menu--active');
        }
    });
})