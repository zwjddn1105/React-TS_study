# useReducer

## 9.1 useReducer를 소개합니다.

- Exam.jsx 실습
- 컴포넌트 내부에 새로운 state를 생성하는 react hook
- 모든 useState는 useReducer로 대체 가능
- useState와 달리 상태 관리 코드를 컴포넌트 외부로 분리 가능
- section08에서 투두 리스트 만들었을 때 todos state를 App 컴포넌트 안에 useState로 만들었기 때문에 이와 관련된 함수들(onCreate, onUpdate, onDelete)도 App 컴포넌트 안에 있어야했음
  -> UI를 렌더링하는 코드보다 상태를 관리하는 코드들이 더 길어짐 -> 가독성 떨어짐 => `useReducer`필요

</br>

## 9.2 투두리스트 업그레이드

- App.jsx 실습
- reducer 사용해서 onCreate, onUpdate, onDelete 수정하기
