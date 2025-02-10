let userInput;
let comInput;
let randomNum = Math.random();

// 0 이상 0.33 미만은 가위
// 0.33 이상 0.66 미만은 바위
// 0.66 이상은 보
// 로 comInput 에 대입하시오

console.log(randomNum);

if (randomNum < 0.33){
  comInput = console.log("가위");
} else if (randomNum < 0.66) {
  comInput = console.log("바위");
} else {
  comInput = console.log("보");
}

userInput = prompt('가위 바위 보 입력');

// 입력한 값이 가위, 바위, 보 중 하나라면 통과하지만, 잘못된 값을 입력하거나 묵찌빠 등이라면 '가위, 바위, 보 중 하나를 입력해야합니다' 를 출력하는 alert 를 작성

if(userInput !== ('가위' || '바위' || '보')){
  alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
} else {
  console.log(userInput);
}