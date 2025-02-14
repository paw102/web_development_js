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

let dog = {
  name: '해피',
  age: 5,
  gender: 'M',
  friends: ['나비', '삐삐', '엘리']
};
// 마찬가지로 변수에 값 대입한거라 ; 으로 마무리함
// 조건문 / 반복문 때와는 다름

console.log(dog.friends);
console.log(dog.name);
console.log(dog.age * 10);
console.log(dog.gender);

// 다했다면 refactoring2.js 로 이동