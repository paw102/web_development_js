// 컴퓨터 관련 오브젝트
let computer = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 사용자 관련 오브젝트
let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 게임 관련 오브젝트
let game = {
  isComputerTurn: true,
  shootLeft: 15
};


function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  computer.score += score;

  comScoreElement.innerHTML = computer.score;
}

function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');
  user.score += score;

  userScoreElement.innerHTML = user.score;
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
  let difference = user.score - computer.score;
  if (difference > 11) {
    computer.percent2 = 0.7;
    computer.percent3 = 0.43;
  } else if(difference > 7) {
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
  } else if(difference < -11){
    computer.percent2 = 0.3;
    computer.percent3 = 0.23;
  } else if(difference < -7){
    computer.percent2 = 0.4;
    computer.percent3 = 0.28;
  }
}

// 여기에 시나리오 관련한 함수 작성 예정
function updateAI(){

}

function onComputerShoot() {
if(!(game.isComputerTurn)) return;

  updateAI();   // 왜 호출하는 위치가 여기여야만 할까

let shootType = Math.random() < 0.5 ? 2 : 3;

  if (Math.random() < computer['percent' + shootType]) {  // 결과값은 'percent2' 이거나 'percent3' 가 되므로 computer['percent2'] / computer['percent3'] 의 value 가 산출됨
    showText('컴퓨터가 ' + shootType + '점 슛을 성공했습니다!🙄');
    updateComScore(2);
  } else {
    showText('컴퓨터가 ' + shootType + '점 슛을 실패했습니다!😙');
  }

if (shootType == 2) {
  if (Math.random() < computer.percent2) {
    showText('💻컴퓨터가 2점 슛을 성공했습니다!🙄 Now : User');
    updateComScore(2);

  } else {
    showText('💻컴퓨터가 2점 슛을 실패했습니다!😙 Now : User');
  }
}
else {
  if(Math.random() < computer.percent3) {
    showText('💻컴퓨터가 3점 슛을 성공했습니다!🙄🙄 Now : User');
    updateComScore(3);

  } else {
    showText('💻컴퓨터가 3점 슛을 실패했습니다!😙😙 Now : User');
  }
}
  game.isComputerTurn = false;

  disableComButton(true);

  disableUserButton(false);
}

function onUserShoot(shootType) {
if (game.isComputerTurn) return;

if (shootType == 2) {
  if (Math.random() < user.percent2) {
    showText('2점 슛을 성공했습니다!😙 Now : Computer');
    updateUserScore(2);

  } else {
    showText('2점 슛을 실패했습니다!🙄 Now : Computer');
  }
}
else {
  if(Math.random() < user.percent3) {
    showText('3점 슛을 성공했습니다!😙😙 Now : Computer');
    updateUserScore(3);

  } else {
    showText('3점 슛을 실패했습니다!🙄🙄 Now : Computer');
  }
}
game.isComputerTurn = true;

disableComButton(false);

disableUserButton(true);

game.shootLeft--;

let shootLeftElement = document.getElementById('shoots-left');
shootLeftElement.innerHTML = game.shootLeft;

if(game.shootLeft === 0) {
  disableComButton(true);
  disableUserButton(true);

  if(user.score > computer.score){
    alert('승리하셨습니다 ^o^!');
    showText('경기 종료 - 승리🎉');
  } else if(user.score == computer.score){
    alert('무승부! ㅇㅅㅇ');
    showText('경기 종료 - 무승부');
  } else {
    alert('패배하셨습니다 ㅠㅠ');
    showText('경기 종료 - 패배😢');
  }
}
}
