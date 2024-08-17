console.log(lang);

const questionsSection = document.querySelector(".questions");

//const questionsMarkup = lang.map(question => {
//return `<p class="q_title">${question.title}</p><p class="q_text">${question.texts[0]}</p>`
//} ).join('');

lang.map((q) => {
  let visible = false;
  const question = document.createElement("li");
  question.classList.add("question");
  question.textContent = q.title;
  questionsSection.append(question);
});

const questions = document.querySelectorAll(".question");

const filter = () => {
  const filterText = searchedInput.value.toLowerCase();

  questions.forEach((q) => {
    const qText = q.textContent.toLocaleLowerCase();
    if (qText.includes(filterText)) {
      let text = q.textContent;
      let regex = new RegExp(filterText, "gi");
      let highLightText = text.replace(regex, `<span class="highLight">${filterText}</span>`);
      q.innerHTML = highLightText;
      console.log(q.innerHTML)
      q.classList.remove("hidden");
    } else {
      q.classList.add("hidden");
    }
  });
}

searchedInput.addEventListener("input", filter);

//questionsSection.innerHTML =  questionsMarkup;
