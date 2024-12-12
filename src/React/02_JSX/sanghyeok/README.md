# JSX
## JSX란?
- JSX(JavaScript Extensions) 확장된 자바스크립트의 문법을 말함
```
const Main = () => {
  const number = 10;

  return (
    <main>
      <h1>main</h1>
      <h2>{number}</h2>
    </main>
  )
}

export default Main
```
- 변수 설정
- 삼항 연산자

## JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (조건문, 반복문 불가)
2. 숫자, 문자열, 배열 값만 렌더링 된다
3. 모든 태그는 닫혀있어야 한다
4. 최상위 태그는 반드시 하나여야만 한다
  - 최상위 태그 빈 태그도 가능 => console 확인 시 흩뿌려져있음

## style 설정
- 요소 자체에서 직접 style 설정 => 가독성이 떨어짐
```
<div
  style={{
    backgroundColor: "red",
    borderBottom : "5px solid blue"
  }}
  >
```

- Main.css 생성
```
.logout{
  background-color: red
  border-bottom: 5px solid green
}

<div className="logout">
```
- JSX에서는 JS과 같이 사용되기 때문에 class가 아닌 className을 사용