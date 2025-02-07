/*
  1 에서 5까지 출력하는 반복문 작성
*/

// for (let i = 1; i < 6; i++) {
//   console.log(i);
// };

// /*
//   10 에서 2씩 줄어드는 반복문 작성
// */

// // 증감값에 -= 활용
// for (let i = 10; i > 1; i-=2) {
//   console.log(i);
// };

// if 중첩
// for (let i = 10; i > 1; i--) {
//   if(i%2 == 0){
//     console.log(i);
//   }
// };

// 중첩 for 문

/*
  1 ~ 9 단 까지 구구단 작성
*/

// for(let i = 2; i < 10; i++){
//   for(let j = 1; j < 10; j++){
//     console.log(i + " x " + j + " = " + (i*j));
//   } 
// }

// for(let i = 0; i <100; i++){
//   if(i%3 === 0) continue; // 3의 배수일 때마다 그 다음 반복문으로 넘어감
//   if(i > 10) break;
//   console.log(i);
// }

// const yourArray = ["김일", "김이", "김삼", "김사", "김오"];

// for (const name of yourArray) {
//   console.log(name);
// };

//  이상의 코드에서 중요한 것은 (Java 에서도 말함)
//  향상된 for 문의 작성 때문에 배열처럼 다수의 데이터를 다루는 collections 에 해당하는 자료형은 변수(상수) 명을 복수형으로 짓는 편임

// for (const name of names) 로 쓸 때 일기가 훨씬 편하기 때문

// const person03 = {
//   name: "김육",
//   age: 25,
//   married: false
// };

// for (const key in person03) {
//   console.log(key, typeof key);
//   console.log(person03[key]);
// }

// //  for of 문이 배열의 요소 반환에 해당한다면, for in 문은 키 - 값 - 쌍 으로 이루어져 있는 객체에서 key 를 순서대로 반환

// // 그렇기 때문에 value 를 출력하기 위해서는 객체명[키이름] 으로 작성 할 필요가 있음

// /*
//   1 ~ 9 단 까지 구구단 작성 (while)
// */

// let dan1 = 2;

// while(dan1 < 10){
//   let dan2 = 1;
//   while (dan2 < 10){
//     // console.log(dan1 + "x" + dan2 + "=" + (dan1 * dan2));
//     console.log(`${dan1} x ${dan2} = ${dan1*dan2}`);
//     dan2++;
//   }
//   dan1++;
// };

//  while 문에서의 continue / break 사용

// for(let i = 0; i <100; i++){
//   if(i%3 === 0) continue; // 3의 배수일 때마다 그 다음 반복문으로 넘어감
//   if(i > 10) break;
//   console.log(i);
// }    -> while 문으로 구현


// let a = 0;

// while(a < 100) {
//   const toPrint = a++;

//   // continue / break 적용
//   if(toPrint % 3 === 0) continue;
//   if(toPrint > 10) break;

//   console.log(toPrint);
// };

// do - while 문
let b = 12;
do {
  console.log(b++);
} while (b < 10) {
  console.log(b);
}; 
// 결과값 : 12
// 일반 while 문의 경우 조건식을 '확인' 한 후 true 라면 실행하는 반면에 'do-while' 문의 경우는 일단 실행 한 번을 시키고 그 후에 조건을 확인함.

// 이상의 코드에서 b = 12 라면 '일단 출력' 하고 while 문 조건에 맞지 않기 때문에 반복문을 종료함

// 즉, 조건에 맞지 않더라도 일단 한 번은 실행시킴