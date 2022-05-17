var img = new Image();
// 생성자 함수 사용
// 근데 그러면 Image라는 함수가 이 스크립트 어딘가에 있어야 하는 거 아님?


// 변수
// 스크롤될 이미지, 방향, 속도를 바꾸려면 변수값을 바꾼다.

img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // 값이 작을 수록 빨라진다
var scale = 1.05;  // ? 이거는 무슨 값일까?
//^이미지의 크기를 키우는 변수인듯
var y = -4.5; // 수직 옵셋

// 주요 프로그램

var dx = 0.75;
var imgW; // 변수선언
var imgH; // 변수선언
var x = 0;
var clearX;
var clearY;
var ctx;
// 밖으로 빼서 전역 으로 쓸 수 있는 변수를 만든 거 같음



img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // 캔버스보다 큰 이미지
    if (imgW > CanvasXSize) { clearX = imgW; } // 캔버스보다 큰 이미지
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } // 캔버스보다 큰 이미지
    else { clearY = CanvasYSize; }
    // 캔버스 요소 얻기
    ctx = document.getElementById('canvas').getContext('2d');
    // 새로 그리기 속도 설정
    return setInterval(draw, speed);
}

function draw() {
    // 캔버스를 비운다
    ctx.clearRect(0,0,clearX,clearY);
    // 이미지가 캔버스보다 작거나 같다면 (If image is <= Canvas Size)
    if (imgW <= CanvasXSize) {
        // 재설정, 처음부터 시작
        if (x > (CanvasXSize)) { x = 0; }
        // 추가 이미지 그리기
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    // 이미지가 캔버스보다 크다면 (If image is > Canvas Size)
    else {
        // 재설정, 처음부터 시작
        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
        // 추가 이미지 그리기
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    // 이미지 그리기
    ctx.drawImage(img,x,y,imgW,imgH);
    // 움직임 정도
    x += dx;
}