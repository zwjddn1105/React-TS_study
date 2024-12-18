import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback } from 'react'


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

  // 마운트 될 때만 해당 함수 생성
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
