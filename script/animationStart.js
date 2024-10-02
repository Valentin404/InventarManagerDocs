const animationsElements = document.querySelectorAll('.animationElement');

function setXandY(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function anim() {
    for (let index = 0; index < animationsElements.length; index++) {
        const animaten = animationsElements[index];
        const animaItemOfferset = setXandY(animaten).top;
        const animationHeight = animaten.offsetHeight;  
        const animItemPoint = window.innerHeight;

        if ((window.scrollY + animItemPoint > animaItemOfferset) 
            && (window.scrollY < animaItemOfferset + animationHeight)) {
            animaten.classList.add('anim');
        } 
        // else {
        //     animaten.classList.remove('anim'); // Удаляем класс, если элемент не в области видимости
        // }
    }
}

setTimeout(() => {
    if (animationsElements.length > 0) {
        window.addEventListener('scroll', anim);
        anim();
    }
    console.log(animationsElements);
}, 200);







