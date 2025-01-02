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

## [2강] TypeScript 실습 예시

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

## 3강 인터페이스 (interface)

### (1). 인터페이스 기본

```ts
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; // 선택적 프로퍼티
  birthYear: number;
  // readonly birthYear: number; // 읽기 전용 프로퍼티
  [grade: number]: Score; // 인덱서블 타입
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
}

// 인터페이스를 사용하면 객체의 타입을 미리 정의할 수 있다.
user.age = '30'; // error
user.gender = "male"

console.log(user.age);
```

### (2). 함수형 인터페이스

```ts
// 숫자끼리 더하는 함수형 인터페이스
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  return x + y;
}

add(10, 20);

// ------------------------------------------------
// 나이를 받아서 성인인지 아닌지 판별하는 함수형 인터페이스
interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
}

a(33);  // true
```

### (3). 클래스 인터페이스 (implements)

```ts
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// Interface Inheritance
interface Benz extends Car {
  color;
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('Benz start');
  }
}

const benz: Benz = {
  color;
  door: 5,
  stop() {
    console.log('Benz stop');
  }
}

class Bmw implements Car {
  color;
  wheels: 4;

  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log('BMW start');
  }
}

const b = new Bmw('green');
console.log(b);
// Bmw { color: 'green', wheels: 4 }
b.start();
// BMW start
```

- 여러 인터페이스를 상속받을 수 있다.
```ts
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
```

## 4강 함수 (Function)

### (1). 함수 기본형

```ts
function add(a: number, b: number): number => a + b;

// optional parameter (선택적 매개변수)
function hello(name?: string) {
  return `Hello, ${name || 'world'}`;
}

// 기본 매개변수 작성으로 동일하게 사용 가능
function hello2(name = 'world') {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello('John');
// const result3 = hello(1); // error
```

### (2). 함수 주의사항

```ts
// 필수 매개변수보다 선택적 매개변수가 먼저 나오면 안된다!!
// 앞에 쓰려면 다음과 같이 사용한다.
function hello(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}, you are ${age} years old`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello(30, "Sam"));
console.log(hello(undefined, "Sam"));
```

### (3). Rest Parameter

```ts
function add(...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5); // 15
```

### (4). this 사용법

```ts
interface User {
  name: string;
}

const Sam: User = {name: 'Sam'}

// this의 타입을 지정해줄 수 있다.
function showName(this: User, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender)
}

const a = showName.bind(Sam)
a(30, 'm'); // Sam
```

### (5). Function Overloading

-  함수 오버로딩을 사용하면 함수의 매개변수와 반환값의 타입을 다르게 설정할 수 있다.

```ts
interface User {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {name, age};
  } else {
    return `${name} ${age}`;
  }
}
```

## 5강 리터럴, 유니온/교차 타입

### (1). 리터럴 타입 (Literal Type)

- 리터럴 타입은 문자열, 숫자, 불리언 등의 값 자체를 타입으로 지정할 수 있다.

```ts
// userName1처럼 정해진 스트링 값을 가진 것을 문자열 리터럴 타입이라고 함.
const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "developer"
}
```

### (2). 유니온 타입 (Union Type)

```ts
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

// gift: Car | Mobile => Union Type
// 식별 가능한 유니온 타입
function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
  // 검사할 항목이 많아지면 switch 문을 사용.
}
```

### (3). 교차 타입 (Intersection Type)

```ts
interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: 'toyCar',
  start() {},
  color: 'blue',
  price: 1000,
}
```

## 6강 클래스 (Class)

### (1). 클래스 기본

```ts
class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start')
  }
}

const bmw = new Car('red')
```

### (2). 접근 제한자 (Access Modifiers) - public, private, protected

```ts
/*
  public: 어디서든 접근 가능
  private: 클래스 내부에서만 접근 가능 (자식 OK)
  protected: 클래스 내부와 상속받은 클래스에서만 접근 가능
*/
class Car {
  // private name: string = 'car';
  #name: string = 'car';
  color: string;
  static wheels: number = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log('start')
    console.log(this.#name)
    console.log(this.wheels)  // static 변수는 this로 접근 불가
    console.log(Car.wheels)  // static 변수는 클래스명으로 접근
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
    showName() {
      console.log(super.#name);  // error
    }
  }
}

const z4 = new Bmw('black');
console.log(z4.name); // error
// z4.name = 'zzzz4';

console.log(Car.wheels);  // 4
```

### (3). 추상 클래스 (Abstract Class)

- 추상 클래스는 인스턴스를 생성할 수 없는 클래스이다. 상속받아서 사용해야 한다.

```ts
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start')
  }
  abstract doSomething(): void;
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(3);
  }
}

const z4 = new Bmw('black');
```
