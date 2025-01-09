import "./App.css"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}/>
        </section>
        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
      </div>
    </>
  )
}
// section들로 묶는이유는 컴포넌트들마다 백그라운드랑 여백을 적용하기 위해서
export default App
