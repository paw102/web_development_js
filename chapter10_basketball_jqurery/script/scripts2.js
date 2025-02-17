let computer = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

let game = {
  isComputerTurn: true,
  shootLeft: 15
};


function showText(s) {
  // let textElement = document.getElementById('text');
  // $textElement.innerHTML = s;

  let $textElement = $('#text');
  // 기존 페이드인 - 아웃 예시
  // $textElement.fadeOut(100);
  // $textElement.html(s);
  // $textElement.fadeIn(100);
  // 콜백 함수를 통한 개선
  $textElement.fadeOut(300, function(){
    $textElement.html(s);
    $textElement.fadeIn(100);
  });
}

function updateComScore(score){
  // let comScoreElement = document.getElementById('computer-score');
  // computer.score += score;
  // $comScoreElement.innerHTML = computer.score;

  // jQuery 적용 후 -> 플러그인 적용 전
  // let $comScoreElement = $('#computer-score');
  // computer.score += score;
  // $comScoreElement.html(computer.score);

  // 플러그인 적용 후
  computer.score += score;
  let $comScoreElement = $('#computer-score');

  $comScoreElement.animateNumber({
    number: computer.score
  });
}

function updateUserScore(score){
  // let userScoreElement = document.getElementById('user-score');
  // user.score += score;
  // $userScoreElement.innerHTML = user.score;

  // jQuery 적용 후 -> 플러그인 적용 전
  // let $userScoreElement = $('#user-score');
  // user.score += score;
  // $userScoreElement.html(user.score);

  // 플러그인 적용 후
  user.score += score;
  let $userScoreElement = $('#user-score');

  $userScoreElement.animateNumber({
    number: user.score
  });
}

function disableComButton(flag){
  // let computerButtons = document.getElementsByClassName('btn-computer');
  // for(let i=0; i<computerButtons.length; i++){
  //   computerButtons[i].disabled = flag;
  // }

  $('.btn-computer').prop('disabled', flag);
}

function disableUserButton(flag){
  // let userButtons = document.getElementsByClassName('btn-user');
  // for(let i=0; i<userButtons.length; i++){
  //   userButtons[i].disabled = flag;
  // }

  $('.btn-user').prop('disabled', flag);
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

function updateAI(){

}

function onComputerShoot() {
if(!(game.isComputerTurn)) return;

  updateAI();

let shootType = Math.random() < 0.5 ? 2 : 3;

  if (Math.random() < computer['percent' + shootType]) {
    showText('컴퓨터가 ' + shootType + '점 슛을 성공했습니다!🙄');
    updateComScore(shootType);
  } else {
    showText('컴퓨터가 ' + shootType + '점 슛을 실패했습니다!😙');
  }

  game.isComputerTurn = false;

  disableComButton(true);

  disableUserButton(false);
}

function onUserShoot(shootType) {
if (game.isComputerTurn) return;

if (shootType == 2) {
  if (Math.random() < user.percent2) {
    showText('2점 슛을 성공했습니다!😙');
    updateUserScore(2);

  } else {
    showText('2점 슛을 실패했습니다!🙄');
  }
}
else {
  if(Math.random() < user.percent3) {
    showText('3점 슛을 성공했습니다!😙😙');
    updateUserScore(3);

  } else {
    showText('3점 슛을 실패했습니다!🙄🙄');
  }
}
game.isComputerTurn = true;

disableComButton(false);

disableUserButton(true);

game.shootLeft--;

  // let shootLeftElement = document.getElementById('shoots-left');
  // $shootLeftElement.innerHTML = game.shootLeft;

  let $shootLeftElement = $('#shoots-left');
  $shootLeftElement.html(game.shootLeft);

if(game.shootLeft === 0) {
  disableComButton(true);
  disableUserButton(true);

  if(user.score > computer.score){
    showText('경기 종료 - 승리🎉');
    alert('승리하셨습니다 ^o^!');
  } else if(user.score == computer.score){
    showText('경기 종료 - 무승부');
    alert('무승부! ㅇㅅㅇ');
  } else {
    showText('경기 종료 - 패배😢');
    alert('패배하셨습니다 ㅠㅠ');
  }
}
}
