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

titleAnswer.textContent = qwestion.title;
contentAnswer.innerHTML = answer.map(({conent, className, classNameCont}) => {
    const children = conent.map(({teg, atributes, className, text}) => {
        let addAtributes = '';
        if(atributes)  for(const key in atributes) addAtributes += ' ' + key + '="' + atributes[key] + '"';
        return `<${teg} class="${className}" ${addAtributes}>${text || ''}</${teg}>`
    }).join('')
    
    return `<div class="${className} ${getClassForCont(conent, classNameCont)}">${children}</div>`
}).join('')


