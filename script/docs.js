console.log(lang);

const questionsSection = document.querySelector(".questions");

lang.forEach((q) => {
  const question = document.createElement("a");
  question.classList.add("question");
  question.textContent = q.title;
  questionsSection.append(question);
});

const questions = document.querySelectorAll(".question");

const filter = () => {
  const filterText = searchedInput.value.toLocaleLowerCase();

  questions.forEach((q) => {
    const qText = q.textContent.toLocaleLowerCase();
    if (qText.includes(filterText)) {
      q.innerHTML = q.textContent.replace(new RegExp(filterText, 'gi'), (match) => `<span class="highLight">${match}</span>`);
      q.classList.remove("hidden");
    } else {
      q.classList.add("hidden");
    }
  });
}

searchedInput.addEventListener("input", filter);
