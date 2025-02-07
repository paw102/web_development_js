// const person01 = {
//   name: "김철수",
//   age: 25,
//   address: "부산광역시 연제구",
//   married: false
// };

// const myArray = [true, 3.14, "Hello", {
//   name: "김철수",
//   age: 25,
//   address: "부산광역시 연제구",
//   married: false
// }];

// console.log(myArray, myArray.length);
// // myArray.length -> java 기준 field에 해당 -> () 없음

// console.log(
//   !myArray[0],
//   myArray[1],
//   myArray[2],
//   myArray[3]
// );
// /*  배열의 내부에 있는 각 element 들의 자료형을 감안하는 것이 중요함
//     자바로 배열을 선언했을 때에 int arr[] 과 같은 형태로 선언하다보니 자료형이 일치한다고 생각한다는 경우가 너무 많았음

//     그런데 JavaScript 의 경우 각 element 마다 고유의 자료형을 지닐 수 있기 때문에 하나의 배열 내에서도 다양한 방식의 데이터 조작이 가능함.
// */

// myArray[1] *= 100;
// myArray[2] += " World! 🎈";

// console.log(myArray[1]);
// console.log(myArray[2]);

// myArray.push(123);

// console.log(myArray);

// const popped1 = myArray.pop();  
// // myArray.pop() 을 적용시켰을 때, myArray 에서는 123이 삭제됨.
// // 그 삭제된 123 을 popped1 이라는 상수에 대입함

// console.log(popped1);   //  123
// console.log(myArray);   // [true, 314, 'Hello World! 🎈', {…}]

// 객체와 배열의 중첩 예시 코드

const person02 = {
  name: "김일",
  age: 23,
  languages: ["Korean", "English", "Franch"],
  education: {
    school: "백제대",
    major: ["컴퓨터공학", "영어교육"],
    graduated: true,
  },
};

console.log(person02.languages[2]);
console.log(person02.education.graduated);