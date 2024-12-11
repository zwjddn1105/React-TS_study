# JavaScript Study Notes
### 사전 설정
#### extensions - live server 설치
- cmd + shift + p 검색창 열기
- 'live server' 검색 
- 'live server:open with live server' 클릭

# 변수와 상수
## 1. 변수
- 선언 후 수정 가능
```js
let age = 25;
console.log(age);

age = 30;
```
## 2. 상수
- 선언 후 수정 불가능
```js
const birth = "1997.01.07";
```
## 3. 변수 명명 규칙 (네이밍 규칙)
### 3-1. $, _ 제외한 기호는 사용할 . 수없다.
```js
let $_name;
```
### 3-2. 숫자로 시작할 수 없다.
```js
let name1;
let $2name;
```
### 3-3. 예약어를 사용할 수 없다.
## 4. 변수 명명 가이드
```js
let salesCount = 1;
let refundCount = 1;
let totalCount = salesCount - refundCount;
```
이처럼 누가봐도 알아볼 수 있도록 변수명을 지정하기

# 자료형
## 원시타입 - 기본형 타입
## 1. Number Type
```js
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;
```
## 2. String Type
```js
let myName = "홍길동";
let myLocation = "서울";
let introduce = myName + myLocation;
console.log(introduce)

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
console.log(introduceText)
```
- 백팁을 사용하는 문법을 템플릿 리터럴 문법이라고 부름
## 3. Boolean Type
```js
let isSwitchOn = ture;
let isEmpty = false;
```
## 4. Null Type : 아무것도 없다
```js
let empty = null;
```
## 5. undefined Type
```js
let none;
console.log(none);
```
- 선언된 것이 아무런 값이 없을 경우 자동으로 할당되는 값
- 개발자 의도적

# 형 변환(Type Casting)
- 어떤 값의 타입을 다른 타입으로 변경하는 것
1. 묵시적 형 변환 (암묵적 형변환)
    - 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환을 하는 것
2. 명시적 형 변환 
    - 개발자가 직접 함수 등을 이용해 형 변환을 일으킴

## 1. 묵시적 형 변환
- 자바스크립트 엔진이 알아서 형 변환하는 것
```js
let num = 10;
let str = "20";

const result = num + str;
```
- num을 문자형으로 묵시적 형 변환한 것.
## 2. 명시적 형 변환
```js
let str1 = "10";
let strToNum1 = Number(str1);
```
- 숫자만 있는 경우 Number()를 사용하면 됨
```js
let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);
```
- 이와 같이 글자가 섞인 경우 parseInt를 사용하면 해결할 수 있음
- parseInt를 쓰더라도 문자가 앞에 있는 경우는 변환이 잘 안될 수 있기에 유의하기
```js
// 숫자 -> 문자형
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.")
```

# 연산자(Operator) 1
- 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함
## 1. 대입 연산자 
```js
let var1 = 1;
```
- = <- 이게 대입 연산자
## 2. 산술 연산자
```js
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
```
## 3. 복합 연산자
```js
let num7 = 10;
num7 = num7 + 20;
num7 += 20; // 위와 동일한 코드
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
```
## 증감 연산자
```js
let num8 = 10;
num8++; // 후위 연산
++num8; // 전위 연산
```
- 후위 연산
    - ++이 변수 뒤에 있으면 해당 줄이 끝나고 다음줄부터 변수에 증감이 적용됨. 
    - 현재 행에서는 아직 증감이 반영되지 않은 상태
- 전위 연산
    - ++가 변수 앞에 있으면 해당 줄에서 변수에 증감이 적용됨.
## 5. 논리 연산자
```js
let or = true || false;
// 둘 중 하나라도 ture면 ture
let and = true && false;
// 둘 다 ture여야 ture
let not = !true;
// ture라면 false로, false라면 ture로 변경
```
## 6. 비교 연산자
```js
let comp1 = 1 === 2; // 같은 값인가?
// ==을 두번만 작성하면 자료형이 같은지까지 판단하지 않고 값 자체만 비교함.
let comp2 = 1 !== 2; // 같은 값이 아닌가?

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 1;
let comp6 = 2 <= 1;
```
# 연산자 2
## 1. null 병합 연산자
- 존재하는 값을 추려내는 기능
- null, nudefined가 아닌 값을 찾아내는 연산자
```js
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

let userName = "홍길동";
let userNicName = "hong";

let displayName = userName ?? userNicName;
```
## 2. Typeof 연산자
- 값의 타입을 문자열로 반환하는 기능을 하는 연산자
```js
let var7 = 7;
var7 = "hello";

let t1 = typeof var7;
console.log(t1)
```
## 3. 삼항 연산자
- 항을 3개 사용하는 연산자
- 조건 식을 이용하여 참, 거짓일 때의 값을 다르게 반환
```js
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res)
```
# 조건문(Conditional Statement)
- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
- 대표적으로 if, switch 조건문이 존재함

## 1. if 조건문 (if문)
```js
let num = 9;

if(num >= 10) {
    // console.log("num은 10이상입니다.");
    // console.log("조건이 참 입니다.");
} else if (num >=3) {
    // console.log('3이상입니다.')
} else {
    // console.log("조건이 거짓입니다!");
}
```
- if로 시작해서 if, else로 끝내야 함
## 2. Switch 문
- if문과 기능 자체는 동일
- 다수의 조건을 처리할 때 if보다 직관적
```js
let animal = 'cat';

switch (animal) {
    case 'cat': {
        console.log("고양이");
        break;
    }
    case "baer": {
        console.log("곰");
        break;
    }
    case "dog" : {
        console.log("뱀")
        break;
    }
    case "tiger": {
        console.log("호랑이")
        break;
    }
    default: {
        console.log("그런 동물은 모릅니다.")
    }
}
```
- switch는 모든 케이스에 break가 들어가는 것이 일반적
# 반복문(loop, lteration)
- 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
## 1. for 
```js
for (초기식; 조건식; 증감식) {
     console.log("반복!")
}
```
- 초기식 : count하는 변수
- 조건식 : 언제까지 반복할지, 조건식이 참일 때만 반복 진행, 거짓이면 종료
- 증감식 : 매 반복마다 초기식을 증가시키는 용도로 활용
```js
for (let idx = 0; idx < 5; idx++) {
    if (idx % 2 === 0) {
        continue;
    } 
    console.log(idx)
    if (idx >= 5) {
        break;
    }
}
```
# 함수(function)
## 함수 선언
```js
function greeting() {
    console.log("안녕하세요!")
}

console.log("호출전")
greeting(); // 함수 호출 시 소괄호를 꼭 작성해줘야 함.
console.log("호출후")

let area1 = getArea(10, 20);
// 함수에 전달 된 것을 인수라고 부름
console.log(area1)
let area2 = getArea(300,200)
console.log(area2)
```
- 호이스팅
    - 끌어올리다
    - 다른 언어와 달리 함수를 아래에 작성해도 잘 작동함. (유연하게 프로그래밍할 수 있음)
```JavaScript
function getArea (width, height) {
    function another() {
        console.log("another");
    } // 함수 내부에 또 다른 함수를 만들 수 있음 -- 중첩 함수
    another()
    let area = width * height;

    // console.log(area);
    return area; // 반환 값, 리턴 뒤에 작성하는 코드는 실행되지 않음.
}
// width, height를 매개변수 라고 부름
```
# 함수 표현식과 화살표 함수
## 1. 함수 표현식
```js
function funcA () {
    console.log("funcA");
}

let varA = funcA;
varA();
// 이 처럼 변수 안에 함수를 넣어서 사용할 수 있음.
let varB = funcB() {
    console.log("funcB");
}
// 그럼 이렇게 작성할 수 있을까? x. 변수 안에 한번에 함수를 작성하고자 한다면 함수는 이름을 가질 수 없음 (익명함수)
let varB = function () {
    console.log("funcB");
}
varB();
// 이런 방식을 함수 표현식이라고 말하고, 함수 선언식과 달리 호이스팅의 대상이 되지 않음.
```
## 2. 화살표 함수
```js
et varC = () => {
    return 1;
}
// function을 지워버리고 소괄호와 중괄호 사이에 화살표를 넣는 것
console.log(varC())
```
- 만약 varC가 1이라는 숫자를 반환하는 함수라면 중괄호와 return도 빼고 
- let varC = () => 1; 
- 이렇게 쓸 수도 있음
- 바로 값을 반환하는 경우 중괄호를 빼고 작성해도 되고, 여러가지를 반환하거나 추가적으로 적용해야할 사항이 생기면 중괄호에 넣고 리턴문을 추가해서 반환하면 됨.

# 콜백 함수
- 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함
- 예
    ```js
    function main(value) {
        value();
    }

    function sub() {
        console.log("sub");
    }

    main(sub) //sub
    ```
## 1. 콜백함수
```js
function main (value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end")
}

function sub() {
    console.log("i am sub");
}

main(sub)
```
- 콜백함수는 메인 함수가 원하는 타이밍에 호출할 수 있다.
- 따로 선언하지 않고 메인 함수 안에 작성해도 됨. (익명함수)

```js
main(function sub() {
    console.log('i am sub');
})


main(() => {
    console.log('i am sub');
}) // 화살표 함수도 가능
```
## 2. 콜백함수 활용
```js
function repeat(count) {
    for (let idx=1; idx <= count; idx++) {
        console.log(idx);
    }
}
function repeatDubble(count) {
    for (let idx=1; idx <= count; idx++) {
        console.log(idx*2);
    }
}

repeat(5)
repeatDubble(5)
```
- 이런 경우 중복코드를 발생한 부분을 제거하고 콜백함수로 이용할 수 있음.
```js
function repeat(count, callback) {
    for (let idx=1; idx <= count; idx++) {
        callback(idx)
    }
}

repeat(5, function (idx) {
    console.log(idx);
});
```
# 스코프(scope)
- 우리말로 '범위'를 뜻함
- 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
- 예
    ```js
    function funcA(){
        let a = 1;
    }

    console.log(a);
    ```
    - a 는 지역 스코프여서 밖에서 알 수 없음
    - 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
    - 전역 스코프 : 전체 영역에서 접근 가능
    - 지역 스코프 : 특정 영역에서만 접근 가능
```js
let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);
}

funcA()
// console.log(b) // b는 지역 스코프이기에 함수 외부에서 호출할 수 없음

if (true) {
    let c = 1; // 얘도 블록 안에서 만들어진 변수이기에 지역 스코프
}

for (let i = 0; i < 10; i ++) {
    let d = 1; // 블록(중괄호) 안에서 만들어진 변수이기에 지역 스코프
}

console.log()
```
- 함수 선언문의 경우 함수 안에서만 지역 스코프를 갖고 조건문이나 반복문 안으로 들어가면 지역 스코프를 갖지 않음

# 객체(Object) 1
- 객체를 이용하면 현실 세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함
## 1. 객체 생성
```js
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)
```
## 2. 객체 프로퍼티 (객체 속성) 
- key: value 형식
- key의 이름으로 불림.
- key값은 문자와 숫자만 가능하고 value는 모든 형태 가능
- key는 따옴표 없이 작성되는데, 예외로 key이름에 띄어쓰기가 들어가는 경우만 따옴표를 붙여줌.
```js
let person = {
    name: "홍길동",
    age: 20,
    hobby: '축구',
    "like cat": true,
};
```
## 3. 객체 프로퍼티를 다루는 방법
### 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
```js
let name = person.name;
console.log(name) //만약 없는 것을 호출하면 undefined

let age = person["age"]; 
// key를 쌍따옴표와 함께 문자열로 작성해야함. 그렇지 않으면 변수로 인식하여 오류 발생.
console.log(age)
```
```js
let property = "hobby";
let hobby = person[property];
console.log(hobby);
```
- 변수에 꺼내오고자 하는 프로퍼티를 담아서 꺼내올 수 있기에 동적으로 프로퍼티를 변화시키며 사용하고자 한다면 괄호표기법이 유용
- 그렇지 않은 경우에는 점 표기법이 간결

### 3.2 새로운 프로퍼티를 추가하는 방법
```js
person.job = "FE developer";
person["favoriteFood"] = "떡볶이";
```
### 3.3 프로퍼티를 수정하는 방법
```js
person.job = "educator"
person["favoriteFood"] = "초콜렛";
```
### 3.4 프로퍼티를 삭제하는 방법
```js
delete person.job;
delete person["favoriteFood"];
console.log(person);
```
### 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
```js
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2)
```
# 객체 2
## 1. 상수 객체 (const)
```js
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제

console.log(animal)
```
- 상수인데 왜 프로퍼티 추가, 수정, 삭제가 모두 가능할까?
- 상수는 엄밀히 말하면 새로운 값을 할당하지 못하는 변수
- animal = 123 처럼 아예 새로운 값을 할당하는 것은 불가능하지만, 원래 있던 값의 객체들을 수정하는 것은 가능

## 2. 메서드
- 값이 함수인 프로퍼티를 말함
```js
const person = {
    name: "홍길동",
    sayhi() {
        console.log("안녕!");
    },
}

person.sayhi();
person['sayhi']();
```

# 배열(array)
- 여러 개의 값을 순차적으로 담을 수 있는 자료형
## 1. 배열 생성
```js
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
    1, 
    2, 
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];
console.log(arrC);
```
- 배열 안에 들어갈 것들은 모든 형태 가능하고, 길이의 제한도 없음
## 2. 배열 요소 접근
```js
let item1 = arrC[0]; // 인덱스는 0부터 시작 
let item2 = arrC[1];

arrC[0] = 'hello';
console.log(arrC[0])
```

