import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../src/App";

// Props로 받던 onCreate 삭제
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext); // TodoContext를 TodoDispatchContext로 변경
  // input에서 입력받은 값 관리를 위한 state
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // enter누르면 데이터 입력
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // '추가'버튼 누르면 실행. App 컴포넌트의 onCreate(props) 호출
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 데이터 추가 후 빈문자열로 초기화
  };
  return (
    <div className="Editor">
      {/* onKeyDownm: 사용자가 키보드 누를 때 발생하는 이벤트 */}
      {/* 이벤트 객체의 keyCode에 어떤 키를 눌렀는지 저장됨 */}
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
