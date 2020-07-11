var is_hidden = 1;

$(document).ready(function() { 
  $(".left_container").css("width", "70vw");
  $(".right_container").css("display", "block");
  is_hidden = 0;
  
  if (localStorage.getItem('time') != null) {
    videojs('sample-video').currentTime(parseInt(localStorage.getItem('time')));
    videojs('sample-video').pause();
  }
  
  var selected = document.getElementById('class_index_selector');
  var curUrl = window.location.href;
  var lec = curUrl.substring(curUrl.length-1, curUrl.length);
  if (lec === "1") {
    selected.selectedIndex = 0;
  } else if (lec === "2"){
    selected.selectedIndex = 1;
  }
});

$('#class_index_selector').on("change", function() {
  localStorage.clear();
  var lec = $(this).val();
  location.href = `/prototype/${lec}`;
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

$('#questionFormMin').on('keyup', function() {
  if (/\D/.test(this.value)) {
      this.value = this.value.replace(/\D/g, '')
      alert('숫자만 입력가능합니다.');
  }
  var player = videojs('sample-video');
  var maxMin = parseInt(player.duration()/60);
  
  if (parseInt(this.value) > maxMin) {
      this.value = maxMin;
      alert('동영상 재생 시간을 벗어나는 값입니다.');
  }
});

$('#questionFormSec').on('keyup', function() {
  if (/\D/.test(this.value)) {
      this.value = this.value.replace(/\D/g, '')
      alert('숫자만 입력가능합니다.');
  }
  else if (parseInt(this.value) >= 60) {
    this.value = 59;
    alert('시간을 벗어나는 값입니다.');
  }

  var player = videojs('sample-video');
  var maxMin = parseInt(player.duration()/60);
  var runningTime = parseInt(player.duration());
  var curMin = parseInt(document.getElementById('questionFormMin').value);

  if ( curMin === maxMin) {
    if (parseInt(this.value) + curMin * 60 > runningTime) {
      this.value = runningTime - curMin * 60;
      alert('동영상 재생 시간을 벗어나는 값입니다.');
    }
  }
});