(function () {
  const types = datas.types;

  const questionsCategory = document.querySelector("#questionsCategory");
  const answersStack = document.querySelector("#answersStack");
  const questionTitle = document.querySelector("#questionTitle");
  const questionTitle2 = document.querySelector("#questionTitle2");
  const searchInput = document.querySelector("#searchInput");
  const searchInput2 = document.querySelector("#searchInput2");
  const rightPanel = document.querySelector(".right-panel");
  const panelToggle = document.querySelector(".panel-toggle");

  function removeLastActive() {
    const lastActive = document.querySelector(".text.active-press");
    lastActive?.classList.remove("active-press");
  }

  function searchedQuestions(el) {
    const container = document.createElement("div");
    const readMoreBtn = document.createElement("a");
    const ask = document.createElement("p");

    container.classList.add("ask-card");
    container.classList.add("center-column");

    readMoreBtn.classList.add("btn");
    ask.classList.add("center");
    ask.classList.add("text");

    readMoreBtn.textContent = "Read more";

    readMoreBtn.href = location.hostname.includes("127")
      ? location.origin + "/FAQcurrent.html?qwestion=" + el._id
      : "https://valentin404.github.io/InventarManagerDocs/FAQcurrent.html?qwestion=" +
        el._id; // for reliz

    container.append(ask);

    if (el.img) {
      const img = document.createElement("img");
      img.src = el.img;
      img.classList.add("img-text-qwestion");
      container.append(img);
    }

    ask.textContent = el.title + " ?";

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
      removeLastActive();
      searchInput.value = searchInput2.value = "";
      question.classList.add("active-press");
      answersStack.innerHTML = "";
      questionTitle.textContent = questionTitle2.textContent =
        question.textContent;

      datas.docs.filter((el) => el.type === type).forEach(searchedQuestions);
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

  function searchOptions() {
    answersStack.classList.remove("center-title", "searching-title");
    answersStack.innerHTML = "";
    searchInput.value = searchInput2.value = this.value;

    const query = this.value.trim();

    if (query) {
        removeLastActive();
        const filteredQuestions = datas.docs.filter(el => new RegExp(query, "gi").test(el.title));

        if (filteredQuestions.length) {
            filteredQuestions.forEach(searchedQuestions);
            questionTitle.textContent = questionTitle2.textContent = "Text for manual entry";
        } else {
            answersStack.classList.add("searching-title");
            answersStack.textContent = "Nothing found";
        }
    } else {
        answersStack.classList.add("searching-title");
        questionTitle.textContent = questionTitle2.textContent = "Select the category of the question";
        answersStack.textContent = "Type that into the search to get results or select one of the question topics.";
    }
}


  searchInput.addEventListener("input", searchOptions);
  searchInput2.addEventListener("input", searchOptions);

  panelToggle.addEventListener("click", () => {
    rightPanel.classList.toggle("show-panel");
    html.classList.toggle("lock-scroll");
  });

  console.log("-----------faq 0.0.001 ------");
})();
