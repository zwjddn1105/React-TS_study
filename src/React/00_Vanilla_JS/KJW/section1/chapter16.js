// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; // 이런건 오류뜸

// 이런건 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "김정우",
  // 메서드 선언
  // 이 객체의 동작을 정의하는데에 사용이 된다.
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
