# LifeCycle
## LifeCycle
- 라이프사이클 = 생애주기
- Mount -> Update -> UnMount
- 라이프사이클 제어

## Mount
- 컴포넌트가 탄생하는 순간
- 화면에 처음 렌더링 되는 순간
- "A 컴포넌트가 Mount 되었다!" => A 컴포넌트가 화면에 처음으로 렌더링 되었다

## Update
- 컴포넌트가 다시 렌더링 되는 순간
- 리렌더링 될 때를 의미
- "A 컴포넌트가 업데이트 되었다!" => A 컴포넌트가 리렌더링 되었다

## UnMount
- 컴포넌트가 화면에서 사라지는 순간
- 렌더링에서 제외 되는 순간
- "A 컴포넌트가 언마운트 되었다!" => A 컴포넌트가 화면에서 사라졌다

## useEffect
- 리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 React Hook
  - 사이드 이펙트 : 부작용(부수적인 효과, 파생적인 효과), 컴포넌트의 동작에 따라 파생되는 여러 효과
```
useEffect(()=>{}, [])
```
- 배열에 의존 => 의존성 배열(dependency array) deps

## useEffect로 라이프사이클 제어하기
1. 마운트 : 탄생
```
useEffect(()=>{
  console.log("mount")
}, [])
```

2. 업데이트 : 변화, 리렌더링
```
useEffect(()=>{
  console.log("update")
})


//업데이트 단계에서만 실행
const isMount = useRef(false)
useEffect(()=>{
  if (!isMount.current) {
    isMount.current = true
    return
  }
  console.log("update")
})
```

3. 언마운트 : 죽음
```
useEffect(()=>{
  // 클린업, 정리함수
  return () => {
    console.log("unmount")
  }
}, [])
```

## React 개발자 도구
- React developer tools