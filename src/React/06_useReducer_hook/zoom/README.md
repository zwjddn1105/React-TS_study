# useReducer란?


- useReducer는 useState와 유사하지만 더 복잡한 상태 로직을 다루는 데 사용되는 훅입니다.
- 이 훅은 현재 상태와 dispatch 메서드를 반환합니다.

**구문**:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

```

**활용**:

1. 복잡한 상태 로직 관리: 여러 하위 값을 포함하는 복잡한 상태 객체를 다룰 때 유용합니다.
2. 성능 최적화: 상태 업데이트 로직을 컴포넌트 외부로 분리할 수 있어 성능 향상에 도움이 됩니다.
3. 예측 가능한 상태 변화: reducer 함수를 통해 상태 변화를 더 예측 가능하게 만들 수 있습니다.

**예시**:

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

```

## useReducer와 useState 비교

---

| 특징 | useReducer | useState |
| --- | --- | --- |
| 상태 복잡도 | 복잡한 상태 로직에 적합 | 단순한 상태에 적합 |
| 상태 구조 | 객체나 깊은 중첩 구조 처리 용이 | 단일 값이나 간단한 객체에 적합 |
| 상태 업데이트 로직 | 컴포넌트 외부의 reducer 함수에서 관리 | 컴포넌트 내부에서 직접 관리 |
| 코드 구조 | 액션 타입을 통한 명확한 구조화 | 간단하지만 복잡해질 수 있음 |
| 상태 변경 예측성 | 높음 (액션 기반 접근) | 중간 (직접 상태 변경) |
| 성능 최적화 | 복잡한 상태 업데이트 시 유리 | 단순한 상태 업데이트에 효율적 |
| 디버깅 | 액션 로그를 통한 쉬운 디버깅 | 상태 변화 추적이 상대적으로 어려움 |
| 테스트 용이성 | reducer 함수의 독립적 테스트 가능 | 컴포넌트와 결합된 테스트 |
| 학습 곡선 | 상대적으로 높음 | 낮음 |
| 상태 관리 확장성 | 대규모 애플리케이션에 적합 | 소규모 컴포넌트에 적합 |