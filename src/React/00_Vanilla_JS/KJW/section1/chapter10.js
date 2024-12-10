// for (초기식; 조건식; 증감식) {
//   console.log("반복!")
// }

// 초기식에는 count 하는 값을 저장, count변수라고도 함
// 조건식에는 이 반복문이 언제까지? 조건식이 참일때에만 동작

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
