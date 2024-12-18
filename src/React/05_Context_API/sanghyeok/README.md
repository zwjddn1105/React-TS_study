# Context_API
## Context
- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음
  - Props Drilling : Props는 부모->자식 으로만 데이터를 전달할 수 있었음
  - APP -> Child A -> Child B 데이터를 중간다리를 거쳐서 건네야함
- 데이터 보관소(객체)

<br>

## Props Drilling
- 다수의 컴포넌트를 거쳐 속성을 전달하는데 자식 컴포넌트에게 전달하는 역할을 맡게됨
- 원하는 공유 데이터를 얻기 위해서는 여러 컴포넌트가 필연적으로 사용되어야함 => 해당 컴포넌트의 재사용이 다소 힘들어짐
- 상황에 고려해서 모든 상황을 직접 구현해야함
- 히스토리가 쌓이고 구현이 추가될 때마다 기존에 해당 컴포넌트를 사용하던 곳에서 사이드이펙트가 발생할 우려 커짐, 유지 보수 어려워짐

<br>

## Component Composition
- 하나의 컴포넌트를 여러 가지 집합체로 분리한 뒤, 분리된 각 컴포넌트를 사용하는 쪽에서(App.jsx) 조합해 사용하는 컴포넌트 패턴

<br>

## Context API
- 컴포넌트나 컴포넌트 레이어간의 데이터 공유를 용이하게 해줌

![image](./image%20(6).png)


- state(상태)와의 연결이 쉽다
- 상태를 변경하거나 읽어야 하는 컴포넌트의 경우 직접적으로 해당 컨텍스트 또는 필요한 상태에 접근이 가능하게 되는 것

```jsx
import { crateContext } from 'react'

export const CartContext = createContext({
  items: []
})


// App.jsx

return (
  <CartContext.Provider value={{ items: [] }}>
    ...
  </CartContext.Provider>
)
```

- useContext hook을 이용하는 방법
- Consumer 컴포넌트