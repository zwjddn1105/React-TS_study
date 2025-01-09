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
