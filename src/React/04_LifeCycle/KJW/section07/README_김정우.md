# section7_라이프사이클

## 7.1) 라이프사이클이란?

- 생애주기
    - 애기 컴포넌트 → 청소년 컴포넌트 → 성인 컴포넌트
    - Mount → Update → UnMount 3단계로 구분되는 라이프사이클을 갖는다.
    - Mount (탄생)
        - 컴포넌트가 탄생하는 순간, 화면에 처음 렌더링 되는 순간
        - A컴포넌트가 Mount되었다 == A 컴포넌트가 화면에 처음으로 렌더링 되었다.
        - ex) 서버에서 데이터를 불러오는 작업
    - Update (변화)
        - 컴포넌트가 다시 렌더링 되는순간
        - 리렌더링 될 때를 의미
        - A컴포넌트가 Update 되었다 == A컴포넌트가 리렌더링 되었다.
        - ex) 어떤 값이 변경되었는지 콘솔에 출력
    - UnMount (죽음)
        - 컴포넌트가 화면에서 사라지는 순간
        - 렌더링에서 제외 되는 순간을 의미
        - A컴포넌트가 UnMount되었다 == A컴포넌트가 화면에서 사라졌다.
        - ex) 컴포넌트가 사용하던 메모리 정
- 컴포넌트가 이처럼 다른 작업을 수행하게 만드는 것을 라이프사이클 제어라고 함

## 7.2) useEffect 사용하기

- 리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 React Hook
    - 사이드 이펙트란 리액트에서 부수적인 효과, 파생되는 효과 정도로 해석이 가능하다.
    - ex) 컴포넌트 내부값 변경 → 콘솔에 변경된 값 출력
    - ex) 컴포넌트 마운트 → 콘솔에 Mount 출력
    - ex) 컴포넌트 업데이트(리렌더) → 콘솔에 Update 출력
    - ex) 컴포넌트 언마운트 → 콘솔에 UnMount 출력
- App.jsx PJT1을 이어서 작업함

```jsx
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // useEffect의 두번째 인자인 배열에 들어가는 값이 바뀌면 콜백함수가 실행됨.
  // 이 배열을 따라서 의존성 배열이라 부른다
  // dependency array
  // 줄여서 deps
  // deps에 여러개의 변수가 들어가도 됨
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 이렇게하면 useEffect의 콜백함수는 count나 input 중 하나의 값만 바뀌어도 실행됨

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count)
    // 이런식으로 useEffect를 만들지 말고 이것만 출력하면 안될까?
    // setCount는 비동기함수이기 때문에 여기이벤트를 이용해서 콘솔에 출력하게 될 경우
    // 변경된 count값이 아닌 변경되기 전 count값이 출력된다.
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </section>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}
// section들로 묶는이유는 컴포넌트들마다 백그라운드랑 여백을 적용하기 위해서
export default App;

```

## 7.3) useEffect로 라이프사이클 제어하기

- App.jsx

```
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);
  // 1. 마운트: 탄생
  // 처음에 컴포넌트가 렌더링될 때 실행시키고 싶은 코드를 작성
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트: 변화, 리렌더링
  // 2번째 인자인 배열값을 전달하지 않으면 됨
  // isMount의 값이 처음은 false니 아래 update를 실행하지 않음
  // 이후 state의 값이 바뀌면 계속 리렌더링 되므로 update출력됨됨
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트: 죽음
  // Even.jsx 참조

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}
// section들로 묶는이유는 컴포넌트들마다 백그라운드랑 여백을 적용하기 위해서
export default App;

```

- Even.jsx

```
import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수를 보통
    // 클린업, 정리함수라 부름
    // 이는 보통 컴포넌트가 언마운트 될될 때 실행이 된다.
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;

```

## 7.4) React 개발자 도구 사용하기

- 무료 크롬확장 프로그램
    - React Developer Tools
    - 크롬 확장프로그램 관리 → 세부정보 → 사용 활성화 → 사이트엑세스 모든사이트에서 활성화 → 파일 url에 대한 액세스 허용 활성화(시크릿모드라면 시크릿모드에서 허용도 활성화) → React Developer Tools 고정
    - Components와 Profiler라는 탭이 생긴 것을 볼 수 있음
    - Components는 실제 이 앱의 컴포넌트 구조를 볼 수 있다.
    - 톱니바퀴 모양의 Highlight updates when components reder를 체크하게 되면 해당 앱에서 리렌더링 되는 부분을 형광처리해줌