# Context API 란?

> 컴포넌트 간의 데이터를 전달하는 또 다른 방법
> 기존에 Props가 가지고 있던 단점을 해결 가능

### Props의 단점 ?

Props는 부모 -> 자식 으로만 데이터를 전달할 수 있었음<br>
따라서 컴포넌트의 구조가 복잡해지고 깊이가 깊어지면 Props Drilling 이라는 문제가 발생<br>
Context API를 사용함으로써 Props Drilling의 문제를 해결 가능함

## Context API

> 일종의 데이터 보관소

### (1). createContext()

- Context 객체를 생성
- Provider와 Consumer를 포함하는 객체를 반환

### (2). Provider

- Context를 통해 공유할 데이터를 제공
- 모든 하위 컴포넌트에서 이 데이터를 접근할 수 있음
- value라는 속성을 통해 데이터를 전달

```JS
const MyContext = createContext()

function App() {
  return (
    <MyContext.Provider value={{ name: 'React' }}>
      <Child />
    </MyContext.Provider>
  )
}
```

### (3). useContext Hook

```JS
function Child() {
  const context = React.useContext(MyContext)
  return <div>{context.name}</div>
}
```

함수형 컴포넌트에서 Context 데이터를 사용하는 구문

