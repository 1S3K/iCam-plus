var is_hidden = 1;

$(document).ready(function() { 
  if (localStorage.getItem('time') != null) {
    videojs('sample-video').currentTime(parseInt(localStorage.getItem('time')));
  }
});

$(document).on("click", ".extend_tab_button", function () {
  if (is_hidden == 0) {
    // 보여지고 있을 때
    $(".left_container").css("width", "97vw");
    $(".right_container").css("display", "none");
    is_hidden = 1;
  } // 숨겨져 있을 때
  else {
    $(".left_container").css("width", "70vw");
    $(".right_container").css("display", "block");
    is_hidden = 0;
  }
});

$(document).on("click", ".expand_button", function () {
  localStorage.setItem("time", videojs('sample-video').currentTime());
  if ($(this).parent().attr("id") == "question_bar") {
    $(this).parent().attr("id", "question_bar_opened");
  } else {
    $(this).parent().attr("id", "question_bar");
  }
});



$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

