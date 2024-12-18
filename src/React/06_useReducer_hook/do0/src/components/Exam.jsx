import { useReducer } from "react"

// reducer : 변환기
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.data
    case "DECREMENT":
      return state - action.data
    default:
      return state
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  const [state, dispatch] = useReducer(reducer, 0)

  const onClickPlus = () => {
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

export default Exam
