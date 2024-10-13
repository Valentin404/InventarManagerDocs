//Вытаскиваю категории вопросов обьект types
const types = datas.types;


//Пробегаюсь по обьекту types
Object.keys(types).forEach((type) => {
  //Создаю тег для категории вопроса
  const question = document.createElement("span");
  //Достаю текст для категории вопроса
  question.textContent = types[type];
  //Добавляю класс тегу
  question.classList.add("text");
  //Добавляю категорию вопроса в теге span в html левую колонку секции c id "questionsCategory"
  questionsCategory.appendChild(question);
  //Обрабатываю нажатие на категорию вопрос
  question.onclick = () => {
    //Удаляю цвет после нажатия. С другой категории вопроса
    document
      .querySelectorAll("span")
      .forEach((el) => el.classList.remove("active-press"));
    //Добавляю жёлтый цвет нажатия
    question.classList.add("active-press");
    //Очищаю контейнер правой колонки с ответами(вопросами категории)
    answersStack.innerHTML = "";
    //Добавляю на заголовок название категории id элемента questionTitle
    questionTitle.textContent = question.textContent;
    //Прохожусь фильтром и отбираю вопросы по категории и всиавляю в html
    datas.docs
      .filter((el) => el.type === type)
      .forEach((el) => {
        searchedQuestions(el);
      });
  };
});

//При расфокусе вопроса(клик вне него)
//Убираю выделение категории вопроса
//Так-же при blur элемента
document.addEventListener("click", (e) => {
  //Проверяю был ли клик на вопрос в левой колонке
  const isClickQuestion = e.target.closest(".text");
  //Проверяю бы ли клик по кнопке
  const isClickBtn = e.target.closest(".btn");
  //Если клик вне вопроса, убираю выделение
  if (!isClickQuestion && !isClickBtn) {
    document
      .querySelectorAll("span")
      .forEach((el) => el.classList.remove("active-press"));
    //Очищаю контент блока с карточками вопросов(ответы)
    answersStack.innerHTML = "";
    //Возваращаю дефолтный текст заголовка
    questionTitle.textContent = "Оберіть категорію питання";
  }
});

//Логика для поиска вопросов с помощью input
searchInput.addEventListener("input", () => {
  answersStack.innerHTML = "";
  if (searchInput.value.trim()) {
    datas.docs
      .filter((el) => {
        const regex = new RegExp(searchInput.value, "gi");
        return el.title.match(regex);
      })
      .forEach((el) => {
       searchedQuestions(el)
      });
  }
});

//Фукция для фильтрации вопросов(карточек)
function searchedQuestions(el) {
  //Создаю карточку для вопроса из массива
  const container = document.createElement("div");
  container.classList.add("ask-card");
  container.classList.add("center-column");
  const readMoreBtn = document.createElement("button");
  readMoreBtn.textContent = "Read more";
  readMoreBtn.classList.add("btn");
  const ask = document.createElement("p");
  ask.classList.add("text");
  ask.textContent = el.title;
  container.append(ask);
  container.append(readMoreBtn);
  //Добавляю в html ответы(карточки с вопросами)
  answersStack.appendChild(container);
}