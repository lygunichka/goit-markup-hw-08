(() => {
    const refs = {
        openMenuBtn: document.querySelector('.menu-open__btn'),
        closeMenuBtn: document.querySelector('.menu-close__btn'),
        menu: document.querySelector('.backdrop'),
        menuItem: document.querySelector('.menu-mob')
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menu.addEventListener('click', removeMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
    }

    function removeMenu(e) {
        if (e.target === refs.menu) {
            refs.menu.classList.add('is-hidden');
        }
    }
})();