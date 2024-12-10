// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 함수호출을 해야만 실행이 된다.
// 소괄호 없이 greeting만 쓰면 아무일도 일어나지 않는다.
console.log("호출 후");

getArea(120, 200);
// getArea라는 함수는 아래에서 정의했지만 여기서 해도 실행이 된다.
// 호이스팅 때문 js의 독특한 특징
// -> 끌어올리다 라는 뜻

function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  // 중첩함수로 함수내부에 함수를 선언할 수 있다.

  // width, height는 매개변수
  let area = width * height;
  return area; // 반환값
  // 함수는 return을 만나면 무조건 종료, 아래 코드르 써도 실행이 안됨
}

let area1 = getArea(10, 20); // 10, 20을 인수라함
console.log(area1); // 200
