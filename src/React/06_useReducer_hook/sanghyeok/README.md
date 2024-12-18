# useReducer
## useReducer란
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능
- 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음 => useState와 차이점

## useState를 사용하면?
- 컴포넌트 내부에 상태 관리 코드를 작성해야 함
```
function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const on Create = (content) => {
    const new Todo
    ...
    ...
    ...
  }
}
```
- useState를 사용하면 onUpdate, onCreate 등(상태관리코드)을 App 함수에서만 접근해야 함
- 복잡해지거나 다양한 상태 변화를 제공하게 되면 훨씬 긴 코드를 작성하게 됨
- App함수가 무엇을 나타내는지 가독성이 떨어지고 유지보수도 어렵게 됨


## useReducer를 사용하면?
- 컴포넌트 외부에 상태 관리 코드를 분리할 수 있음
```
function reducer() {
  // ...
}

function App() {
  const [todos, dispatch] = useReducer(reducer)
  //...
}
```

## 예시

```
import { useReducer} from "react"

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
  <!-- console.log(state, action)
  if (action.type === "INCREASE") {
    return state + action.data
  }
  else if(action.type ==='DECREASE') {
    return state - action.data
  } -->

  switch (action.type) {
    case "INCREASE":
      return state + action.data
    case "DECREASE":
      return state - action.data
    default:
      return state

  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0)

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
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
```

## 투두리스트 useReducer로 수정
```
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    cate "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
      ? { ...item, isDone: !item.isDone }
      : item
    )
    case "DELETE":
      return state.filter(
          (item) => item.id !== action.targeId
      )
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
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
        type: "UPDATE",
        targetId: targetId,
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }
}
```