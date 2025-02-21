let students = [
  {id: 1, name: '김일', grade: 85},
  {id: 2, name: '김이', grade: 100},
  {id: 3, name: '김삼', grade: 78},
  {id: 4, name: '김사', grade: 55},
  {id: 5, name: '김오', grade: 92},
  {id: 6, name: '김육', grade: 37},
];

// 1. 성적이 80 점 이상인 학생만 추출
const topStudents = students.filter(function(topStudent){
  return topStudent.grade >= 80;
});
console.log(`성적 우수 학생 : `, topStudents);

// 2. 성적이 60 점 미만인 학생만 추출 -> 화살표, 익명 둘 다
const lowStudents = students.filter(function(lowStudent){
  return lowStudent.grade < 60;
});
console.log(`성적 미흡 학생 : `, lowStudents);

// const lowStudents = students.filter(lowStudent => {
//   lowStudent.grade < 60;
// });
// console.log(`성적 미흡 학생 : ${lowStudents}`);

// 3. 이름이 '김' 으로 시작하는 학생만 추출
const kimStudents = students.filter(kimStudent => kimStudent.name.startsWith('김'));
console.log('김씨 학생', kimStudents);


console.log(`성적 우수 학생 : ${JSON.stringify(topStudents)}`);
// console.log(`성적 우수 학생 : ${topStudents.map(topStudent => `${topStudent.name} (${topStudent.grade})`).join(', ')}`);

// console.log();

// let numbers = [1,2,3,4,5];

// // 각 요소를 2배로 변환
// let doubleNumbers = numbers.map(num => num*2);

// console.log(numbers);   // [1,2,3,4,5]
// console.log(doubleNumbers); // [2,4,6,8,10]

// let fruits = ['apple', 'banana', 'cherry', 'durian'];

// // 전부 다 대문자로 바꾸기 -> .toUppercase() 사용

// let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(uppercaseFruits);

let nums = [1,2,3,4,5];

// num 은 [1,2,3,4,5] 의 각 element 인 1,2,3,4,5 에 해당
// index 는 [1,2,3,4,5] 의 각 index 넘버인 0,1,2,3,4 에 해당
let results = nums.map((num, index) => `${index+1}번 째 요소 : ${num}`);

console.log(results); 