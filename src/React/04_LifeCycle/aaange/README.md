# 01 라이프사이클이란?
## 라이프사이클(LifeCycle) = 생애 주기
- 탄생부터 죽음까지를 단계별로 나누어 놓은 것
## 리액트 컴포넌트의 라이프 사이클
|Mount|Update|UnMount|
|:---:|:----:|:-----:|
| like 탄생| like 변화| like 죽음|
|컴포넌트가 탄생하는 순간|컴포넌트가 다시 렌더링 되는 순간|컴포넌트가 화면에서 사라지는 순간|
|화면에 처음 렌더링 되는 순간|리렌더링 될 때를 의미|렌더링에서 제외되는 순간을 의미|
|"A 컴포넌트가 Mount되었다 -> A 컴포넌트가 화면에 처음 렌더링 되었다"|"A 컴포넌트가 업데이트 되었다 -> A 컴포넌트가 리렌더링 되었다"|"A 컴포넌트가 UnMount되었다 -> A 컴포넌트가 화면에서 사라졌다"|
- 라이프 사이클 제어
    - 라이프 사이클 별로 다른 기능을 하도록 설정하는 것.
        - 예)
        - Mount : 서버에서 데이터를 불러오는 작업
        - Update : 어떤 값이 변경되었는지 콘솔에 출력
        - UnMount : 컴포넌트가 사용하던 메모리 정리
    - uesEffect 훅을 사용하기



# 02 useEffect 사용하기
## useEffect
- 리엑트 컴포넌트의 **사이드 이펙트**를 제어하는 새로운 React Hook
- 사이드 이펙트(Side Effect)
    - 우리말로 **"부작용"** 이라는 뜻
    - 리액트에서는 **"부수적인 효과"**, **"파생되는 효과"** 정도로 해석 가능
    - 예
        - "과식을 하면 살이 찐다"
        - **"살이 찐다"** 의 경우 과식을 함으로써 파생되는 효과 = **사이드 이펙트(Side Effect)**
    - 리액트 컴포넌트의 사이드 이펙트
        - 컴포넌트의 동작에 따라 파생되는 여러 효과

        |동작|사이드 이펙트|
        |:-:|:--------:|
        |컴포넌트 내부의 값 변경| 콘솔에 변경된 값 출력|
        |컴포넌트 마운트|콘솔에 "Mount"라고 출력|
        |컴포넌트 업데이트(리렌더)|콘솔에 "Update"라고 출력|
        |컴포넌트 언마운드|콘솔에 "UnMount"라고 출력|
## 실습
### 사전 준비
- 해당 섹션에서는 06섹션에서 사용했던 react 프로젝트를 그대로 사용할 것
    - 섹션 별로 정리를 하고 싶다면 node_modules 폴더만 제외하고 복사해오기.
    - `npm i`로 설치하기
    - `npm run dev`로 서버 켜기
### App.jsx에서 useEffect 사용하기
- useEffect도 react에 있는 내장 함수이기 때문에 동일 경로로 useState와 함께 불러오기
    - `import { useState, useEffect } from 'react'`
- useEffect()의 첫 번째 인수로는 콜백 함수를 넣어주고, 두 번째 인수로는 배열을 넣어준다.
    - 두 번째 인수에 들어간 배열이 바뀌게 되면 첫 번째 인수로 들어간 콜백함수를 호출하게 됨.
    - `useEffect(() => {}, [])`
    ```jsx
    useEffect(() => {
        console.log(`count: ${count}`)
    }, [count]);
    ```
    - useEffect Hook은 두 번째 인수에 의존한다.
    - 인수에 어떤 값이 들어갔느냐에 따라 다르게 동작하기 때문에 두 번째 인수인 배열을 **의존성 배열(dependency array, deps)** 이라고 부름.
    - deps에는 값을 여러개 넣어도 됨.
        - 여러 개 중 하나의 값만 바뀌어도 실행 됨.
### 이벤트 핸들러에 console을 추가하는 것과 무엇이 다를까?
```jsx
  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  }
```
- 이렇게 코드를 작성하고 +100 버튼을 클릭한다면 콘솔로그는 다음과 같이 뜰 것
    ```
    0
    ```
- 그리고 추가로 +1 버튼을 클릭한다면 다음과 같은 콘솔로그를 볼 수 있음
    ```
    100
    ```
- 이처럼 변경되기 이전의 값을 자꾸 콘솔에 출력하는 것.
#### 이유
- 함수 안에 setCount라는 함수는 **비동기**로 동작하기 때문
- 비동기로 동작한다.
    - setCount()를 여기에서 호출했지만 함수의 완료는 나중에 뒤늦게 되는 것을 말함.
- 즉, console.log가 호출되는 시점에는 setCount 함수가 호출만 된 것이지 완료가 된 것이 아니다. (아직 state의 값이 변경되지 않았다.)
#### 결론
- 변경된 state의 값을 바로 사용하여 side Effect에 해당하는 부가적인 작업을 진행하여야 한다면 useEffect를 사용해야 한다.



# 03 useEffect로 라이프사이클 제어하기
## 1. Mount를 useEffect로 제어하기
- Mount를 useEffect로 제어하는 방법은 함수를 작성하고 deps를 빈 배열로 입력하면 됨. ⭐️
    ```jsx
    useEffect( () => {}, [])
    ```
- useEffect의 함수는 deps의 값이 변경되어야 실행되기 때문에 처음 마운트 될 때 이후에는 다시는 실행되지 않음.
    ```jsx
    useEffect( () => {
        console.log("Mount")
    }, [])
    ```
## 2. Update를 useEffect로 제어하기
- useEffect를 작성하고 deps를 생략하기. ⭐️
    ```jsx
    useEffect( () => {})
    ```
- 이렇게 되면 해당 useEffect는 Mount될 때 한번 호출되고 리렌더링(업데이트)될 때 마다 호출될 것
    ```jsx
    useEffect( () => {
        console.log("Update");
    })
    ```
    - 컴포넌트를 클릭해 리렌더링 될 때마다 콘솔에 Update가 출력됨.
- 만약 마운트 될 때를 제외하고 업데이트가 될 경우에만 실행시키고 싶다면 마운트가 되었는지, 안되었는지를 확인하는 useRef를 활용하면 됨.
    - useRef import하기
        ```jsx
        import { useState, useEffect, useRef } from 'react'
        ```
    - state 아래에 다음과 같은 변수 선언
        ```jsx
        const isMount = useRef(false);
        ```
    - 그리고 useEffect에 isMount가 false라면 true로 변경하고 함수를 종료해버리는 조건문을 작성하면 된다.
        ```jsx
        useEffect( () => {
            if (!isMount.current) {
                isMount.current = true;
                return;
            }
            console.log("Update");
        })
        ```
## 3. UnMount를 useEffect로 제어하기
### unMount를 제어하기 위해 필요한 컴포넌트 생성
- UnMount를 제어하기 위해서는 조건에 따라 화면에 나타났다, 사라졌다 하는 컴포넌트가 필요함.
- component 폴더에 `Even.jsx` 파일 생성
    ```jsx
    const Even = () => {
        return <div>짝수입니다</div>
    };

    export default Even;
    ```
- App.jsx에 Viewer 컴포넌트 아래에 삼항연산자로 호출
    ```jsx
    <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
    </section>
    ```
    - 작성하면 상단에 Even의 import문 자동으로 생길 것. 생기지 않는다면 직접 작성하기
### unMount 제어하기
- useEffect의 두 번째 인수에 빈 배열을 넣고, 첫 번째 인수인 콜백함수의 return문에 콜백함수를 하나 더 작성하기 ⭐️
- Even.jsx 파일 상단에 useEffect import 하기
    ```jsx
    import { useEffect } from "react";
    ```
- 컴포넌트 안에 useEffect 작성
    ```jsx
    useEffect(() => {
        return () => {}
    }, [])
    ```
    - useEffect의 콜백함수가 반환하는 함수를 **클린업, 정리함수** 라고 부름.
        - 정리함수는 useEffect가 끝날 때 호출이 됨
    - useEffect는 deps가 비어 있으니 Mount될 때 실행이 되고, 종료는 그 반대인 UnMount될 때 종료됨.
        - 종료가 될 시점에 정리함수를 호출하게 되는 것.
- 정리함수 작성하기 
    ```jsx
    const Even = () => {
        useEffect(() => {
            return () => {
                console.log("UnMount")
            }
        }, [])
        return <div>짝수입니다</div>
    };
    ```



