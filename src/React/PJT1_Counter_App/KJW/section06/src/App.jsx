import "./App.css"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"

function App() {
  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer />
        </section>
        <section>
          <Controller />
        </section>
      </div>
    </>
  )
}
// section들로 묶는이유는 컴포넌트들마다 백그라운드랑 여백을 적용하기 위해서
export default App
