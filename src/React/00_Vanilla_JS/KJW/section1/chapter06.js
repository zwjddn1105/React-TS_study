// 1. 묵시적 형 변환
// -> js 엔진이 알아서 형 변환 하는 것
let num = 10
let str = "20"
const result = num + str
console.log(result) // 1020
// num이 묵시적으로 string으로 형변환이 됨
// 모든 불가능한 연산에 묵시적형변환이 진행되는 것이 아닌
// 특정 하나의 변수의 값을 형변환했을 때 오류가 발생하지 않고 연산이 잘 종료되는 경우에만 됨

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열을 숫자로 변환한다면
let str1 = 10
let strToNum1 = Number(str1)
console.log(10 + strToNum1) // 20

let str2 = "10개"
// let strToNum2 = Number(str2)
// console.log(strToNum2) // NaN
let strToNum2 = parseInt(str2)
console.log(strToNum2) // 10
let str3 = "adsfa10개"
let strToNum3 = parseInt(str3)
console.log(strToNum3) // NaN
// 앞에 문자열이 있으면 안됨

let num1 = 20
let numTostr1 = String(num1)
console.log(numTostr1 + "입니다") // 20입니다