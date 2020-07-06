var is_hidden = 1;


$(document).on("click",".extend_tab_button", function() {




  if (is_hidden == 0 ) // 보여지고 있을 때
  {
    $(".right_container").css("display","none");
    is_hidden = 1;
  }
  else                // 숨겨져 있을 때
  {
    $(".right_container").css("display","block");
    is_hidden = 0;
  }

  
});
