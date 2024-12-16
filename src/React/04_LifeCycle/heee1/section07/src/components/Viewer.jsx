// import {useState} from 'react'
const Viewer = ({count}) => { // 구조분해할당으로 count 받아옴 -> 렌더링

  // Viewer 혹은 Controller에서 useState를 사용할 수 없는 이유↓
  // setCount 함수를 Viewer에서 Controller로 전달해줘야 함
  // 하지만 형제 관계에 있으므로 props를 전달해줄 수 없음
  // props는 부모에서 자식으로만 전달 가능
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
