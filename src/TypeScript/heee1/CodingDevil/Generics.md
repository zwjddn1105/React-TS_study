## [7] Generics

### 1. 제네릭의 활용
- 제네릭을 사용하면 클래스, 함수, 인터페이스를 다양한 타입으로 재사용할 수 있다.
- 타입 파라미터를 선언한 후, 생성 시점에 사용할 타입을 결정한다.
  ```typescript
  // Generic
  // union 타입을 사용하거나 함수 오버로드 사용 => 이런 경우 사용하는 것이 'Generic'
  function getSize(arr: number[] | string[] | boolean[] | object[]): number {
    return arr.length;
  }

  const arr1 = [1,2,3]
  getSize(arr1)

  const arr2 = ["a", "b", "c"]
  getSize(arr2)

  const arr3 = [true, false, false]
  getSize(arr3)

  const arr4 = [{}, {}, { name: "Tim"}]
  getSize(arr4)
  ```

  ```typescript
  // 타입 파라미터. 일반적으로 T 사용
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1,2,3]
  getSize<number>(arr1)
  // 아래와 같은 의미
  // function getSize(arr: number[]): number {
  //   return arr.length
  // }


  const arr2 = ["a", "b", "c"]
  getSize<string>(arr2) // 이렇게 명시해주지 않아도 타입스크립트가 전달되는 매개변수 보고 어떤 타입인지 알고 있음

  // 이렇게 해도 됨
  // const arr0 = [1,2,3]
  // getSize<number | string>(arr1)

  const arr3 = [true, false, false]
  getSize(arr3)

  const arr4 = [{}, {}, { name: "Tim"}]
  getSize(arr4)

  ```
  - 일반적으로 'T'를 타입 파라미터로 사용한다.
  - 타입 파라미터는 호출 시에 전달된 타입에 기반해 결정되며 이를 통해 코드의 유연성이 증가한다.

</br>

### 2. 제네릭 활용 예시
  ```typescript
  interface Mobile<T> {
    name: string;
    price: number;
    // option: any;  // 어떤 데이터 들어올지 모름 => 제네릭 사용하자
    option: T;
  }


  const m1: Mobile<{color: string; coupon: boolean}> = { // 옵션 객체의 모습이 정해져 있다면 이렇게 해도 됨
  // const m1: Mobile<object> = {
    name: "zFlip",
    price: 1000,
    option: {
      color: "blue",
      coupon: false, 
    },
  }

  const m2: Mobile<string> = {
    name: "s23",
    price: 3000,
    option: "good",
  }
  ```
  - 'options'에는 알려지지 않은 데이터(문자열, 객체, 불린 또는 undefined)가 들어올 수 있다.
  - 제네릭을 사용하여 이러한 다양한 데이터 타입을 처리할 수 있다.

  ```typescript
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "a", age: 10}
  const car: Car = { name: "bmw", color: "red"}
  const book: Book = {price: 3000}

  // 어떤 T 타입이 올건데 name이 string인 객체를 확장한 형태라는 알려줌
  function showName<T extends {name: string}>(data: T): string {
    return data.name;
  }

  showName(user)
  showName(car)
  showName(book) // name 속성이 없어서 에러 발생
  ```

