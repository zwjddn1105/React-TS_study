import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  // 이벤트핸들러 만들어서 Controller (자식)컴포넌트에 전달하기
  const onClickButton = (value) => {
    setCount(count + value)
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* Viewer 컴포넌트에게 count props로 count state값 전달*/}
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
