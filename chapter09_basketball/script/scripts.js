// 점수 총 합을 대입 할 변수 선언
  let comScore = 0;
  let userScore = 0;

// 컴퓨터 턴이면 내 턴이 아님 / 내 턴이면 컴퓨터 턴이 아님 -> boolean 자료형 쓸 거임
  let isComputerTurn = true;
  let shootLeft = 15;

function onComputerShoot() {
  if(!isComputerTurn) return;

  // 삼항 연산자 응용 - Math.random() 을 응용
  let shootType = Math.random() < 0.5 ? 2 : 3;

  let comScoreElement = document.getElementById('computer-score');
  let textElement = document.getElementById('text');


  if (shootType == 2) {
    if (Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = '💻컴퓨터가 2점 슛을 성공했습니다!🙄 Now : User';
      comScore += 2;

      comScoreElement.innerHTML = comScore;
    } else {
      // 2점슛을 실패했을 때
      textElement.innerHTML = '💻컴퓨터가 2점 슛을 실패했습니다!😙 Now : User';
    }
  }
  else {
    if(Math.random() < 0.33) {
      // 3점슛을 1/3 확률로 성공
      textElement.innerHTML = '💻컴퓨터가 3점 슛을 성공했습니다!🙄🙄 Now : User';
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    } else {
      // 3점슛을 실패했을 때
      textElement.innerHTML = '💻컴퓨터가 3점 슛을 실패했습니다!😙😙 Now : User';
    }
  }
  isComputerTurn = false;
  
  let computerButtons = document.getElementsByClassName('btn-computer');
  for(let i=0; i<computerButtons.length; i++){
    computerButtons[i].disabled = true;
  }

  let userButtons = document.getElementsByClassName('btn-user');
  for(let i=0; i<userButtons.length; i++){
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType) {
  if (isComputerTurn) return;
  let textElement = document.getElementById('text');    // onComputerShoot() 에서도 지역변수로 선언했고, 여기서도 동일함

  let userScoreElement = document.getElementById('user-score');

  if (shootType == 2) {
    if (Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = '2점 슛을 성공했습니다!😙 Now : Computer';
      userScore += 2;

      userScoreElement.innerHTML = userScore;
    } else {
      // 2점슛을 실패했을 때
      textElement.innerHTML = '2점 슛을 실패했습니다!🙄 Now : Computer';
    }
  }
  else {
    if(Math.random() < 0.33) {
      // 3점슛을 1/3 확률로 성공
      textElement.innerHTML = '3점 슛을 성공했습니다!😙😙 Now : Computer';
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    } else {
      // 3점슛을 실패했을 때
      textElement.innerHTML = '3점 슛을 실패했습니다!🙄🙄 Now : Computer';
    }
  }
  isComputerTurn = true;

  let computerButtons = document.getElementsByClassName('btn-computer');
  for(let i=0; i<computerButtons.length; i++){
    computerButtons[i].disabled = false;
  }

  let userButtons = document.getElementsByClassName('btn-user');
  for(let i=0; i<userButtons.length; i++){
    userButtons[i].disabled = true;
  }

  //  onUserShoot() 을 호출했을 때만 shootleft 가 --; 되어야 만함.
  shootLeft--;

  // 이건 Js 상에서만 HTML 에서는 보이지 않음
  let shootLeftElement = document.getElementById('shoots-left');
  shootLeftElement.innerHTML = shootLeft;

  // 조건문을 적용 -> shootLeft === 0 일 때 게임 종료

  if(shootLeft === 0) {
    // 사용자가 이겼을 때 - 졌을 때 - 비겼을 때
    let computerButtons = document.getElementsByClassName('btn-computer');
    for(let i=0; i<computerButtons.length; i++){
      computerButtons[i].disabled = true;
    }
  
    let userButtons = document.getElementsByClassName('btn-user');
    for(let i=0; i<userButtons.length; i++){
      userButtons[i].disabled = true;
    }

    if(userScore > comScore){
      alert('승리하셨습니다 ^o^!');
      textElement.innerHTML = '경기 종료 - 승리🎉';
    }
    else if(userScore == comScore){
      alert('무승부! ㅇㅅㅇ');
      textElement.innerHTML = '경기 종료 - 무승부';
    }
    else{
      alert('패배하셨습니다 ㅠㅠ');
      textElement.innerHTML = '경기 종료 - 패배😢';
    }
  }
}
