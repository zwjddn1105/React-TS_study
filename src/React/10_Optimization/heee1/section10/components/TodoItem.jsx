import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      {/* 동작은 클릭으로 볼 수 있지만 체크가 변경되는 것이기 때문에 onChange사용 */}
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default memo(TodoItem)

// useCallback으로 최적화해서 불필요해짐 ↓
// 고차컴포넌트(HOC) : 컴포넌트를 인수로 받아서 추가적인 기능을 덧붙여서 기능이 추가된 컴포넌트를 반환해주는 메서드
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 부모컴포넌트가 리렌더링될때마다 컴포넌트의 props가 바뀌었는지 스스로 판단하는 것이 아니라
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // 콜백함수에서 true 반환하면 Props 바뀌지 않았다고 판단 -> 리렌더링 X
//   // false 라면 Props 바뀌었다고 판단 -> 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

// memo 사용해서 최적화 했지만 TodoItem 체크박스 하나만 변경되어도 나머지 TodoItem도 같이 리렌더링됨
// -> App 컴포넌트의 todos state 값을 바꾸게 되면 App 컴포넌트가 리렌더링됨
// -> App 안의 onCreate 등의 함수들이 새로 만들어짐

// 함수는 객체이기 때문에 새롭게 생성된 함수들이 같은 동작을 하더라도 새롭게 생성될때마다 다른값으로 인식하게 됨
// 객체 타입이므로 주소값으로 저장. 객체간의 비교는 주소값을 기반으로 함.
// ==> 컴포넌트가 리렌더링되고 함수가 새로 만들어지게 되면 주소값이 계속 바뀌기 때문에 매번 다른값으로 생성되는 것으로 판단

// memo 메서드는 props가 바뀌었을 때만 컴포넌트를 리렌더링하도록 최적화하기 때문에 매번 리렌더링이 발생할때마다 현재와 과거의 props를 비교함
// 얕은 비교를 하므로 객체 타입의 값은 다른 값이라고 판단하게됨
// => 따라서 memo를 적용했음에도 리렌더링 발생
// 해결방법 1: App 컴포넌트에서 함수들 자체를 메모이제이션. 리렌더링 되더라도 다시 생성되지 않게 방지
// 해결방법 2: TodoItem 컴포넌트의 memo 함수 안에 두번째 인수로 콜백함수 전달 => 최적화기능 커스터마이징
