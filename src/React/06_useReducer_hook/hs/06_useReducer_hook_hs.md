# 06_useReducer_hook

### useReducer

- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능
- useState와 useReducer는 비슷한 동작을 하지만 **차이점**이 있다면 ?
    - useReducer를 사용하면 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음
    - 컴포넌트 안에는 State 생성만 하고, 실제로 이 State를 관리하는 코드들은 함수를 통해 컴포넌트 외부에서 관리하도록 코드 분리 가능
    
- 언제 사용하나 ?
    - state의 값이 현재보다 더 복잡해지거나 더 다양한 상태 변화를 제공할 경우에는 해당 컴포넌트 안에 더 긴 코드를 작성할 수 밖에 없고, 컴포넌트의 주 역할인 UI렌더링에서 벗어나서 주객전도의 상황이 된다
    - 가독성이 떨어지게 되고, 유지보수도 어려워진다
    - 그래서 길어지고 복잡해진 코드들을 컴포넌트 외부의 별도 함수로 분리해 줄 필요가 있는데, 이때 useReducer라는 새로운 리액트 훅이 필요!!

```jsx
import { useReducer } from "react"

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  if(action.type === 'INCREASE') {
    return state + action.data
  }
  else if(action.type === 'DECREASE') {
    return state - action.data
  }
}

// 조건이 많아질 경우 아래와 같이 switch를 사용
function reducer(state, action) {
  switch(action.type) {
    case 'INCREASE': return state + action.data
    case 'DECREASE': return state - action.data
    default: state
  }
}

const Exam = () => {
  // dispatch -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // useReducer(reducer, 0) -> reducer : 함수, 0 : state 초기 값
  const [state, dispatch] = useReducer(reducer, 0)
  const onClickPlus = () => {
    // 인수 전달 : 상태가 어떻게 변화되길 원하는지 객체 형태로 전달
    // -> 액션 객체라고 부름
    dispatch({
      type: "INCREASE", // 증가시키길 원함함
      data: 1, // 1 만큼
    })
  }

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam
```

---

### todo list app - useReducer 사용하기

```jsx
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, act } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "FE study 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "면접 대비 !!",
    date: new Date().getTime(),
  }
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((item)=>
        item.id === action.targetId
          ? {...item, isDone: !item.isDone}
          :item
      )
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App

```

- `todos` 와 같이 배열 안에 객체가 들어가는 복잡한 구조는 useReducer를 사용하는 게 일반적이다
- 간단한 앱의 구현 (카운터 앱 등) 시에는 useState 사용하는 게 편하다