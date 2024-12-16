# Context

## 11.1 Context란

- React Context: 컴포넌트간의 데이터를 전달하는 또 다른 방법. 기존의 Props가 가지고 있던 단점(Props Drilling)을 해결할 수 있음

- Props : 부모 -> 자식으로만 데이터 전달(App -> Child)
- 두단계 이상 깊어지게 된다면 데이터를 바로 전달할수 없음. ChildA를 거처서 ChildB로 전달(App -> ChildA -> ChildB)

  - ex. 전달할 함수 명 바뀌면 다 바꿔야함 /// Props drilling

  Context : 데이터 보관소(객체)

  - 여러개 생성 가능

## 11.2 Context 사용하기

## 11.3 Context 분리하기

- 최적화가 해제된 이유
  - Provider컴포넌트도 리액트의 컴포넌트이기 때문에 App 컴포넌트로부터 value props(todos, onCreate, onUpdate, onDelete)로 받은 객체에 변화가 생기면 리렌더링 발생
  - todo 추가, 수정, 삭제 했을 때 todos state가 바뀌면서 객체 다시 생성해서 넘겨줌(props로 받는 객체가 바뀜)
  - 부모 컴포넌트(Provider)가 리렌더링 되는 상황이기 때문에 자식 컴포넌트(Editorm List, TodoItem)도 같이 리렌더링

* [다시 정리] memo를 적용했지만 최적화 풀린 이유

  1. todo 추가, 수정, 삭제
  2. App 컴포넌트의 todos state 변경
  3. App 컴포넌트 리렌더링
  4. Provider 컴포넌트에 value props로 전달하는 객체가 다시 생성
     ```javascript
     // App.jsx
     <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
     ```
  5. 객체(onUpdate, onDelete)가 계속 다시 생성됨
     -> TodoItem 리렌더링
     - useContext로부터 불러온 값이 변경되면 props가 변경된 것과 같이 리렌더링 발생시킴
     ```javascript
     // TodoItem.jsx
     const TodoItem = ({ id, isDone, content, date }) => {
       const {onUpdate, onDelete} = useContext(TodoContext)
       ...
     }
     ```

* 해결방안
  - 변경될 수 있는 값(todos)과 변경되지 않는 값(onCreate, onUpdate, onDelete) Context 분리리
  - TodoStateContext, TodoDispatchContext
