# React 완벽 가이드
## (15)`import` 및 `export`
- 여러 파일에 코드를 분리해 관리하기 -> import, export 키워드 필요
- 키워드를 사용하려면 type='module' 속성을 사용해야 함
- React에서는 추가 할 필요 없음
```js
export let apikey = 'fdfdfdfd'

import { 변수의 이름, 함수의 이름 } from '../(상대 경로)'

//defalut 방법
export default 'fdfdfdfd' -> 이름 없는 값을 export, 하나 더 추가할 시 오류

import apikey (이름을 할당) from "../(상대 경로)"

//내보낼 값이 하나 밖에 없으므로 default 사용

//이름이 있는 또 다른 값 내보내기
export let apikey = 'fdfdfdfd'
export let abc = 'abc'
import { 변수의 이름, 함수의 이름 } from '../(상대 경로)'


//그룹 만들기(객체 방식)
import * as util(그룹 이름) from '../(상대경로)'

//별칭 as 키워드
import { 변수의 이름, 함수의 이름 as content(별칭이름) } from '../(상대 경로)'
```

## (25)스프레드 연산자
- 전개 연산자, 중첩된 배열이 아닌 병합된 배열의 값이 담김
- ...배열의 값을 가져와 쉼표로 구분된 개별 값을 새 배열에 추가
- 객체에도 사용 가능
```js
const hobbies = ['Sports', 'Cooking']
const user = {
  name: 'Max',
  age: 34
}

const newHobbies = ["Reading"]

const mergeHobbies = [...hobbies, ...newHobbies(병합할 배열)]

//객체에서 사용
const extendedUser = {
  isAdmin: true,
  ...user
}
```

## (64)문제: 내부 요소에 Props(속성)이 전달되지 않을 경우
- 반복되는 섹션이나 요소들이 많아짐
- 간결함, 손쉽게 유지, 보수를 하기 위해 설정

```jsx
// Section.jsx
export default function Section({ title, children (props 요소들) }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      </section>
  )
}

// Examples.jsx
return (
  <Section title="Examples" id='examples'>
  ...
  </Section>
)

// id='examples' 이 'prop'들은 커스텀 컴포넌트에 설정할 때 자동으로 적용되거나 해당 컴포넌트 속 JSX 코드로 넘어가지 않는다


export default function Section({ title, children, id }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
      </section>
  )
}

// 위와 같이 구조 분해 할 경우 수동으로 매 속성을 내장 섹션 안에서 설정해야함 -> 큰 프로젝트에서 비효율
```

## (65)감싸진 요소에 Props(속성) 전달하기
```jsx
// Section.jsx
export default function Section({ title, children, ...props(식별자) }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      </section>
  )
}

// ...문법을 사용하면 자바스크립트가 이 구역 컴포넌트에서 사용할 수 있는 모든 다른 props를 모아와서 props object(속성 개체)로 병합
// 하나의 자바스크립트 객체에 props로 분류되는 모든 것이 모여서 컴포넌트로 들어옴

export default function Section({ title, children, ...props(식별자) }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
      </section>
  )
}
```

## (71) 세부 과정: 이미지 저장소 `public/` vs `assets/`
- `public/`폴더
  - 이미지를 public/ 폴더에 저장하고 index.html 또는 index.css 파일 내에서 직접 참조 할 수 있음
  - public/에 저장된 이미지(똔느 일반적으로 파일)이 프로젝트 개발 서버 및 빌드 프로세스에 의해 공개적으로 제공되기 때문
  - index.html과 마찬가지로, 이 파일들은 브라우저 내에서 직접 방문할 수 있으며, 따라서 다른 팔일에 의해 요청될 수도 있음
  - ex) loaclhost:5173/some-image.jpg를 불러오면 해당 이미지를 볼 수 있음

- `src/assets/`폴더
  - 이미지를 src/assets/폴더에 저장 할 수도 있음
  - src 또는 src/assets/와 같은 하위 폴더에 저장된 모든 파일(어떤 형식이든)은 공개적으로 제공되지 않음
  - 웹사이트 방문자가 접근할 수 없음. localhost:5173/src/assets/some-image.jpg 를 불러오려고 하면 오류가 발생
  - 대신, src/에 저장된 파일은 코드 파일에서 사용할 수 있음
  - 코드 파일에 가져온 이미지는 빌드 프로세스에 의해 인식되어 최적화되며, 웹사이트 제공하기 직전에 public/ 폴더에 "삽입"됨
  - 가져온 이미지는 참조한 위치에서 자동으로 링크가 생성되어 사용

- 어떤 폴더를 사용?
  - 빌드 프로세스에 의해 처리되지 않는 이미지는 public/ 폴더를 사용, 대체적으로 사용 가능 ex) index.html 파일이나 파비콘과 같은 이미지
  - 컴포넌트 내에서 사용되는 이미지는 일반적으로 src/폴더에 저장되어야함

## (78) 사용자 입력 & 양방향 바인딩
- 양방향 바인딩 : 입력값의 변화에 반응하고 변경된 값을 다시 입력값에 전달하는 방식

## (81) State(상태) 끌어올리기
- 상태를 제어할 때 가장 가까운 부모 컴포넌트에서 함 -> 이 컴포넌트가 해당 정보를 필요로 하는 두 컴포넌트 모두에 대해 접근이 가능하기 때문
```jsx
import { useState } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O ' : 'X' )
  }
}
```