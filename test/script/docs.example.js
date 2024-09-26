// http://127.0.0.1:5500/docs.example.html?lang=uk&qwestion=1
// Получаем текущий URL

const urlParams = new URLSearchParams(window.location.search);
const langURL = urlParams.get('lang');
const questionURL = urlParams.get('qwestion');

const getQqwestion = () => {
    try {
        return lang[langURL]?.docs[questionURL];
    } catch (e){
        const d = lang.eng.docs[questionURL];
        if(d) return d;
        return lang.eng.docs[0] 
    }
}

