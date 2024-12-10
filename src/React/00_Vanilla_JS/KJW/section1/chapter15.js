// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 방법
let obj2 = {}; // 객체 리터럴 방법 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  // key: value 형태
  // value에는 어느 type이 다 와도 된다
  // key는 문자나 숫자만 올 수 있다
  name: "김정우",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
  // 혹시 key로 띄어쓰기를 넣고싶다면 따옴표로 감싸야한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 이런 중간 줄은 ts관련한 문구라 일단지금은 스킵
// 존재하지 않는 key로 접근하면 undefined가 출력

let age = person["age"];
// 꼭 쌍따옴표와 함께 문자열로 접근해야함
// 문자열로 접근하면 변수로 해석해서 오류발생
// 존재하지 않는 key로 접근하면 undefined가 출력

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 테니스

// 3.2 새로운 프로퍼티를 추가, 수정하는 방법
person.job = "fe developer"; // 수정
person["favoriteFood"] = "떡볶이"; // 추가
console.log(person);

// 3.3 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.4 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); // true
let result2 = "cat" in person;
console.log(result2); // false
