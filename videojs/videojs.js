/**
 * 이런 식으로 'sample-video'라는 클래스명을 가진 비디오에 접근할 수 있고
 * 그냥 전통적인 dom 접근방식으로
 * let v = document.querySelector('sample-video') 해도 무방.
 */
let v = videojs('sample-video');

/**
 * 비디오가 준비될 때의 콜백함수들.
 * 함수명만 봐도 느낌이 온다.
 */
v.ready(()=>{
  // v.volume(0.5);
  // v.muted(false);
  // v.isFullscreen(true);
  // v.play();
  // v.pause();
  // v.currentTime(120);
  // v.addClass('vstyle');
})

/**
 * 이런 식으로 css를 적용하려면
 * 해당하는 class명을 부여할 수 있음.
 * 어떤 스타일인지는 videojs.css 참조.
 */
v.addClass('vstyle');
