함수 알고리즘 구상

내가 만들고 싶은 게임 작동 방식 
- 방향키로 좌우를 조작하는 서핑 게임 형식 차용





그러면 어떻게 작동해야 할까?
1. 시작하면 일정하게 앞으로 움직여야함
      - 화면이 뒤로 가면 되지 않나?
      - 유저는 가만히 있고 주변의 장애물들을 움직여여함
        -- > 지도를 그려서 배경을 만들기 -> 좌표를 찍어서 장애물 배치
      - 일정한 움직임
        --> 반복문
      for (let time = 0; time <게임 진행시간; 1++){
        배경의 위치가 y축에서 -time만큼 이동한다
      }

        내가 엄청 넓은 지도를 다 그릴수는 없을 테니 가는 정도에 한계가 있어야하는 데?
        -> 그러면 주변을 해변이나 방파제나 세이프라인(이거 맞니)로 막자
        

2. 그 속도가 일정하게 증가해야함
      - 장애물들과 배경이 뒤로 가는 속도가 빨라짐
      - 속도의 일정한 증가
        --> 반복문
        for (let time = 0; time <게임 진행시간; 1++){
          for (let i = 0; i < 더이상 빨라지면 안되는 속도 ; i++){
            배경의 위치가 y축에서 -time만큼 이동한다
            1초 지나면 -(time+i)
          }
      }
-> 이렇게 만드니까 너무 뚝뚝 끊김 좀더 부드럽게 움직였으면 좋겠음
-> 애니매이션을 주고 그 속도 변화를 조절할 수 있는 방법으로 해결해보려함


3. 방향키를 누를시 앞으로 나아가는 방향 틀기
      - 장애물과 배경의 각도를 바꾸기
      --> 방향키 이벤트 가져오기
        --> 방향키를 이벤트가 일어나면 화면의 각도 바꾸기

        <!-- ! 방향키 이벤트라네 분석해 볼것 -->
        document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}



4. 무언가에 부딪치면 멈추고 실패 창 띄우기

닿았다 라는 판단은 어떻게 하면 되는 걸까?

      - 무언가의 크기 정하고
      - 그 크기의 자리에 겹치게 되면
        --> if문 
      - 멈추고 실패 창 띄우기
      if(surfer가 장애물과 px이 겹치면?){
        1. 화면을 멈춘다
        2. 화면을 어둡게 만든다
        3. fail창을 띄운다(다시시작과 이탈버튼)
      }


5. 골에 다다르면 성공 창 띄우기
      - 일정 시간이 지나면 골라인이 나오게 되고 그 골라인을 넘으면 성공창과 스토리로 넘어가기로 들어감
      - --> if (surfer의 x축 값이 정해진 x축을 넘어가면 ){
        1. 모든 작동을 멈추고
        2. 화면을 어둡게 하고
        3. scucess 창을 띄운다  
      }





W3school 에 비슷한 느낌의 게임이 예제로 나와있어서 가져옴