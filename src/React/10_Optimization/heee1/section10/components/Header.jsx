import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🤔</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// 인수로 받은 Header 컴포넌트를 props가 변경되지 않았을 때에는 리렌더링되지 않도록 최적화해서 반환
// const memoizedHeader = memo(Header);
// export default memoizedHeader; // 최적화된 헤더

export default memo(Header) // 이렇게 바로 써도 됨
