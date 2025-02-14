let comScore = 0;
let userScore = 0;

let isComputerTurn = true;
let shootLeft = 15;

// 여기에 리팩토링 할 함수화 진행 -> 반복이 되는 데 짧아서 대체 가능 한 코드라인

// 농구 컴퓨터 AI 성능 개선 부분 관련 변수 선언
let comPercent2 = 0.5;
let comPercent3 = 0.33;

// 컴퓨터만 고칠건데 코드 내에 리터럴 데이터가 있는 것은 바람직하지 않으므로 userPercent2 / 3 도 정의함
let userPercent2 = 0.5;
let userPercent3 = 0.33;

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;

  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');
  userScore += score;

  userScoreElement.innerHTML = userScore;
}

function disableComButton(flag){
  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i=0; i<computerButtons.length; i++){
    computerButtons[i].disabled = flag;
  }
}

function disableUserButton(flag){
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i=0; i<userButtons.length; i++){
    userButtons[i].disabled = flag;
  }
}

function updateAI(){
  let difference = userScore - comScore;
  if (difference > 11) {
    comPercent2 = 0.7;
    comPercent3 = 0.43;
  } else if(difference > 7) {
    comPercent2 = 0.6;
    comPercent3 = 0.38;
  } else if(difference < -11){
    comPercent2 = 0.3;
    comPercent3 = 0.23;
  } else if(difference < -7){
    comPercent2 = 0.4;
    comPercent3 = 0.28;
  }
}

// 기능 구현 완료 후에 리팩토링이 적용되는 부분
function onComputerShoot() {
if(!isComputerTurn) return;

  updateAI();

let shootType = Math.random() < 0.5 ? 2 : 3;

if (shootType == 2) {
  if (Math.random() < comPercent2) {
    showText('💻컴퓨터가 2점 슛을 성공했습니다!🙄 Now : User');
    updateComScore(2);

  } else {
    showText('💻컴퓨터가 2점 슛을 실패했습니다!😙 Now : User');
  }
}
else {
  if(Math.random() < comPercent3) {
    showText('💻컴퓨터가 3점 슛을 성공했습니다!🙄🙄 Now : User');
    updateComScore(3);

  } else {
    showText('💻컴퓨터가 3점 슛을 실패했습니다!😙😙 Now : User');
  }
}
  isComputerTurn = false;

  disableComButton(true);

  disableUserButton(false);
}

function onUserShoot(shootType) {
if (isComputerTurn) return;

if (shootType == 2) {
  if (Math.random() < 0.5) {
    showText('2점 슛을 성공했습니다!😙 Now : Computer');
    updateUserScore(2);

  } else {
    showText('2점 슛을 실패했습니다!🙄 Now : Computer');
  }
}
else {
  if(Math.random() < 0.33) {
    showText('3점 슛을 성공했습니다!😙😙 Now : Computer');
    updateUserScore(3);

  } else {
    showText('3점 슛을 실패했습니다!🙄🙄 Now : Computer');
  }
}
isComputerTurn = true;

disableComButton(false);

disableUserButton(true);

shootLeft--;

let shootLeftElement = document.getElementById('shoots-left');
shootLeftElement.innerHTML = shootLeft;

if(shootLeft === 0) {
  disableComButton(true);
  disableUserButton(true);

  if(userScore > comScore){
    alert('승리하셨습니다 ^o^!');
    showText('경기 종료 - 승리🎉');
  } else if(userScore == comScore){
    alert('무승부! ㅇㅅㅇ');
    showText('경기 종료 - 무승부');
  } else {
    alert('패배하셨습니다 ㅠㅠ');
    showText('경기 종료 - 패배😢');
  }
}
}
