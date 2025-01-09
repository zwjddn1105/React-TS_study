# section6_PJT1CounterApp

## 6.1 프로젝트 소개 및 준비

- 버튼을 클릭하면 카운트가 증가하는 간단한 앱
- 현재카운트를 표시하는 Viewer 컴포넌트
- 카운트를 늘리거나 줄이는 Controller 컴포넌트
- 리액트 프로젝트만들고 eslint.config.js에 경고문구 표시 off기능 넣을 것
    - rules에 추가하면됨

```jsx
"no-unused-vars": "off",
"react/prop-types": "off",
```

## 6.2 UI 구현하기

- 코드참조

## 6.3 기능 구현하기

- <App> , <Viewer>, <Controller>
    - viewer에서 controller로 setCount 전달이 불가능
    - 부모, 자식간에 props로만 전달할 수 있기 때문
    - controller에서 viewer로도 동일한 논리로 전달 불가능
    - App에서 전달해야 함
- 특정 컴포넌트가 다른 컴포넌트에 데이터를 전달하려면 두 컴포넌트는 반드시 부모자식 관계를 갖고 있어야 한다.
    - 그렇기 때문에 하나의 state를 여러곳에서 관리하게 될 경우 공통부모가 되는 곳에 만들어야 한다.
    - 이를 리액트에서 State Lifting(State 끌어올리기) 라고 한다.
    - 리액트에서 데이터 흐름은 위에서 아래로 한 방향으로 흐른다. (= 단방향 데이터 흐름)