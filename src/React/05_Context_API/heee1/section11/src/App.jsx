import "./App.css";
import Header from "../components/Header";
import Editor from "../components/Editor";
import List from "../components/List";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
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
// App 안에 있으면 리렌더링 될때마다 다시 생성되므로 보통 컴포넌트 외부에 작성
export const TodoStateContext = createContext(); // 변하는 값
export const TodoDispatchContext = createContext(); // 변하지 않는 값
// export const TodoContext = createContext(); // Context 분리해서 기존에 사용하던 것은은 주석처리
// Provider : Context가 공급할 데이터를 설정하거나, Context에 데이터를 공급받을 컴포넌트들을 설정하기 위한 property///컴포넌트임

function App() {
  // 각각의 todo를 객체형태로 배열 안에 넣기
  // const [todos, setTodos] = useState(mockData) // 이제 reducer 사용할것이므로 불필요
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // Editor에서 입력받은 할일 추가 기능
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // TodoItem의 체크박스 칠해졌을 때 호출
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // 아래에서 useCallback 사용하여 최적화
  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  // const func = useCallback(()=>{},[])
  // (불필요하게 반복되지 않게 하고 싶은 함수, deps)
  // 콜백함수 그대로 반환해주기 때문에 변수에 담을 수 있음
  // ()=>{}이 부분에 해당하는 함수를 deps가 변경되었을 때만 다시 생성되도록 최적화
  // === 함수를 메모이제이션 하는 것
  // 컴포넌트가 최초 렌더링될떼(마운트)만 함수 생성. 후에 리렌더링 발생한다고 해도 함수를 생성하지 않게 됨

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // 객체값이 App컴포넌트 마운트 이후 재생성되지 않도록 설정
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          {/* props로 onCreate 전달 */}
          <Editor />
          {/* props로 todos 전달 */}
          <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

      {/* context 분리 사용으로 인한 주석처리 */}
      {/* <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}> */}
      {/* </TodoContext.Provider> */}
    </div>
  );
}

export default App;
