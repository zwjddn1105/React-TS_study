# Counter App
## 현재 카운트
- 현재 카운트가 나오는 것
- `<Viewer/>`

## 카운트 컨트롤러
- 카운트를 늘리거나 줄이는 것
- `<Controller/>`

## 초기 옵션 설정
```cjs
'no-unused-vars':"off",
"react/prop-types":"off",
```

## props, State Lifting(State 끌어 올리기)
- 컴포넌트에서 컴포넌트로 부모에서 자식으로만 전달 가능
- `</Viewer>`와 `<Controller/>`은 형제 관계

![image](./image%20(4).png)
- 해결 방법
- 부모 컴포넌트(<App/>)에서 만들어서 각각의 자식 컴포넌트에 props로 전달

![image2](image%20(5).png)

## onClickButton
```jsx
//화살표 함수만든 이유

// 원하는 인수를 넘길 수 없음
<button onClick={onClickButton}> 
```

- **단방향 데이터 흐름**