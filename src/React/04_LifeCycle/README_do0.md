# LifeCycle 이란?

Mount -> Update -> UnMount 의 순서로 진행

- Mount
  - 컴포넌트의 탄생
  - 화면에 처음 렌더링 될 때

- Update
  - 컴포넌트가 다시 렌더링 될 때
  - 컴포넌트의 업데이트

- UnMount
  - 컴포넌트가 화면에서 사라질 때
  - 렌더링에서 제외됨

---

### useEffect 기본 개념

> Vue.js의 onMounted와 유사한 기능을 가지고 있다.

```JS
useEffect(() => {
  // 실행할 효과 (side effect)
  return () => {
    // 클린업(cleanup) 함수 (옵션)
  }
}, [dependencies]) // 의존성 배열
```

- 의존성 배열에는 배열에 포함된 값이 변경될 때만 첫 번째 매개 변수의 함수가 실행됨
- 배열이 비어있으면, 컴포넌트가 마운트될 때 한 번만 실행
