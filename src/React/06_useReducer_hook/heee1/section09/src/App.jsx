import "./App.css";
import Header from "../components/Header";
import Editor from "../components/Editor";
import List from "../components/List";
import { useState, useRef, useReducer } from "react";
// import Exam from '../components/Exam'

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
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]; // action.data: 새로 추가 될 데이터(onCreate함수에서 dispatch호출하면서 전달한 새로운 TodoItem)
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}

function App() {
  // 각각의 todo를 객체형태로 배열 안에 넣기
  // const [todos, setTodos] = useState(mockData) // 이제 reducer 사용할것이므로 불필요
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // Editor에서 입력받은 할일 추가 기능
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  // TodoItem의 체크박스 칠해졌을 때 호출
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* props로 onCreate 전달 */}
      <Editor onCreate={onCreate} />
      {/* props로 todos 전달 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
