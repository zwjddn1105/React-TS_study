import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수를 보통
    // 클린업, 정리함수라 부름
    // 이는 보통 컴포넌트가 언마운트 될될 때 실행이 된다.
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
