const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');

const question_button = document.querySelector(".question_button");
const comment_button = document.querySelector(".comment_button");
const edit_button = document.querySelector(".editBtn");

question_button.onclick = function () {
  if (question_button.innerHTML === "질문하기") {
    modal1.style.display = "block";
    var player = videojs('sample-video');
    
    player.pause();

    var min = parseInt(player.currentTime()/60);
    var sec = parseInt(player.currentTime()%60);

    document.getElementById('questionFormMin').value = min;
    document.getElementById('questionFormSec').value = sec;

    localStorage.clear();
    localStorage.setItem("time", player.currentTime());

  } else if ( question_button.innerHTML === "화상채팅 연결하기") {
    var date = new Date();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var curDay = date.getDay();
    var curHour = date.getHours() % 12;

    if (document.getElementById('office_day').value === week[curDay]) {
      if (parseInt(document.getElementById('office_start_hour').value) <= curHour && parseInt(document.getElementById('office_end_hour').value) > curHour) {
        window.open("https://skku-ict.webex.com/meet/smallkong", 'webex meeting');
      } else {
        alert('현재는 정해진 시간이 아닙니다.');
      }
    } else {
      alert('현재는 정해진 시간이 아닙니다.');
    }

    localStorage.clear();
    localStorage.setItem('type','cam');
  }
};

edit_button.onclick = function () {
  modal2.style.display = "block";

  var question = $(this).parents('div#question_bar_opened');
  var questionId = question.children('div#questionListId').text();
  var time = question.children('a#queTim').text();
  var min = time.substring(0,2);
  var sec = time.substring(3,5);
  var title = question.children('div#queTit').text();
  var content = question.children('div.question_container').children('div#question_text').children('p').text();
  content = content.replace(/^\s*/,"");

  document.getElementById('questionIdForEdit').value = questionId;
  document.getElementById('editFormMin').value = min;
  document.getElementById('editFormSec').value = sec;
  document.getElementById('e__title').value = title;
  document.getElementById('e_textarea__contents').innerText = content;
};