// if (true) console.log("참");    // 실행문이 한 줄이면 {} 생략 가능 
// if (false) {
//     console.log("거짓");
//   };

// // 이상의 코드의 경우 거의 사용되지 않음
// // true -> false 로 바꿀 방법이 없기 때문에

// let open = true;

// if(open) console.log("안녕하세요");

// open = false;

// if(open) {
//   console.log("찾아주셔서 감사합니다. 금일은 휴업입니다.");
// };

// //  이상의 코드는 boolean 값을 변수에 대입하여 분기를 조절 할 수 있음
// //  11번 라인은 open 으로 실행한 데에 반해, 15번 라인은 동일하게 open 변수임에도 실행되지 않는다는 점에서 분기를 조절 가능함

// // true 를 반환하는 코드 or false 를 반환하는 코드
// let n = 1;
// if(n > 0) {   // true 혹은 false 를 반환하는 코드 : 조건식
//   console.log("자연수");
// };

// open = !open;

// if(open) {
//   console.log("안녕하세요");
//   console.log("자리로 안내하겠습니다");
// } else {
//   console.log("영업 종료되었습니다. 죄송합니다;;;");
// };

// // if 절 내의 조건식이 참 이면 else 는 실행되지 않는 true 거나 false 인 구조이기 때문에 else 뒤에는 조건식을 명시하지 않음.

// const a = 1;
// const b = 2;

// if(a < b){
//   console.log("a 가 b 보다 작다.");
// } else if(a > b) {
//   console.lob("a 가 b보다 크다.");
// } else {
//   console.log("a 와 b가 같다.");
// };

//  if 문과 Switch 문으로 동일한 구조 코드 작성

const yoot = "도";

if (yoot === "도") {
  console.log("1칸 전진");
} else if (yoot === "개") {
  console.log("2칸 전진");
} else if (yoot === "걸") {
  console.log("3칸 전진");
} else if (yoot === "윷") {
  console.log("4칸 전진");
} else {
  console.log("5칸 전진");
};

// 이상의 코드를 Switch 로 작성하시오
// 도, 개, 걸, 윷, 모에 해당하지 않으면 무효를 출력하시오

switch (yoot) {
  case "도":
    console.log("1칸 전진");
    break;

  case "개":
    console.log("2칸 전진");
    break;
  
  case "걸":
    console.log("3칸 전진");
    break;

  case "윷":
    console.log("4칸 전진");
    break;

  case "모":
    console.log("5칸 전진");
    break;

  default:
    console.log("무효");
    break;
};

/* 
  switch 문의 () 내에는 str 도, number 도 오는 것이 가능

  그 값이 뭐에 해당하는 지에 따라 case 에 입력 가능

  case "도": -> 가능
  case 1: -> 가능

  default 의 경우에는 아무런 case 에 해당되지 않을 때 실행

  break; 의 의미 또한 중요함

  : switch 문에서 case 는 순서대로 실행되면서 검증을 함
  그러므로 break; 가 없다면 그 다음 case 까지 실행이 된다는 점에서 유의
*/