const questionBtn = document.querySelector(".question_button");
const modal = document.querySelector(".modal");

questionBtn.addEventListener("click", function (event) {
  console.log("clicked");
  modal.style.display = "block";
});
