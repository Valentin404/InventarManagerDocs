const headerMobileBtn = document.querySelector('#header-mobile-btn');
const navMenuMobile = document.querySelector('.nav-menu-mobile');
const html = document.querySelector('html');
const contFilterBlack = document.querySelector('.cont-filter-black');

headerMobileBtn.addEventListener('click', ()=> {
    headerMobileBtn.classList.toggle('menu-open')
    navMenuMobile.classList.toggle('menu-open')
    html.classList.toggle('lock-scroll');
})

contFilterBlack.addEventListener('click', ()=> {
    headerMobileBtn.classList.toggle('menu-open')
    navMenuMobile.classList.toggle('menu-open')
    html.classList.toggle('lock-scroll');
})


const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");
if(type === 'apple') {
    const downloadBTN1 = document.getElementById('downloadBTN1');
    const downloadBTN2 = document.getElementById('downloadBTN2');
    const downloadBTN3 = document.getElementById('downloadBTN3');

    if(downloadBTN1) downloadBTN1.href = 'https://apps.apple.com/ua/app/inventory-manager-qr/id6743344992'
    if(downloadBTN2) downloadBTN2.href = 'https://apps.apple.com/ua/app/inventory-manager-qr/id6743344992'
    if(downloadBTN3) downloadBTN3.href = 'https://apps.apple.com/ua/app/inventory-manager-qr/id6743344992'

    const linkNextPages = document.querySelectorAll('#linkNextPage');
    linkNextPages.forEach(elem => elem.href += '?type=apple')


}
