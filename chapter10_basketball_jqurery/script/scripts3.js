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
  let $textElement = $('#text');

  $textElement.fadeOut(300, function(){
    $textElement.html(s);
    $textElement.fadeIn(100);
  });
}

function updateComScore(score){
  computer.score += score;
  let $comScoreElement = $('#computer-score');

  $comScoreElement.animateNumber({
    number: computer.score
  });
}

function updateUserScore(score){
  user.score += score;
  let $userScoreElement = $('#user-score');

  $userScoreElement.animateNumber({
    number: user.score
  });
}

function disableComButton(flag){
  $('.btn-computer').prop('disabled', flag);
}

function disableUserButton(flag){
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
