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
