# React basic Study Note

# React.js란?
- Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리
- 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술
- 국내/외적으로 인기가 많은 프론트엔드 라이브러리
## React의 기술적인 특징
1. 컴포넌트를 기반으로 UI를 표현한다.
2. 화면 업데이트 구현이 쉽다.
3. 화면 업데이트가 빠르게 처리된다.
### 1. 컴포넌트 기반으로 UI를 표현한다.
- 컴포넌트(Componont)
    - 우리말로 '구성요소'라는 뜻
    - 화면을 구성하는 요소, UI를 구성하는 요소를 말함
- 예로 웹 페이지가 Header, Main, Footer로 구성이 되어있다고 한다면, Header.js, Main.js, Footer.js로 컴포넌트별로 나누어 모듈화한다. 
- 중복코드를 제거하는 데서 장점
    - 중복 코드 발생 : 페이지 수가 늘어날수록 코드를 수정하기 어려워짐
- 유지보수 차원에서 용이함.
### 2. 화면 업데이트 구현이 쉽다
- 업데이트
    - 사용자의 행동(클릭, 드래그)에 따라서 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것
- 선언형 프로그램
    - 과정은 생략하고 목적만 간결히 명시하는 방법
    - 목적만 깔끔하게 명시하기에 코드가 간결함
    - 마치 우리가 식당에서 주문하는 것과 유사
        - ex. 토마토 파스타 하나 주세요.
- 반대 - 명령형 프로그램
    - 목적을 이루기 위해 모든 일련의 과정을 설명하는 방식
    -  모든 과정을 하나 하나 다 설명하기에 코드가 길고 복잡함
    - 마치 진상 손님처럼 주문하는 방식
        - ex. 주방으로 가서 면을 100g 꺼내세요. 그리고 뜨거운 물에 9분간 삶고 후라이팬을 꺼내 불을 올리고...
- 업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정 변수의 값을 바꾸는 것만으로도 화면을 업데이트 시킬 수 있다.
### 3. 화면 업데이트가 빠르게 처리된다.
- 화면 업데이트를 쉽게 구현할 수 있으면서 동시에 빠르게도 처리해줌
- 어떻게 가능할까?
    - [선수지식필요]
        1. 브라우저는 어떻게 동작하는가?
        2. HTML, CSS로 만든 페이지를 어떻게 렌더링하는가?
        3. 화면 업데이트는 어떻게 처리되는가?
1. 브라우저의 랜더링 과정(Critical Rendering Path)
    ![alt text](image.png)
    - DOM : 아래와 같은 html 코드를 브라우저가 자기가 이해하기 더 쉬운 방식으로 변환한 아래 그림과 같은 것
      - html을 일종의 객체 모델로 변환한 것

        ```html
        <div>
          <header>
             <p>헤더</p>
          </header>
          <main>
            <p>메인</p>
          </main>
        <div>
        ```
        ![alt text](image-1.png)
    - CSSOM도 마찬가지
    - DOM과 CSSOM를 통해 RanderTree라는 것을 만들게 되는데 이는 웹 페이지의 청사진과 같은 존재. (웹 페이지의 설계도)
      - DOM - 요소들의 위치, 배치, 모양에 관한 모든 정보
      - CSSOM - 요소들의 스타일과 관련된 모든 정보
    - Layout : 요소의 배치를 잡는 작업
    - Painting : 요소를 실제로 화면에 그려내는 과정
  - 그럼 업데이트는 어떻게 발생하는가?
    - JavaScript가 DOM을 수정하면 업데이트가 일어난다. 
    - DOM이 수정되었으니 Rander Tree, Layout, Painting 과정이 다시 일어남.
      - layout과 painting은 다시 하는데 오래 걸리는 작업
      - Layout -> `<Reflow>` : layout을 다시 한다.
      - Painting -> `<Repaint>` : Painting을 다시 한다.
    - 때문에 JavaScript로 DOM을 여러번 수정하면 페이지에 과부화가 걸리기 쉬움
    - 다양한 업데이트를 진행할 때는 동시에 발생한 업데이트를 모은 후 다 모였다면 한번에 수정하도록 신경을 써서 코드를 작성해야 한다.
      - 서비스의 규모가 커질수록 힘들어짐
      - React에서는 이 과정을 자동으로 해줌
        - React는 Virtual DOM을 사용하기 때문
        - Virtual DOM
          - DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판
          - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해 봄
# React App 생성하기
- 과정
    1. Node.js 패키지 생성
    2. React 라이브러리 설치
    3. 기타 도구 설치 및 설정
        - 입문자에게 권장하기 어려움
## Vite
- 차세대 프론트엔드 개발 툴
- 기본 설정이 적용된 React App 생성 가능
- React 공식문서에서도 권장되고 있음
## 생성 방법
1. 터미널에 `npm create vite@latest` 작성
2. project name 설정 
3. framwork 설정
4. variant 설정
    ```
    ✔ Project name: … section04
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript
    ```
## 생성 완료 후 살펴보기
- package.json에 들어가서 "dependencies" - "react-dom"이 18버전 아래라면 잘못 설치된 것으로 프로젝트 폴더 삭제 후 재생성 해야 함. 
- devDependencies에는 개발용 라이브러리로 배포시에는 포함되지 않음
- 위 라이브러리를 설치하기 위해 터미널에 `npm i` 입력
## 서버 접속해보기
- 터미널에 `npm run dev` 작성하기
- local 주소 `cmd + click` 하여 접속
- 서버 종료하기 : `ctrl + c`
# React App 구동 원리
- react 내부에는 web server가 내장되어 있었고, npm run dev라는 명령어를 통해 react app 서버를 가동 시키라고 명령한 것.

## 초기화면
`index.html`을 살펴보면 아무것도 없는데 초기화면에 다양한 구성이 들어 있음을 알 수 있음
- 이것은 `main.jsx`를 살펴보면 알 수 있음
    - `createRoot(document.getElementById('root')).render()`
    - 인수로 전달받은 요소를 리액트의 루트로 만드는 역할
    - `document.getElementById('root')` : index.html에 root를 id 값으로 갖는 요소들
    - `.rander()` 를 통해 루트에 무엇인가 랜더해주고 있음
        - React.StrictMode는 무시해도 되고, `<App />`이라는 것을 렌더링 해줌을 알 수 있음
        - 위와 같이 html 태그와 같이 작성하는 것은 컴포넌트를 랜더링하는 문법임.
- 이 App이 어디서 왔는지 위를 살펴보면 `App.jsx`에서 오고 있음을 알 수 있음
    - `App.jsx`를 살펴보면 함수가 html 태그들을 리턴해 주고 있음
    -  리액트에서는 함수가 html 태그들을 리턴하고 있으면 해당 함수를 컴포넌트라고 부름.
    - 때문에 app 컴포넌트라고 할 수 있음
  
# React 입문
목차
1. [실습 준비하기](#01-실습-준비하기)
2. [React 컴포넌트](#02-react-컴포넌트)

# 01 실습 준비하기
## 사전 준비 
### App.jsx 불필요한 파일, 코드 삭제

1. src/App.jsx에 2,3번째 줄에 있는 다음 코드를 삭제한다.
    ```jsx
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    ```
    - src/assets/react.svg 파일 삭제
    - public/vite.svg 파일 삭제
2. src/App.jsx에 App 함수 내에 `const [count, setCount] = useState(0)`를 삭제한다.
    - 그럼 상단에 `import { useState } from 'react'`가 회색으로 변함.
        - 아무데서도 이용되지 않는다는 뜻
        - 해당 문장도 삭제
3. App 함수가 리턴하고 있는 div태그와 안에 모든 내용 삭제
    ```jsx
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    ```
### 완성된 초기 App.jsx
```jsx
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
```
### css 불필요한 파일 삭제
1. App.css 파일 전체 내용 삭제
2. index.css 파일 전체 내용 삭제
3. src/main.jsx에 `<StrictMode> </StrictMode>`만 삭제 
    - 개발 모드로 리액트를 실행하고 있을 때 우리가 작성한 코드에 혹시나 잠재적인 문제가 있는지 내부적으로 검사하여 경고해주는 도구
    - 실습에서는 필요하지 않고, 입문자들에게는 혼란을 야기할 수 있기에 삭제.
## 실습 도구 추가하기
### 방법
1. vscode 좌측 Extensions 클릭
2. `eslint` 검색
3. 검색 결과 최상단에 Microsoft 뱃지가 달려있는 ESLint 확장프로그램이 나옴
4. 해당 확장 프로그램 설치
    - 우리가 작성하는 코드를 정적으로 검사하여 오류가 발생할만한 코드가 있으면 경고를 띄워주는 프로그램
    - 직접 실행해보기 전에 오류를 vscode에서 확인해볼 수 있음
5. 프로젝트 파일로 돌아오면 `eslint.config.js`라는 파일이 생김 
    - 이는 eslint의 옵션을 설정할 수 있는 파일
    - 'rules'에 불필요한 기능들을 끄는 코드를 작성해줌.
        ```
        "no-unused-vars":"off",
        "react/prop-types":"off",
        ```
        - `"no-unused-vars":"off",` : 코드 상에 실제로 사용하지 않는 변수가 있을 때 오류로 알려주는 옵션. 
        - `"react/prop-types":"off",` : 리액트를 안전하게 사용할 수 있도록 하는 옵션 (실습 중엔 오히려 불편함을 야기함.)
# 02 React 컴포넌트
## 컴포넌트
- 함수가 html 코드를 반환하도록 설정할 수 있는데, 이 경우를 컴포넌트라고 함.
- 함수의 이름을 따서 App(함수의 이름) 컴포넌트라고 부름
## 컴포넌트 만들기
- App 컴포넌트 위에 함수를 선언하고 Header 컴포넌트 만들어주기 
```js
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
```
- 함수로 만든 컴포넌트를 리액트에서는 함수 컴포넌트라고 부르기도 함.
- 함수 선언식 말고도 화살표 함수로 바꿔서 사용할 수도 있음
```jsx
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
```
- 둘 다 동일한 경우이기에 편한 방법으로 사용하면 됨
- 함수 말고도 class를 이용하여 컴포넌트를 만들 수도 있는데, 이 경우 작성해야 할 코드가 상당히 많아지기 때문에 함수를 이용하는 방법이 편리

### 컴포넌트 주의사항
- 컴포넌트 이름의 첫 글자는 대문자로 작성해야 함. ⭐️
    - 첫 글자를 소문자로 작성할 경우 리액트에서 내부적으로 해당 함수를 컴포넌트로 인정해주지 않음
## 컴포넌트 랜더링
- 현재 상태로는 컴포넌트가 화면에 나타나지 않음
- main.jsx에서 살펴보면 App 컴포넌트는 rander 안에 넣어져 있는데 Header의 경우 그 안에 들어가 있지 않음
### App 컴포넌트 안에 Header 컴포넌트를 넣어준다.
- App 컴포넌트의 리턴문 안에 Header 컴포넌트를 작성하면 App 컴포넌트가 main에서 랜더링 될 때 함께 랜더링 됨
```jsx
function App() {

  return (
    <>
      <Header />
      <h1>안녕 리액트!</h1>
    </>
  )
}
```
- 이 경우 Header 컴포넌트처럼 다른 컴포넌트의 리턴문 내부에 포함되는 컴포넌트를 **자식 컴포넌트**라고 하고 App 컴포넌트처럼 자식 컴포넌트를 갖는 컴포넌트를 **부모 컴포넌트**라고 부름.
- 이처럼 부모-자식 구조를 갖기 때문에 계층 구조가 생김.
- 추가적으로 Main, Footer 컴포넌트를 만든다고 할 때, Header와 마찬가지로 App 컴포넌트의 자식 컴포넌트로 배치를 시켜줘야 함.
- 리액트의 모든 컴포넌트는 화면에 랜더링 되기 위해서는 App 컴포넌트의 자식 컴포넌트로 작성되어야 함.
    - 때문에 리액트의 모든 컴포넌트는 App 컴포넌트를 **최상위 조상**으로 갖는다. 
- App 컴포넌트
    - 모든 컴포넌트의 최상위 조상.
    - 뿌리 역할을 한다고 하여 **Root** 컴포넌트라고 부름
    - 루트 컴포넌트는 main.jsx에 rander에 인수로서 전달된다.
- 루트 컴포넌트는 다른 컴포넌트로 변경할 수 있음
    - 그러나 관례상 개발자들은 App이라는 이름을 가진 컴포넌트를 루트로 사용함.
## 모듈화
- 컴포넌트 별로 모듈화를 위해 각각의 파일에 작성하는 것이 일반적.
- src 폴더 안에 루트 컴포넌트를 제외한 컴포넌트들을 모아놓기 위한 "components"폴더를 제작
- 해당 폴더 안에 `Header.jsx` 파일을 작성.
- Header 컴포넌트를 해당 파일 안에 작성해준다. 
    - App 컴포넌트에 작성되어 있던 Header 컴포넌트 복사 + 붙여넣기
- Header 파일에서 컴포넌트를 내보낼 수 있게 하단에 명령어를 작성해준다.
    - `export default Header;`
- App 파일에서 Header 컴포넌트 불러오기
    - `import Header from "./components/Header";`
        - ES 모듈 시스템으로 해당 컴포넌트를 불러옴에도 불구하고 Header의 확장자명을 생략해도 됨.
        - vite로 만든 리액트 앱에서는 확장자를 작성하지 않아도 자동으로 파일을 찾아가도록 내부적으로 자동 설정 되어 있기 때문.
