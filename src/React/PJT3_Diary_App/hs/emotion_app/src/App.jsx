import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-12-18").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2024-12-17").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2024-11-11").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   }
// ]

function reducer(state, action){
  let nextState
  
  switch(action.type){
    case 'INIT':
      return action.data
    case 'CREATE':
      {nextState = [action.data, ...state]
        break
      }
    case 'UPDATE': 
      {nextState = state.map((item)=>
        String(item.id) === String(action.data.id)
          ? action.data
          :item
      )
      break
    }
    case 'DELETE':
      {nextState = state.filter((item) =>
        String(item.id) !== String(action.id) 
      )
      break
    }
    default:
      return state
  }

  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState
}

// context 통해 컴포넌트에 props 전달하기
export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  useEffect(()=>{
    const storedData = localStorage.getItem("diary")
    if(!storedData) {
      // 이렇게 return을 만나서 강제 종료되는 부분에도 로딩상태 -> false로 만들기
      setIsLoading(false)
      return
    }
    const parseData = JSON.parse(storedData)
    if(!Array.isArray(parseData)){
      setIsLoading(false)
      return
    }
    let maxId = 0
    parseData.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId + 1

    dispatch({
      type: "INIT",
      data: parseData
    })
    setIsLoading(false)
  }, [])
  
  // 데이터 보관
  // -> 값이 추가되거나 수정되거나 삭제될 때 이루어져야 함 -> Reducer함수 수정하기

  // 새로운 일기 추가
  // dispatch를 호출하면 -> action 객체를 전달 -> useReducer가 reducer함수 호출
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
        type: "UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content,
        }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  if (isLoading) {
    return <div>데이터 로딩중 . . .</div>
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          // 객체로 공급하기 위해 {{}} 괄호 두 개 사용
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
