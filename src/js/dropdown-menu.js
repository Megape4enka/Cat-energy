(function () {
    let nav = document.querySelector('.main-nav');
    let toggle = nav.querySelector('.toggle');

    nav.classList.remove('main-nav--no-js');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('main-nav--opened');
    });
})();