//  scope
// Local vs. Global

// let comScore = 0;

// function onComputerShoot() {
//   console.log('함수 안', comScore);
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 이상의 코드에서 생기는 문제점은 onComputerShoot 내부에서는
// comScore 라는 변수가 없음에도 불구하고 아무런 문제 없이 0라는 값이 찍힘

// function onComputerShoot() {
//   let comScore = 0;

//   console.log('함수 안', comScore);
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 그리고 이상의 코드는 오류가 발생함을 확인 할 수 있음
// 함수 내에 선언 된 지역 변수인 comScore 를 main 단계에서 확인 할 수가 없기 때문에 