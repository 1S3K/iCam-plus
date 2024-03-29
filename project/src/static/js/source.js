var is_hidden = 0;

$(document).ready(function () {
  $(".left_container").css("width", "70vw");
  $(".right_container").css("display", "block");
  is_hidden = 0;

  if (localStorage.getItem("type") === 'cam') {
    var main_question = document.getElementById("main_question");
    var video_chat_container = document.getElementById("video_chat_container");
    var question_button = document.querySelector(".question_button");

    main_question.style.display = "none";
    video_chat_container.style.display = "block";
    question_button.innerHTML = "화상채팅 연결하기";
  }

  if (localStorage.getItem("time") != null) {
    videojs("sample-video").currentTime(parseInt(localStorage.getItem("time")));
    videojs("sample-video").pause();
  }

  if (localStorage.getItem("selectedQuestion") != null) {
    console.log(localStorage.getItem("selectedQuestion"));
  }

  var selected = document.getElementById("class_index_selector");
  var curUrl = window.location.href;
  var lec = curUrl.substring(curUrl.length - 1, curUrl.length);
  if (lec === "1") {
    selected.selectedIndex = 0;
  } else if (lec === "2") {
    selected.selectedIndex = 1;
  }
});

$("#class_index_selector").on("change", function () {
  localStorage.clear();
  var lec = $(this).val();
  location.href = `/prototype/${lec}`;
});

$(document).on("click", ".extend_tab_button", function () {
  var etdBtn = document.getElementById("entendBtn");
  if (is_hidden == 0) {
    // 보여지고 있을 때
    $(".left_container").css("width", "97vw");
    $(".right_container").css("display", "none");
    is_hidden = 1;
    etdBtn.innerText = "질문창 열기";
  } // 숨겨져 있을 때
  else {
    $(".left_container").css("width", "70vw");
    $(".right_container").css("display", "block");
    is_hidden = 0;
    etdBtn.innerText = "질문창 닫기";
  }
});

$(document).on("click", ".expand_button", function () {
  localStorage.setItem("time", videojs("sample-video").currentTime());

  if ($(this).parent().attr("id") == "question_bar") {
    $(this).parent().attr("id", "question_bar_opened");
  } else {
    $(this).parent().attr("id", "question_bar");
  }
});

$(document).on("click", "#comment_upload_button", function () {
  var ques = $(this).parent("form").children("input#questionIdValue").val();
  localStorage.setItem("selectedQuestion", ques);
});

$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

$("#questionFormMin").on("keyup", function () {
  if (/\D/.test(this.value)) {
    this.value = this.value.replace(/\D/g, "");
    alert("숫자만 입력가능합니다.");
  }
  var player = videojs("sample-video");
  var maxMin = parseInt(player.duration() / 60);

  if (parseInt(this.value) > maxMin) {
    this.value = maxMin;
    alert("동영상 재생 시간을 벗어나는 값입니다.");
  }
});

$("#questionFormSec").on("keyup", function () {
  if (/\D/.test(this.value)) {
    this.value = this.value.replace(/\D/g, "");
    alert("숫자만 입력가능합니다.");
  } else if (parseInt(this.value) >= 60) {
    this.value = 59;
    alert("시간을 벗어나는 값입니다.");
  }

  var player = videojs("sample-video");
  var maxMin = parseInt(player.duration() / 60);
  var runningTime = parseInt(player.duration());
  var curMin = parseInt(document.getElementById("questionFormMin").value);

  if (curMin === maxMin) {
    if (parseInt(this.value) + curMin * 60 > runningTime) {
      this.value = runningTime - curMin * 60;
      alert("동영상 재생 시간을 벗어나는 값입니다.");
    }
  }
});

$(".index_button:first-child").on("click", function () {
  const main_question = document.getElementById("main_question");
  const video_chat_container = document.getElementById("video_chat_container");
  const question_button = document.querySelector(".question_button");

  main_question.style.display = "block";
  video_chat_container.style.display = "none";
  question_button.innerHTML = "질문하기";

  localStorage.clear();
});

$(".video_chat_button").on("click", function () {
  const main_question = document.getElementById("main_question");
  const video_chat_container = document.getElementById("video_chat_container");
  const question_button = document.querySelector(".question_button");

  main_question.style.display = "none";
  video_chat_container.style.display = "block";
  question_button.innerHTML = "화상채팅 연결하기";

  localStorage.clear();
  localStorage.setItem('type', 'cam');
});

$(".cmt_delete_btn").on("click", function () {

  if (confirm('정말 삭제하시겠습니까?')) {
    var commentId = $(this).parent('div#question_professor').children("div#commentId").text();
    
    var url = window.location.href;
    var lec = url.charAt(url.length-1);

    $.ajax({
      url: `/deleteComment`,
      dataType: 'text',
      type: 'POST',
      data: {data:commentId},
      // error:function(request,status,error){
      //   alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      // },
      error: function(){
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
      success : function() {
        // var cmtBox = $(this).parents('#commentList')
        
        // if (cmtBox.css('display') === 'inline')
        //   cmtBox.css('display', 'none');
        location.href = `/prototype/${lec}`;
      }
    });

  } else {
    return false;
  }
});

$(".preq_del_btn").on("click", function () {

  if (confirm('정말 삭제하시겠습니까?')) {
    var commentId = $(this).parent('div').children("div#commentId").text();
    
    var url = window.location.href;
    var lec = url.charAt(url.length-1);

    $.ajax({
      url: `/deleteComment`,
      dataType: 'text',
      type: 'POST',
      data: {data:commentId},
      // error:function(request,status,error){
      //   alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      // },
      error: function(){
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
      success : function() {
        localStorage.clear();
        localStorage.setItem('type', 'cam');
        location.href = `/prototype/${lec}`;
      }
    });

  } else {
    return false;
  }
});