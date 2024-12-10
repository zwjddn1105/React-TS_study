// 1. if 조건문 (if문)
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다");
} else {
  console.log("조건이 거짓입니다!");
}
// if문은 반드시 if로 시작해서 else로 끝나야 한다.

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

// 소괄호 안에 비교하고싶은 변수를 넣는다
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다");
  }
}
// break가 없으면 다실행됨, 왜냐면 switch-case문은 기본적으로 소괄호 안에 변수값과 일치하는값을
// 위에서부터 쭉 탐색을 하다가 일치하는 case를 만나게되면 그 아래에있는 모든 코드를 실행시킴
// 그래서 case문 아래는 break를 다 써주는게 일반적
// 만약 일치하는 case가 없다면 default를 실행시켜주도록 만들면 됨
