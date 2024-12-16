# 최적화

## 10.1 최적화란
* React App 내부의 최적화 방법
  - 컴포넌트 내부의 불필요한 연산 방지
  - 컴포넌트 내부의 불필요한 함수 재생성 방지
  - 컴포넌트의 불필요한 리렌더링 방지


## 10.2 useMemo와 연산 최적화
* Memoization

* useMemo
  - '메모이제이션' 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅


## 10.3 React.memo와 컴포넌트 렌더링 최적화
* React.memo : 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
  ```
  const MemoizedComponent = memo(Component)
  - 인수 : Component
  - 반환값 : MemoizedComponent(최적화된 컴포넌트), props를 기준으로 메모이제이션 됨 
  ```
  - MemoizedComponent : 부모 컴포넌트가 리렌더링 되더라도 자신이 받는 props가 변경되지 않으면 리렌더링 X(불필요한 리렌더링 X)


  ## 10.4 useCallback과 함수 재생성 방지
  - React App 최적화 타이밍 : 하나의 프로젝트를 거의 완성했을 때
    - 중간에 useCallback 사용하면 추가 기능 구현할 때 최적화 해제될 수도
  - 꼭 최적화 해야되는 부분에만 하기