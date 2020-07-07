const modal = document.querySelector(".modal");

const question_button = document.querySelector(".question_button");

const span = document.querySelector(".close");

question_button.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
