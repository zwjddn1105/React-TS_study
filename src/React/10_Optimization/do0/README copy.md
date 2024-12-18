# useReducer

> 컴포넌트 내부에 새로운 State를 생성하는 React Hook<br>
> 모든 useState는 useReducer로 대체 가능
>> **상태 관리 코드를 컴포넌트 외부로 분리할 수 있음**

즉, State를 관리하는 코드(로직)은 해당 컴포넌트 내부에서만 정의되었기 때문에 유지 보수의 난이도가 증가하고 코드가 길어져 가독성이 좋지 않음

이를 해결하기 위한 Hook이 useReducer로 **컴포넌트 외부**로 State 관리 로직을 분리함으로써 유지 보수가 용이해짐

---

### useState와 useReducer의 적절한 사용 방법

간단한 countApp에서의 state 변화만 감지하려면 useState를 사용,<br>
복잡한 배열이나 객체의 state 변화를 감지하려면 useReducer를 사용하도록 함.