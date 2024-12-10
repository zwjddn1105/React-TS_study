// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

function sub() {
  console.log("I am sub");
}
main(sub); // 함수를 인수로 전달, I am sub 출력
// 콜백함수는 나중에 실행되는 함수이다. 라고 이해 main함수가 원하는 때 쓸수있다.
// 이렇게 sub 함수를 선언하고 사용해도 되지만
main(() => {
  console.log("i am sub");
});
// 위와같이 해도 됨

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// repeatDouble(5); // 2 4 6 8 10
// 구조가 흡사한 함수들을 만들 때 이렇게 함수들을 계속 선언할 필요가 없다.

repeat(5, function (idx) {
  console.log(idx);
}); // 1 2 3 4 5

repeat(5, function (idx) {
  console.log(idx * 2);
}); // 2 4 6 8 10

repeat(5, function (idx) {
  console.log(idx * 3);
}); // 3 6 9 12 15
// 콜백함수를 함수표현식이 아닌 화살표함수로 바꿔도 된다. 이게 가장 깔끔
