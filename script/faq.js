const panelToggle = document.querySelector('.show-hide-panel');

(function(){
const types = datas.types;

const questionsCategory = document.querySelector('#questionsCategory')
const answersStack = document.querySelector('#answersStack')
const questionTitle = document.querySelector('#questionTitle')
const searchInput = document.querySelector('#searchInput')


function removeLastActive() {
  const lastActive = document.querySelector('.text.active-press')
  lastActive?.classList.remove('active-press')
}

function searchedQuestions(el) {
  const container = document.createElement("div");
  const readMoreBtn = document.createElement("a");
  const ask = document.createElement("p");

  container.classList.add("ask-card");
  container.classList.add("center-column");

  readMoreBtn.classList.add("btn");
  ask.classList.add('center');
  ask.classList.add("text");

  readMoreBtn.textContent = "Read more";

  readMoreBtn.href = location.hostname.includes('127')
    ? location.origin + '/FAQcurrent.html?qwestion=' + el._id
    : 'https://valentin404.github.io/InventarManagerDocs/FAQcurrent.html?qwestion=' + el._id // for reliz

    container.append(ask);
    
    if(el.img) {
      const img = document.createElement("img");
      img.src = el.img;
      img.classList.add('img-text-qwestion')
      container.append(img);
    } 
    
    ask.textContent = el.title + ' ?';

  container.append(readMoreBtn);
  answersStack.appendChild(container);
}

Object.keys(types).forEach((type) => {
  const question = document.createElement("span");
  question.textContent = types[type];
  question.classList.add("text");
  questionsCategory.appendChild(question);
  question.slot = type;


  question.onclick = () => {
    removeLastActive()
    question.classList.add("active-press");
    answersStack.innerHTML = "";
    questionTitle.textContent = question.textContent;

    datas.docs
      .filter((el) => el.type === type)
      .forEach(searchedQuestions);
  };


});

// questionsCategory.addEventListener("click", (e) => {
//   const slot = e.target.slot;
//   if(!slot) return;
//   const isClickQuestion = e.target.closest(".text");
//   const isClickBtn = e.target.closest(".btn");
//   console.log(isClickQuestion)
//   console.log(isClickBtn, 'isClickBtn')
//   if (!isClickQuestion && !isClickBtn) {
//     document
//       .querySelectorAll("span")
//       .forEach((el) => el.classList.remove("active-press"));
//     answersStack.innerHTML = "";
//     questionTitle.textContent = "Оберіть категорію питання";
//   }
// });

searchInput.addEventListener("input", () => {
  answersStack.innerHTML = "";
  if (searchInput.value.trim()) {
    removeLastActive()
    datas.docs
      .filter((el) => {
        const regex = new RegExp(searchInput.value, "gi");
        return el.title.match(regex);
      })
      .forEach(searchedQuestions);

    questionTitle.textContent = 'Текст для ручного поиска';
  }
});

console.log('-----------faq 0.0.001 ------')

})();

panelToggle.addEventListener('click', () => {
  questionsCategory.classList.toggle('show-panel');
  panelToggle.classList.toggle('show-panel');
  html.classList.toggle('lock-scroll');
});