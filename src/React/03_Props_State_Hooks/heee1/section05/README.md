# React 입문
## 5.1 실습 준비하기
- eslint.config.js  수정
    ```
    "no-unused-vars": "off",
    -> 코드 상에 실제로 사용하지 않는 변수가 있을 때 알려주는 옵션

    "react/prop-types": "off",
    -> 리액트 다 배우고 좀 더 안전하게 사용할 수 있게 해주는 옵션. 실습 중엔 불편할 수 있어서 끔 
    ```
</br>

## 5.2 React 컴포넌트
- React의 모든 컴포넌트들은 화면에 렌더링 되기 위해서 App(조상/Root) 컴포넌트의 자식 컴포넌트로 존재해야함
- Root 컴포넌트는 main.jsx의 render메서드의 인수로 전달
- App 대신 다른 컴포넌트로 바꿀 수도 있지만 관례상 App 사용
- Heder, Main, Footer 분리. ESM이지만 import시 확장자 생략해도 됨.(Vite로 만든 react 앱에서는 확장자 없이도 자동으로 파일 찾을 수 있게 내부적으로 설정 되어있기 때문)

</br>

## 5.3 JSX로 UI 표현하기

</br>

## 5.4 Props로 데이터 전달하기

## 5.5 이벤트 처리하기

## 5.6 State로 상태관리하기

## 5.7 State와 Props

## 5.8 ~ 5.9 State로 사용자 입력 관리하기

## useRef로 컴포넌트의 변수

## React Hooks
