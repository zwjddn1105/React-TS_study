# 05_Context API

## 강의 목차

- '한입 리액트' : 섹션 11. Context
- '리액트 완벽 가이드' : 섹션 10. 리액트의 컨텍스트 API & useReducer - 상태 관리 심화 단계

---

### React Context

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 props가 가지고 있던 단점을 해결할 수 있음
    - props의 단점
        - 부모 → 자식으로만 데이터를 전달할 수 있음
        - 데이터를 이중으로 전달해야 함
        - 프롭스 드릴링
- 데이터 보관소 역할을 하는 객체
- 다이렉트로 데이터 전달 가능

```jsx
export const TodoContext = createContext();

return (
    <div className="App">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
```

- `TodoContext.Provider` 로 컴포넌트를 감싸면 그 하위 컴포넌트들은 해당 데이터를 다이렉트로 사용할 수 있다
- 데이터를 받는 컴포넌트에선 `TodoContext` , `useContext` import가 필요함
    - 컴포넌트 함수 안에서 `const data = useContext(TodoContext)` 와 같이 정의
    - 필요한 정보가 정해져 있다면 구조 분해 할당 사용하기

### 컨텍스트 분리하기

- 변경될 수 있는 값
- 변경되지 않는
- useMemo 살펴보기
    - useMemo 를 통해 다시는 변하지 않도록 함