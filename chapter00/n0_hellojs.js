console.log('Hello, JavaScript!');
//  주석은 다음과 같이 달기 가능함

// 길게 작성했을 경우에도 동일하게 ctrl + / 를 이용하여 주석처리가 됨

// 변수와 상수
// let darkModeOn = true;
// const PI = 3.141592;
// // index.html 생성 -> 개발자 도구를 통해서 console 확인이 가능함

// let a = 1;
// console.log(a);
// a = 2;  // java 에서 처음 선언 및 초기화 하는 것과 재대입 상에서의 차이를 생각
// console.log(a);
// // 변수 b 를 선언해서 a 에 대입하는 방식
// let b = a;
// console.log(a,b); // 결과값 : 2 2 : 콤마(,) 는 출력되지 않은 점에 주목

//  Java 와의 차이점
// a = "안녕하세요"; // 2인 a에 String 자료형 대입
// b = true; // 2인 b 에 boolean 자료형 대입
// console.log(a,b); // 결과값 : 안녕하세요 true
//  이상의 코드에서 자바스크립트 / 파이썬에서는 데이터의 종류를 구분하는 데 있어 타 언어만큼 엄격한 기준이 있지는 않음

// 상수 관련
// const A = 5;
// console.log(A);

// 오류 발생 사례
// A = 10;
// Uncaught TypeError: Assignment to constant variable.
// at n0_hellojs.js:30:3    -> 라고 오류 발생함

// let c = 10;    -> 동일한 변수가 두 번 선언했기 때문
// let c = 12;
// n0_hellojs.js:35 Uncaught SyntaxError: Identifier 'c' has already been declared (at n0_hellojs.js:35:5) -> 라고 오류 발생함

// let bool01 = true;
// let bool02 = false;

// console.log(bool01, bool02);    // true false

// console.log(typeof(bool01));   // boolean
// let z = 1;
// console.log(typeof z); // number

// const bool03 = 1 < 2;
// const bool04 = 1 > 2;
// console.log(bool03, bool04) // true false

// // 이상의 코드에서 알 수 있는 점은 조건식에 자주 사용되며 비교 연산의 결과값을 산출할 때 많이 사용됨.

// let bool05 = !true;
// let bool06 = !bool05;
// let bool07 = !!bool06;

// console.log(bool05, bool06, bool07);    // false true true

// let num1 = 10;  // 정수
// let num2 = 3.14; // 실수

// console.log(typeof num1);   // number
// console.log(typeof num2);   // number

// 사칙 연산
// console.log(1 + 2);
// console.log(3 - num1);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);   // 나머지(mod) 연산

//  우선순위 지정 연산 -> ()
// const num3 = (num1 + num2) * 10;
// console.log(num3);

// const str01 = 'Hello';
// const str02 = '월드';

// console.log(typeof str01); // string
// console.log(typeof '1'); // string

// let str03 = str01 + "world";
// console.log(str03);
// console.log(str02);

// str03 = str03 + "🎈";
// console.log(str03);

// undefined / null

// let x;
// console.log(x, typeof x);   // undefined 'undefined'
// // typeof 가 반환하는 값은 문자열
// x = 1;
// console.log(x);   // 1
// x = null;
// console.log(x, typeof x);
// // null 'object'
// // null 의 타입은 object 로 변환 -> 초기 설계 부실 문제

// // 연산자 관련 수업
// const a = 1;
// const b = 1;
// const c = "1";
// const d = 2;

// console.log(a == b, a != b);    // true false
// console.log(a == c, a != c);    // true false
// console.log(a == d, a != d);    // false true
// console.log(a === c, a !== c);  // false true

// console.log(a > b, a >= b, a <= b);   // false true true
// console.log(a > d, a < d, a <= d);    // false true true

// const str01 = "ABC";
// const str02 = "DEF";

// console.log(str01 === "ABC");  // true
// console.log(str01 > str02);   // false
// // 문자열의 경우에 알파벳 순서 상 뒤에 오는 것을 더 크다고 판단함

// let bool01 = true;
// let result = bool01 ? "참" : "거짓";
// console.log(result);

// let num05 = 28;
// console.log(
// "num05 는 3 의 배수가 " + (num05%3 == 0 ? "맞습니다." : "아닙니다.")
// );

// 객체 관련 수업
const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
};

console.log(typeof person01);   // object
console.log(person01);  //  {name: '김철수', age: 25, address: '부산광역시 연제구', married: false}

/*
원래 얘로 찍혀야함
{name: '김철수', age: 25, address: '부산광역시 연제구', married: false}

console.log 로 찍고 copy object 사용했더니 key 에 "" 붙어있는 걸로 보아 JSON 형태로 표기됨
  {
    "name": "김철수",
    "age": 25,
    "address": "부산광역시 연제구",
    "married": false
  }
*/

// 객체 접근 방법 -> Java 와 동일
// # 1 마치 인스턴스 변수처럼
console.log(person01.name);
// # 2 Java 에서의 Map 자료형과 같은 방식이라는 점에서
console.log(person01["name"]);

// 와 같은 방식으로 출력 가능

const person01Age = person01.age;
const typeOfMarried = typeof person01["married"];

console.log(person01Age, typeOfMarried);
// 25, 'boolean'

//  객체를 통해서 지정한 value 를 상수에 저장하여 (#1, #2 를 이용해서 특정 값만 산출 후에) 그 부분만 콘솔에 출력함

// 프로퍼티를 추가하는 방식

person01.job = "programmer";
person01["bloodtype"] = "o";

console.log(person01);
/*
  address: "부산광역시 연제구"
  age: 25
  bloodtype: "o"
  job: "programmer"
  married: false
  name: "김철수"
*/

//  기존 프로퍼티 수정 방식
person01.age++;
person01["job"] = "teacher";

console.log(person01);

// const 로 선언한 객체 자체를 바꾸려고 하면
person01 = {};  // 객체에 번들값들을 재대입 -> 오류 발생
// n0_hellojs.js:192 Uncaught TypeError: Assignment to constant variable.
// at n0_hellojs.js:192:10 오류 발생