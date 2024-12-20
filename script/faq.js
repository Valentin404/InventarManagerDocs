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
      : "https://inventory-manager-com.netlify.app/faqcurrent?qwestion=" +
      // : "https://valentin404.github.io/InventarManagerDocs/FAQcurrent.html?qwestion=" +
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
      answersStack.classList.remove("center-title", "searching-title");
      answersStack.innerHTML = "";
      questionTitle.textContent = questionTitle2.textContent =
        question.textContent;

      datas.docs.filter((el) => el.type === type).forEach(searchedQuestions);
      rightPanel.classList.remove("show-panel");
      panelToggle.classList.remove("show-panel");
      html.classList.remove("lock-scroll");
    };
  });

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
            answersStack.textContent = "Not found. (Please enter English characters only)";
        }
    } else {
        answersStack.classList.add("searching-title");
        answersStack.textContent = "Type that into the search to get results or select one of the question topics.";
    }
}


  searchInput.addEventListener("input", searchOptions);
  searchInput2.addEventListener("input", searchOptions);

  panelToggle.addEventListener("click", () => {
    rightPanel.classList.toggle("show-panel");
    panelToggle.classList.toggle("show-panel");
    html.classList.toggle("lock-scroll");
  });
})();
