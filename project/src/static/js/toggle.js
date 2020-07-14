// const toggleButton = document.querySelectorAll("#toggleButton");

// toggleButton.addEventListener("click", () => {
//   if (this.innerText == "공개") {
//     this.innerHTML = "비공개";
//     this.classList.toggle(openNotOpen);
//   } else if (this.innerText == "비공개") {
//     this.innerHTML = "비공개";
//     this.classList.toggle(openNotOpen);
//   }
// });

$(".toggleButton").click(function () {

  if ($(this).text() == "공개") {
    $(this).text("비공개");
  } else if ($(this).text() == "비공개") {
    $(this).text("공개");
  }

  $(this).toggleClass("openNotOpen");

  var questionId = $(this).parent('div').children('#questionHide').text();

  $.ajax({
    url: `/hide`,
    dataType: 'text',
    type: 'POST',
    data: {data:questionId},
    error: function(){
      alert("에러가 발생했습니다. 다시 시도해주세요.");
    },
    success : function() {
    }
  });
});
