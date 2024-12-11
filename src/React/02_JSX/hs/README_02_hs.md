# 02_JSX 구문

## 강의 목차

- '한입 리액트' : X
- '리액트 완벽 가이드' : 리액트 핵심 - 컴포넌트, JSX, 속성, 상태 등

---

### 컴포넌트

- 리액트는 컴포넌트를 결합하여 만들어지는 것
    - 컴포넌트는 잠재적으로 재사용이 가능한 구성 요소로 개발자가 생성 및 혼합하며 UI를 생성할 수 있다
- 컴포넌트로 인식되기 위해선 두 가지의 규칙이 있음
    - 함수의 제목이 대문자로 시작
    - 함수에서 렌더링 가능한 값이 반환 되어야 함
- App 컴포넌트를 조상으로 가지는 최상위 계층구조
    - App 컴포넌트는 루트 컴포넌트

### JSX로 UI 표현하기

- JavaScript Syntax eXtension → 자바 스크립트 문법 확장자
- 이 확장자는 개발자가 자바스크립트 파일 내에 html 마크업 코드를 작성하여 html 요소를 설명하고 생성할 수 있게 한다
- `{ }` → 숫자, 문자열은 무엇이든 가능 / 삼항 연산자도 가능
- 주의 사항
    - 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음 → if, for문 같은 문법은 값으로 표현될 수 없기 때문에 X
    - 숫자, 문자열, 배열의 값만 정상적으로 렌더링 된다
    - 모든 태그는 닫혀 있어야 한다
    - 최상위 태그는 반드시 하나여야만 한다 → 빈 태그로 묶어주기

### 커스텀 컴포넌트 사용하기

```jsx
// App.jsx

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
```

```jsx
// index.jsx

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
```

```html
<!--index.html-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Essentials</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

- 브라우저 방문자에게는 index.html 파일이 제공되는 것인데, index.html 파일에서는 index.jsx 파일을 로드하고 있음
- index.jsx → 위 코드인 App.jsx 를 import 하고 있음
    - App.jsx 는 함수로 전환이 되지 않고, 값으로 사용되며 호출된 다른 메서드의 인수로 쓰임
- App.jsx 에서 export 하는 것이 컴포넌트
- index.jsx 에 있는 것들은 HTML 파일에 가장 먼저 로딩되는 파일로 리액트 앱의 주요 입구로 작용
    - 아주 중요한 예외적인 경우
    - 이 위치에서 리액트 앱이 부팅된다고 할 수 있음
- `import ReactDOM from "react-dom/client";`
    - 앱 컴포넌트가 렌더링, 앱 컴포넌트의 내용을 화면에 출
- `header` , `image` , `div` 등과 같은 내장 컴포넌트는 리액트에서 DOM 노드로 렌더링
- 커스텀 컴포넌트는 함수로 실행

---

### 퀴즈 1 : 컴포넌트와 JSX

질문1. 개발자의 관점에서: 컴포넌트를 조합하여 UI를 구축하는 것에 대한 장점 중 하나는 무엇입니까?

- 작고 재사용 가능한 빌딩 블록

질문2. 리액트로 작업할 때: 어떻게 새로운 컴포넌트를 정의합니까?

- JSX 코드를 반환하는 함수 생성

질문3. JSX의 목적은?

- 컴포넌트 내 타켓 html 코드를 정의할 수 있도록 한다

질문4 . JSX에 대한 설명으로 **옳은** 것은?

- JSX 코드는 타겟 UI/HTML 코드를 정의하기 위해 사용된다

질문5. 리액트는 JSX 코드에서 사용한 컴포넌트로 하는 일은 무엇입니까?

- 웹사이트 DOM을 업데이트 할 명령어를 수행하는 컴포넌트 트리를 불러온다

질문6. 커스텀 컴포넌트는 주로 어떻게 사용됩니까?

- 커스텀 컴포넌트는 JSX 코드 내 HTML 요소처럼 사용된다

질문7. 다음 중 커스텀 컴포넌트의 설명으로 **틀린** 것은?

- 커스텀 컴포넌트는 무조건 사용하려는 컴포넌트 옆에 정의되어야 한다
    - 커스텀 컴포넌트는 어디에든 정의할 수 있음

---

### 동적 값 출력

- JSX 문법에 `{ }`  사용

```jsx
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
```

```jsx
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

```

### 동적 속성 설정

- import로 사진의 경로 불러오기 → 자바스크립트 변수로 저장
- 마찬가지로 `{ }` 사용

```jsx
import reactImg from './assets/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

```