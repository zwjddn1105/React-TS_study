import './App.css'
import Header from '../components/Header'
import Editor from '../components/Editor'
import List from '../components/List'
import { useState, useRef } from 'react'

// App 내부에 있으면 리렌더링될때마다 반복되므로 외부에 선언
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(), // 타임스탬프
  },
  {
    id: 1,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "택배 언박싱",
    date: new Date().getTime(),
  },
]

function App() {
  // 각각의 todo를 객체형태로 배열 안에 넣기
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  // Editor에서 입력받은 할일 추가 기능
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    // todos.push(newTodo) // 이런식으로는 안된다. -> state값은 반드시 상태변화 함수를 호출해서만 수정 가능하다.
    setTodos([newTodo, ...todos])
  }

  // TodoItem의 체크박스 칠해졌을 때 호출
  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? {...todo, isDone: !todo.isDone}
          : todo
        )
      )
  }

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // 삭제대상이 아닌 아이템 필터링
    setTodos(todos.filter((todo)=>todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header />
      {/* props로 onCreate 전달 */}
      <Editor onCreate={onCreate}/> 
      {/* props로 todos 전달 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
