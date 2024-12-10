// 1. 대입 연산자 '='
let var1 = 1

// 2. 산술 연산자
let num1 = 3 + 2
let num2 = 3 - 2
let num3 = 3 * 2
let num4 = 3 / 2
let num5 = 3 % 2
// * / % 가 +,-보다 우선순위가 높다
let num6 = 1 + 2 * 10 
console.log(num6) // 21
let num7 = (1 + 2) * 10 // 30
// 그냥 수학이랑 똑같다고 생각

// 3. 복합 대입 연산자
let num8 = 10
num8 = num8 + 20 // 이렇게 해도 되지만
num8 += 20 // 이렇게해도 됨
num8 %= 10 // 이것도 가능
console.log(num8) // 50

// 4. 증감 연산자
let num9 = 10
num9++ // 이 라인이 끝나야 1이 추가되는 것임, 후위연산
console.log(num9) // 11
console.log(++num9) // 12, 전위연산

// 5. 논리 연산자
let or = true || false
let and = true && false
let not = !true

console.log(or, and, not) // true, false, false

// 6. 비교 연산자
let comp1 = 1 === 2
let comp2 = 1 !== 2
console.log(comp1, comp2) // false, true
// = 을 2개써도 같은결과지만 3개쓰는이유는 2개만쓰면 값의 자료형까지 같은지는 비교가 안됨
// 예를들어 1=='1' 이렇게하면 true로 출력되게 된다.
let comp3 = 2 > 1
let comp4 = 2 < 1
console.log(comp3, comp4) // true, false

let comp5 = 2 >= 2
let comp6 = 2 <= 2
console.log(comp5, comp6) // true, true