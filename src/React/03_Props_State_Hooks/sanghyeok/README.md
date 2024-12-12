# Props
## Props
- 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 수 있음 => Props
```
function App() {
  return (
    <>
      <Button text={"메일"} img={"mail.png"} />
      <Button text={"카페"} img={"cafe.png"} />
      <Button text={"블로그"} img={"blog.png"} />
    </>
  )
}
```
```
Button.jsx

const Button = (props) => {
  console.log(props)
  retrun (
    <button>
      {props.text}
    </button>
  )
}

export default Button
```

- 자식 컴포넌트에게 값으로 전달 => 객체형태로 Button(props)에 전달

```
const Button = ({text, color}) => {

}

App.jsx

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a:1,
    b:2,
    c:3,
  }
}

return (
  <>
    <Button {...buttonProps} />

)
```

## Event Handling
- 이벤트가 발생했을 때 그것을 처리하는 것
- ex) 버튼 클릭시 경고창 노출
```
Button.jsx

const Button = ({text, color, children}) => {
  retrun (
    <button
    onClick={()=> {
      console.log(text)
    }}
    style={{color: color}}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button
```
- onClick => 이벤트 핸들러
- SyntheticBaseEvent => 합성 이벤트 객체

## 합성 이벤트
- 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
- Event 객체가 서로 다름, 브라우저 별 스펙이 달라 발생하는 문제 => Cross Browsing Issue
- 이것을 해결해주는 것 => 합성 이벤트

# State
## State
- 현재 상태
- 현재 가지고 있는 형태나 모양을 정의
- 변화할 수 있는 동적인 값
- State의 값에 따라 렌더링 되는 UI가 결정된다.

```
import {useStae} from "react"

function App() {
  const [count, setCount] = useState();  => 구조 분해로 보통 저장
  const [light, setLight] = useState("OFF")

  return 
  <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON")
      }}
      >
      {ligth === "ON"? "끄기" : "켜기"}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button 
      onClick={()=>{
        setCount(count + 1)
      }}
      >
    </div>
  </>
}
```

## 회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개

```
import { useState } from "react"

const Register = () => {

  const [name, setName] = useState("")

  const onChangeName = (e)=>{
    setName(e.target.value)
  }

  return (
    <div>
      <input onChange={onChangeName} placeholder={'이름'} />
    </div>
  )
}

export default Register

```
- 간단하게 정리하기 , state, event handler
```
import { useState } from "react"

const Register = () => {

  const [input, setInput] =sueState({
    name: "",
    birth: "",
    country: "",
    bio: "",

  })

  const onChange = (e) => {
    setInput ({
      ...input,
      [e.target.name] : e.target.value,
    })
  }

  <!-- const onChangeName = (e)=>{
    setInput{{
      ...input,
      name : e.target.value
    }}
  } -->

  return (
    <div>
      <input
      name='name'
      value = {input.name}
      onChange={onChange} 
      placeholder={'이름'} />
    </div>
  )
}

export default Register

```

# useRef
## useRef
- 새로운 Reference 객체를 생성하는 기능
- 값이 변경되더라도 리렌더링을 유발하지 않음

# React Hooks
## React Hooks
- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록
- useState, useRef 등
- 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
- 조건문, 반복문 내부에서는 호출 불가
- 나만의 훅(Custom Hook) 직접 만들 수 있다.
- src/hooks/ㅁㅁㅁ.jsx