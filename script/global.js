const headerMobileBtn = document.querySelector('#header-mobile-btn');
const navMenuMobile = document.querySelector('.nav-menu-mobile');
const html = document.querySelector('html');

headerMobileBtn.addEventListener('click', ()=> {
    headerMobileBtn.classList.toggle('menu-open')
    navMenuMobile.classList.toggle('menu-open')
    html.classList.toggle('lock-scroll');
    // document.querySelector('.links').classList.toggle('mobileMenu')
})
