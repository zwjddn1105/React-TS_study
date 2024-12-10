// 1. 함수 선언문, 호이스팅의 대상
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 호출해서 담은게 아니라 그냥 funcA로 담음
console.log(varA);
// ƒ funcA() {
//   console.log("funcA");
// }
varA(); // 이런식으로 변수에 담아서 함수를 호출하는 것도 가능

// 이 아래에서 만든 함수들은 함수표현식이기 때문에 호이스팅 되지않음
let varB = function funcB() {
  console.log("funcB");
};
// 단, 이렇게 쓰는 것은 함수를 선언하는 게 아님 단순히 값으로써 함수가 생성된 것
// 즉 funcB() 이러면 오류가 발생함
// 따라서 funcB라는 이름은 굳이 불필요, 지워도됨
varB();

let varC = function () {
  // 익명함수라 부름
  console.log("funcC");
};

// 2. 화살표 함수
// let varD = () => {
//   return 1;
// };
// 만약 값을 반환하기만 한다면 중괄호와 return 모두 지워도 됨
let varD = (value) => value + 1;

console.log(varD(10)); // 11
