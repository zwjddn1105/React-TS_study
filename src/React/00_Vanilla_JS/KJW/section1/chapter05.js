// 1. Number Type
let num1 = 27
let num2 = 1.5
let num3 = -20
// 사칙연산 모두지원

let inf = Infinity
let mInf = -Infinity
let nan = NaN // Not a Number
console.log(1*"Hello") // 불가능한 수치연산 -> 결과가 NaN으로 나옴

// 2. String Type
let myName = "김정우"
// 따옴표를 사용하지 않는다면 김정우를 문자열이 아닌 변수로 취급함
let myLocation = "목동"
let introduce = myName + myLocation
console.log(introduce) // 김정우목동
// 즉 js에서는 string 덧셈연산을 지원함
let introduceText = `${myName}는 ${myLocation}에 거주합니다`
// python의 f-string과 같음
console.log(introduceText) // 김정우는 목동에 거주합니다
// 이를 템플릿 리터럴 문법이라고 부른다. 중요함

// 3. Boolean Type
let isSwitchOn = true
let isEmpty = false

// 4. Null Type (아무것도 없다)
let empty = null

// 5. Undefined Type
// null타입처럼 특수한타입, 변수를 선언하고 그 변수에 어떠한값도 지정하지 않았을 때(초기화 안했을 때)
// 자동으로 할당되는 값이다.
let none
console.log(none) // undefined
// null과의 차이점은 null은 개발자가 '직접' 명시해서 할당을 해줘야함