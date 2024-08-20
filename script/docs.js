console.log(lang);

const questionsSection = document.querySelector(".questions");

lang.forEach((q) => {
  let visible = false;
  const question = document.createElement("a");
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
      let highLightText = qText.replace(filterText, `<span class="highLight">${filterText}</span>`);
      q.innerHTML = highLightText;
      q.classList.remove("hidden");
    } else {
      q.classList.add("hidden");
    }
  });
}

searchedInput.addEventListener("input", filter);