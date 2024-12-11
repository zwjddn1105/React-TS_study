# React.js 개론
## 4.1 React.js를 소개합니다
- React의 기술적인 특징
    1. 컴포넌트를 기반으로 UI를 표현한다.
        - 여러 페이지에 공통적으로 사용되는 요소 관리 편리
    2. 화면 업데이트 구현이 쉽다.
        - 업데이트: 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것
        - React.js는 **선언형 프로그래밍**으로 동작하기 때문에 화면 업데이트를 구현하기 쉽다.(선언형 프로그래밍: 과정은 생략하고 목적만 간결히 명시하는 방법//식당에서 주문하기 <-> 명령형 프로그래밍: 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식) 
    3. 화면 업데이트가 빠르게 처리된다.
        - 브라우저의 랜더링 과정(Critical Rendering Path)에서 reflow(layout을 다시한다), repaint(painting을 다시한다)를 매번 하면 오래 걸림
        - React.js는 Virtual DOM을 사용하기 때문에 동시에 발생한 업데이트를 모았다가 한번에 수정할 수 있다. => 빠름
        cf. Virtual DOM: DOM을 JS객체로 흉내낸 것. 복제판

</br>

## 4.2 첫 React App 생성하기
- section04
- Vite 사용
    ```bash
    npm create vite@latest
    ```
- 라이브러리 설치
    ```
    npm i
    ```

</br>

## 4.3 React App 구동원리 살펴보기
- npm run dev: React App 서버를 가동 시켜라
- http://localhost(내 컴퓨터):5173(포트)
- 브라우저에서 내 컴퓨터에서 실행되고 있는 리액트 웹 서버에 접속 요청을 보낸다.
    ```javascript
    // index.html의 root라는 id를 가진 요소를 React의 Root로 변환(createRoot) 
    createRoot(document.getElementById('root')).render( // App 컴포넌트를 렌더링
      <StrictMode> 
        <App />
      </StrictMode>
    )

    // 강의 코드 살짝다름...왜?
    // 검색 결과: React 18 이전에는 createRoot를 사용하기 위해 react-dom에서 직접 ReactDOM을 임포트하고, ReactDOM.render()를 사용하여 앱을 렌더링
    // React 18 이후부터는 createRoot API가 react-dom/client에서 제공
    // 위의 코드는 React 18이후 버전이고, 아래의 강의 코드는 그 이전 버전
    import ReactDOM from 'react-dom/client'
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      )
    ```