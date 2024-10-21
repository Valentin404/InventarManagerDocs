// http://127.0.0.1:5500/docs.example.html?lang=uk&qwestion=1
// Получаем текущий URL

const urlParams = new URLSearchParams(window.location.search);
const langURL = urlParams.get('lang');
const questionID = urlParams.get('qwestion');

// const qwestion = datas.docs[0];
const qwestion = datas.docs.find(({_id}) => questionID == _id );
const answer = qwestion.answer;

const contentAnswer = document.querySelector('#content-answer');
const titleAnswer = document.querySelector('#title-answer'); 



function getClassForCont (conent, classNameCont){
    switch(conent.length){
        case 1 : return classNameCont || 'center'
        case 2 : return 'evenly-center'
    }
}


const dopTitleQwestion = qwestion.img ? ` ( <img class="img-title" src="${qwestion.img}"/> ) ?` : ' ?' 
titleAnswer.innerHTML = qwestion.title + dopTitleQwestion;
contentAnswer.innerHTML = answer.map(({conent, className, classNameCont}) => {
    const children = conent.map(({teg, atributes, className, text, isNote}) => {
        let addAtributes = '';
        if(isNote) return `<${teg} class="${className}" ${addAtributes}> <span class="text-note">Note : </span> ${text || ''}</${teg}>`
        if(atributes)  for(const key in atributes) addAtributes += ' ' + key + '="' + atributes[key] + '"';
        switch(teg) {
            case 'img': return `<div class="phone-frame"><div class="speaker"></div><div class="camera"></div><div class="phone-bg"><${teg} class="${className}" ${addAtributes}>${text || ''}</${teg}></div></div>`
            default : return `<${teg} class="${className}" ${addAtributes}>${text || ''}</${teg}>`
        }
       
    }).join('')
    
    return `<div class="${className} ${getClassForCont(conent, classNameCont)}">${children}</div>`
}).join('')


