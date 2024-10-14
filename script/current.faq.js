// http://127.0.0.1:5500/docs.example.html?lang=uk&qwestion=1
// Получаем текущий URL

const urlParams = new URLSearchParams(window.location.search);
const langURL = urlParams.get('lang');
const questionURL = urlParams.get('qwestion');

const qwestion = datas.docs[0];
const answer = qwestion.answer;

const contentAnswer = document.querySelector('#content-answer');
const titleAnswer = document.querySelector('#title-answer');

function getClassForCont (conent){
    switch(conent.length){
        case 1 : return conent[0]?.classNameCont || 'center'
        case 2 : return 'evenly-center'
    }
}

titleAnswer.textContent = qwestion.title;

contentAnswer.innerHTML = answer.map(({conent, className}) => {
    const children = conent.map(({teg, atributes, className}) => {
        let addAtributes = '';
        if(atributes)  for(const key in atributes) addAtributes += ' ' + key + '="' + atributes[key] + '"';
        return `<${teg} class="${className}" ${addAtributes} ></${teg}>`
    }).join('')
    
    return `<div class="${className} ${getClassForCont(conent)}">${children}</div>`
}).join('')

// const getQwestion = () => {
//     try {
//         return lang[langURL]?.docs[questionURL];
//     } catch (e){
//         const d = lang.eng.docs[questionURL];
//         if(d) return d;
//         return lang.eng.docs[0] 
//     }
// }

