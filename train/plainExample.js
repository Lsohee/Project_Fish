var id = null;
// ? 왜 그냥 id라는 변수를 선언하기만 하지 않고 굳이 null을 주는 걸까?

function myMove() {
  //함수 myMove를 만들 건데
  
  var elem = document.getElementById("myAnimation");
  //myAnimation이라는 id를 가진 요소를 문서에서 가져와서 elem이라고 선언
  
  var pos = 0;
  //pos이라는 변수를 0이라고 선언 할당 (pos라는 이름으로 유추했을때 위치인가봐)
  
  clearInterval(id);
  // clearInterval을 먼저썼네
  
  id = setInterval(frame, 10);
  //오 함수를 새로 지정해서 콜백 함수 자리에 넣음
  
  function frame() {
    // 근데 그 함수가 frame이고 
    if (pos == 350) {
      //  만약 pos 이 350과 같다면 
      clearInterval(id);
      // clearInterval(id)를 실행해줘
    } else {
      // 아니면
      pos++;
      // pos++해주고
      elem.style.top = pos + 'px';
      //elem의 스타일중 top의 값을 pos + px
      elem.style.left = pos + 'px';
      //elem의 스타일중 left의 값을 pos + px
    }
  }
}