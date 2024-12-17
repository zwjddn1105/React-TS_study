// 1. '+'버튼 누르면 dispatch 호출
// 2. reducer 함수 실행(매개변수 state에는 초기값 0, action에는 type: INCERASE, data: 1인 객체)
// 3. reducer 함수 내부 조건문 참
// 4. state + action.data로 새로운 state

import { useReducer } from "react";

// reducer: 변환(기 -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  // switch문으로 작성하는 것이 일반적
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }

  // if (action.type === 'INCREASE') {
  //   return state + action.data
  // } else if (action.type === "DECREASE") {
  //   return state - action.data
  // }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // 컴포넌트 내부에서 dispatch 함수를 호출하면 상태변화가 요청되고
  // useReducer가 상태변화를 실제로 처리하게 될 함수 호출
  // 첫번째 인수 : reducer함수, 두번째 인수: state 초기값
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 상태변화 요청(1만큼 증가시켜달라)
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    // dispatch를 호출하게 되면 reducer함수가 호출. 이 때 액션 객체가 매개변수로 전달
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
