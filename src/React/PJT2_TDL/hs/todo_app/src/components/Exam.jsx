import { useReducer } from "react"

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
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