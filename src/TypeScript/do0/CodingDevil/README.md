# TypeScript란?

**마이크로소프트**에서 구현한 JavaScript의 슈퍼셋(Superset) 프로그래밍 언어. 확장자로는 .ts를 사용하며, 컴파일의 결과물로 JavaScript 코드를 출력한다. 최종적으로 런타임에서는 이렇게 출력된 JavaScript 코드를 구동시키게 된다.

### 상세

- **타입스크립트**는 **정적 타입**을 지원한다. 이는 변수의 타입을 선언할 수 있고, 이를 통해 코드의 가독성을 높이고, 버그를 줄일 수 있다.
- 즉, '자바스크립트를 실제로 사용하기 전에 있을만한 타입 에러들을 미리 잡는 것'이 타입스크립트의 사용 목적이다.

## JavaScript와의 차이

- 타입 선언 기능의 존재

타입스크립트에서는 버그가 일어나기 쉬운 요소의 타입을 선언하여 버그가 일어나는 것을 막아준다. 가령 자바스크립트에서는 타입이 다른 두 변수를 계산을 시켜주면
```JS
const a = 3;
const b = '5';
console.log(a*b)  // 15
```
이게 계산이 작동되어 15를 출력하는 기능이 있다. 만일 프로그래머가 이게 다른 언어처럼 계산이 작동하지 않을 것을 의도하고 이렇게 코드를 지었다면 의도치 않은 작업이 이루어지는 버그가 발생하는 것이다.

타입스크립트에서는
```TS
const a:number = 3;
const b:string = '5';
console.log(a*b)  // error
// "The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.; 수리 연산의 우항 타입은 'any', 'number', 'bigint' 혹은 열거형이어야 합니다."
```
이렇게 숫자면 숫자, 문자열이면 문자열이라고 타입을 선언해주어서 계산이 작동되지 못하게 하거나, 컴파일 전에 오류 메시지를 띄우게 한다.

## TypeScript 실습 예시

### (1). 기본 자료형

```ts
let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];

let week: string[] = ['Mon', 'Tue', 'Wed'];
let week2: Array<string> = ['Mon', 'Tue', 'Wed'];

week.push(1); // error
```

### (2). 튜플(Tuple)

```ts
let x: [string, number];

x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

x[0].toLowerCase(); // OK
x[1].toLowerCase(); // Error
```

### (3). 함수 (void, never)

```ts
// void -> 로그만 찍고 아무것도 반환하지 않는 함수
function sayHello(): void {
  console.log('Hello');
}

// never -> 항상 에러를 반환하거나 끝나지 않는 함수
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while(true) {
    console.log('infLoop');
  }
}
```

### (4). enum (열거형)

```ts
// enum에 값을 주지 않으면 0부터 시작해 ++로 증가한다.
// enum에 값을 주면 그 값부터 시작해 ++로 증가한다.
enum Os {
  Window = 3,
  Ios = 10,
  Android
}

console.log(Os[10]); // Ios
console.log(Os.Ios); // 10

let myOs: Os;

myOs = Os.Window;
// 특정 값만 입력하게 강제하거나 비슷한 값끼리 묶을 때 사용함
```

### (5). null, undefined

```ts
let a: null = null;
let b: undefined = undefined;
```

## 인터페이스 (interface)

