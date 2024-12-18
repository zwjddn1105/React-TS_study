// 1. Editor의 추가 버튼이 클릭되어 onSubmit함수가 실행되면
// 2. App 컴포넌트로부터 받은 onCreate함수를 호출하면서 input태그에 입력한 값(content0을 전달하게 됨
// 3. App 컴포넌트의 onCreate가 실행되면서 새로운 TodoItem을 만들고
// 4. 이렇게 만든 TodoItem을 setTodos 함수를 통해서 todos state에 추가
// 5. 데이터 추가 완료

import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
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
