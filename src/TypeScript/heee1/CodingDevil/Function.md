## [4] 함수

### 1. 함수 타입 정의 및 선택적 매개변수
- 함수의 매개 변수에 타입을 정의할 수 있다.
- 기본적으로 필수 매개 변수를 요구한다.
  ```typescript
  function add (num1:number, num2:number): number {
    return num1 + num2
  }

  function add2 (num1:number, num2:number): void {
    console.log(num1+num2)
  }

  function isAdult(age: number): boolean {
    return age > 19
  }

  // 함수의 매개변수도 인터페이스처럼 옵션으로 가능
  // 선택적 매개변수
  function hello(name?: string) {
    return `Hello ${name || "world"}` // name 있으면 name 출력, 없으면 world 출력
  }

  // 매개변수 기본값 설정
  function hello2(name="world") {
    return `Hello ${name}`
  }

  const result = hello()
  const result2 = hello("Sam")
  // const result3 = hello(123)  // 123 숫자형이므로 불가
  ```

</br>

- 타입스크립트에서는 매개 변수를 선택적으로 입력할 수 있다. 물음표(?)를 붙여 명시적으로 처리한다.
- 선택적 매개변수는 입력을 해도 되고 하지 않아도 된다. 주의할 점은 선택적 매개변수가 필수 매개변수보다 앞에 입력될 수 없다는 것이다.
  ```typescript
  function hello(name: string, age?:number):string {
    if (age !== undefined) {
      return `Hello ${name}. You are ${age}.`
    } else {
      return `Hello, ${name}`
    }
  }
  console.log(hello('sam'))
  console.log(hello('sam',30))


  // 선택적 매개변수(age)가 필수 매개변수 보다 앞에 있면 에러 발생
  function hello(age?:number, name: string):string {
    if (age !== undefined) {
      return `Hello ${name}. You are ${age}.`
    } else {
      return `Hello, ${name}`
    }
  }

  // age가 앞쪽에 있고 싶다면 이렇게
  function hello(age:number | undefined, name: string):string {
    if (age !== undefined) {
      return `Hello ${name}. You are ${age}.`
    } else {
      return `Hello, ${name}`
    }
  }
  console.log(hello(30, 'kiki'))
  console.log(hello(undefined, 'kiki'))

  ```

  </br>

### 2. 나머지 매개 변수
- 매개 변수의 개수가 다를 때 유용하게 사용된다.
- 전달받은 매개 변수는 배열로 처리할 수 있다.

  ```typescript
  function add(...nums:number[]) {
    return nums.reduce((result, num) => result + num, 0)
  }

  console.log(add(1,2,3)) // 6
  console.log(add(1,3,4,5,6,7,8,9,10,15)) //68
  ```

  </br>

### 3. this
- 매개변수를 통해 this를 명시적으로 정의, 해당 타입을 입력해야 한다.
- this의 타입을 명시하지 않으면 기본적으로 any로 처리된다.
  ```typescript
  // 1. this 타입 설정 X
  interface User {
    name:string
  }
  const Sam:User = {name:'Sam'}

  function showName() {
    console.log(this.name)  // 'this' implicitly has type 'any' because it does not have a type annotation.
  }
  const a = showName.bind(Sam)
  a() // Sam이 출력되지만 this에 빨간줄


  // 2. this 타입 설정
  interface User {
    name:string
  }
  const Sam: User = {name:'Sam'}

  function showName(this:User) {
    console.log(this.name)
  }
  const a = showName.bind(Sam)
  a()


  // 3. 매개변수가 있다면
  interface User {
    name:string
  }
  const Sam: User = {name:'Sam'}

  function showName(this:User, age:number, gender:'m'|'f') {
    console.log(this.name, age, gender)
  }
  const a = showName.bind(Sam)
  a(30, 'm')  //  "Sam",  30,  "m" 
  ```

</br>

### 4. 함수 오버로드
- 전달받은 매개변수의 타입에 따라 함수의 리턴 타입이 달라진다.
- 함수 오버로드를 통해 매개변수의 개수나 타입에 따라 다른 동작을 기술할 수 있다. 이를 동일한 함수 이름으로 작성해야 한다.
타입이나 개수에 따라 외부 변수의 동작 방식이 달라져야 할 때, 함수를 오버로드하여 해결할 수 있다.
  ```typescript
  interface User {
    name:string;
    age: number;
  }

  // 나이가 숫자면 User 반환, 아니라면 입문구 반환
  // 1. 에러 발생
  function join(name:string, age:number | string):User | string {
    if (typeof age ==="number") {
      return {
        name,
        age,
      }
    } else {
      return "나이는 숫자로 입력"
    }
  }

  // 코드가 분기 되어있지만 에러 발생(string을 반환할 수도 있다고 판단)
  // Type 'string | User' is not assignable to type 'User'.
  // Type 'string' is not assignable to type 'User'.
  const park:User = join("baki",30)
  const lee:string = join("kiki","20")


  // 2. 오버로드
  function join(name:string, age:number):User;
  function join(name:string, age:string):string;
  function join(name:string, age:number | string):User | string {
    if (typeof age ==="number") {
      return {
        name,
        age,
      }
    } else {
      return "나이는 숫자로 입력"
    }
  }
  ```

</br>

---

</br>

cf. interface 정의 할때 ';'와 ','차이
- 세미콜론(;) 사용 : TypeScript에서 일반적으로 선호되는 스타일
- 쉼표(,) 사용 : JavaScript의 객체 리터럴과 비슷한 스타일
- TypeScript 인터페이스에서 필드의 구분자는 세미콜론과 쉼표 모두 허용되며 두 방식 모두 컴파일러에 의해 동일하게 처리된다.
- 일관성이 중요하므로 팀에서 정한 스타일 가이드(예: Prettier 설정 등)에 따라 사용하는 것이 좋다. 대부분의 스타일 가이드에서는 세미콜론(;) 사용을 권장