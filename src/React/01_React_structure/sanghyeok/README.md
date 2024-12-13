# React.js
## React.js란?
- Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리
- 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술

## React의 기술적인 특징
1. 컴포넌트를 기반으로 UI를 표현한다
2. 화면 업데이트 구현이 쉽다
3. 화면 업데이트가 빠르게 처리된다.


### 1. 컴포넌트를 기반으로 UI를 표현한다.
- 컴포넌트(Component) : 우리말로 "구성요소"라는 뜻, 화면을 구성하는 요소, UI를 구성하는 요소를 말함
- 페이지의 수가 늘어날 수록 코드를 수정하기 어려워짐(중복 코드 발생)
- 여러 페이지에서 공통으로 사용되는 요소 -> Header.js 컴포넌트 만들기

### 2. 화면 업데이트 구현이 쉽다.
- 업데이트란? : 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것
- 선언형 프로그래밍 : 과정은 생략하고 목적만 간결히 명시하는 방법
  - 업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정 변수의 값을 바꾸는 것 만으로도 화면을 업데이트 시킬 수 있다.
- 명령형 프로그래밍 : 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식

### 3. 화면 업데이트가 빠르게 처리된다.
- 브라우저의 렌더링 과정(Critical Rendering Path)
  - DOM : 요소들의 위치, 배치, 모양에 관한 모든 정보
  - Render Tree : 웹 페이지의 청사진
  - CSSOM : 요소들의 스타일과 관련된 모든 정보
  - Layout : 요소의 배치를 잡는 작업
  - Painting : 실제로 화면에 그려내는 과정

- DOM이 수정되면 업데이트가 일어난다
  - Layout, Painting은 매우 오래걸리는 과정임
  - Reflow : Layout을 다시한다
  - Repaint : Painting을 다시한다

- React는 이 과정을 자동으로 해줌
  - Virtual Dom:
    - DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다
    - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해본다.
      - 연습 스윙 같은 느낌이라고 생각하면 된다.


## React App 실행하기
```
npm crate vite@latest
Project name: > 프로젝트 이름
Select a framework: > React 선택
Select a variant: JavaScript 선택

npm install
```
- public : 정적인 파일들 저장하는 곳(이미지, 폰트, 등)
- src : 코드들을 보관하는 곳


## React App 구동원리
- index.html에서 실행
- src/main.jsx에서 불러옴
  - id가 root인것을 랜더링
  - App 컴퍼런스 랜더링 -> App.jst import -> App컴포넌트
- main페이지가 어떤 순서로, 로직으로 실행되고 있는지 확인 필요

## 실습 준비
- ESLint extensions에서 설치
- public, assets에 있는 파일 삭제
- App.css, index.css 안에 있는 코드 삭제
- App.jsx App return 안에 있는 코드 삭제
- .eslintrc.cjs
  - "no-unused-vars": "off", 
  - "react/prop-types" : "off",

## React 컴포넌트
  - 첫글자 대문자
  - 함수로 생성
    ```
    function Header() {
      return(
        <header>
    ```
  - 자식 컴포넌트, 부모 컴포넌트
  - src/components 생성
    - Header.jsx 생성
    - Header 함수 코드 옮기기
    - export default Header; 작성
    - App.jsx에서 import Header from 주소
    
