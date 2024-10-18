const headerMobileBtn = document.querySelector('#header-mobile-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

headerMobileBtn.addEventListener('click', ()=> {
    headerMobileBtn.classList.toggle('menu-open')
    // document.querySelector('.links').classList.toggle('mobileMenu')
    
    //Блокирую скролл
    document.body.classList.toggle('lock-scroll');
    //Добавляю клас active для hamburger-menu
    hamburgerMenu.classList.toggle('active');
})