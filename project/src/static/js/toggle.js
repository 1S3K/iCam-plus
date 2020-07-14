const toggle = document.querySelector(".toggle-openToggleButton");

const lText = document.querySelector(".left-text");
const rText = document.querySelector(".right-text");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  lText.classList.toggle("none");
  rText.classList.toggle("none");
});
