# Optimization
## Optimization(최적화)
- 웹 서비스의 성능을 개선하는 모든 행위
- 단순한 것부터 어려운 방법까지 매우 다양함
- 일반적인 웹 서비스 최적화 방법 
  - 서버의 응답속도 개선
  - 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
  - 불필요한 네트워크 요청 줄임

- `React App 내부의 최적화 방법`
  - 컴포넌트 내부의 불 필요한 연산 방지
  - 컴포넌트 내부의 불 필요한 함수 재생성 방지
  - 컴포넌트의 불 필요한 리렌더링 방지

<br>

## useMemo - 불 필요한 연산 방지
- `메모이제이션` 기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅
- 메모이제이션(Memoization) : 기억해두기, 메모해두기 라는 뜻

![image](image%20(7).png)

```jsx
const { totalCount, doneCount, notDoneCount } =
  useMemo(() => {
    console.log("호출!")
    const totalCount = todos.length
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length
    const notDoneCount = totalCount - doneCount

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])
// 의존성배열 : deps
```

<br>

## React,memo - 불 필요한 리렌더링 방지하기
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환

```jsx
const MemoizedComponent = memo(Component)
//반환값 : 최적화된 컴포넌트  인수 : 컴포넌트
//props 기준 메모이제이션됨
```

![image2](image%20(8).png)

```jsx
// Header.jsx
import { memo } from "react"

...

const memoizedHeader = memo(Header)

export default memoizedHeader
```

- 함수는 객체
- 객체는 각각 주소값으로 해당됨
- 리렌더링 될 때마다 새로운 주소값으로 새로운 값으로 지정되고 있었음
- memo는 얕은 비교 => 함수는 다른 주소값으로 되기 때문에 다른 props로 비교

- 고차 컴포넌트 (HOC)
```jsx
export default memo(TOdoItem, (prevProps, nextProps)=>{
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 x
  // F -> Props 바뀜 -> 리렌더링 o
  if(prevProps.id !== nextProps.id) return false
  if(prevProps.idDone !== nextProps.isDone) return false
  if(prevProps.content !== nextProps.content) return false
  if(prevProps.date !== nextProps.date) return false

  return true
})
```

## useCallback
```jsx
//App.jsx
import {useCallback} from "react"

...

const onDelete = useCallback((targetId)=>{
  
},[])
```
