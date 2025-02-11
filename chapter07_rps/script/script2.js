//  가위 버튼에 적용할 click handler

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

function onScissorsClick() {    // 버튼 클릭함 -> userInputPrompt 가 필없
  let comInput;   // 지역변수로 처리
  let randomNum = Math.random();
  
  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 무`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 패`);
  } else {
    alert(`컴퓨터 : ${comInput} - 승`);
  }
}

// onRockClick() ,onPaperClick() 정의하고 index.html 에 정의하고 결과 도출

function onRockClick() {
  let comInput;
  let randomNum = Math.random();
  
  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 승`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 무`);
  } else {
    alert(`컴퓨터 : ${comInput} - 패`);
  }
}

function onPaperClick() {
  let comInput;
  let randomNum = Math.random();
  
  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 패`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 승`);
  } else {
    alert(`컴퓨터 : ${comInput} - 무`);
  } 
}


//  위의 코드는 call1() 유형으로 각각의 3개의 함수로 정의
//  아래의 코드는 call2() 유형으로 하나의 함수로 통합

function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.random();
  
  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;
  
  //  출력문 리팩토링 파트
  let result = `컴퓨터 ${comInput}`;

  if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
      // 사용자가 비긴 경우
      alert(result += ` - 비겼습니다.`);
    } else if (comInput === ROCK) {
      // 사용자가 진 경우
      alert(result += ` - 졌습니다.`);
    } else {
      // 사용자가 이긴 경우
      alert(result += ` - 이겼습니다.`);
    }
  } else if (userInput === ROCK) {
    //  comInput 비교
    if (comInput === SCISSORS) {
      //  사용자가 이긴 경우
      alert(result += ` - 이겼습니다.`);
    } else if (comInput === ROCK) {
      //  비긴 경우
      alert(result += ` - 비겼습니다.`);
    } else {
      // 사용자가 진 경우
      alert(result += ` - 졌습니다.`);
    }
  } else {
    if (comInput === SCISSORS) {
      // 사용자가 진 경우
      alert(result += ` - 졌습니다.`);
    } else if (comInput === ROCK) {
      // 사용자가 이긴 경우
      alert(result += ` - 이겼습니다.`);
    } else {
      // 사용자가 비긴 경우
      alert(result += ` - 비겼습니다.`);
    }
  }
}