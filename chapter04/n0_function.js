// 함수 정의 -> call2() 유형으로 정의
function sumTo(result) {
  let sum = 0;
  //  반복문 돌리면서 sum += i
  for(let i= 1; i< result+1; i++){
    sum += i;
  }
  return sum;
}

// 함수 호출
console.log(sumTo(5));


function add (x,y) {
  return x + y;
}
// 함수 호출 -> 아까 위에서 작성한 것과 호출 방식이 차이남
// call1() 의 경우 sumTo(5) 로 작성하니까 바로 브라우저에서 결과값이 나온 반면,
// call4() 유형으로 작성한 add 의 경우 console.log() 명령어를 작성해야만 함
// add() 함수의 경우 내부에 console.log() 실행문이 없기 때문에 
console.log(add(2,3));

console.log(
  (add(7,8), add(8,9))  // 길어지는 경우 가독성을 위해 엔터 쳐주는 편
);
// 이상의 코드는 add() 함수를 세 번 호출하는데
// add(6,7)을 연산하여 결과값을 argument 1번으로
// add(8,9)를 연산하여 결과값을 argument 2번으로 하여
// add(13,17) 을 최종 연산하여 그 결과값을 산출

console.log(add(1,2)+3);

// 한 줄 안에서 값만 변환할 때 -> 실행문이 한 줄 일 때
const multiply = (x,y) => x * y;

console.log(multiply(2,7));

const multiply2 = (x,y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);   // 백틱 (`) 을 이용한 표현식
  console.log(`${x} x ${y} = ${x*y}`);
  return x*y;
}

console.log(multiply2(3,7));