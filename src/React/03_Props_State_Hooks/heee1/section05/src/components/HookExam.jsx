// import { useState } from 'react' -> hook 분리해서 필요없어짐
import useInput from "./../hooks/useInput" // 상위폴더로 이동했다가 hooks에서 꺼내오기

// 3가지 hook관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅, 내부에서만 호출 가능
// const state = useState() 이 위치에 있으면 오류

// 2. 조건부로 호출될 수는 없다.
// 조건문이나 반복문안에서 hook 호출하는 것은 리액트에서 절대 불가
// 리액트가 내부적으로 컴포넌트들을 호출해서 화면에 렌더링 할 때,
// 조건문이나 반복문 안에서 호출하게 되면 서로다른 hook들의 호출 순서가 엉망이 됨. 내부적 오류 발생
// => 따라서 조건문이나 반복문 안이 아닌 컴포넌트 안에서만 호출되어야 함

// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.
// HookExam 컴포넌트에서 state로 input 관리하기

// 이렇게 해도 되지만 이런 컴포넌트가 여러개 생기게 된다면 매번 중복으로 state, 이벤트 핸들러 작성해야함.
// 밖으로 빼서 개선
// const HookExam = () => {
//     const [Input, setInput] = useState("")

//     const onChange = (e) => {
//         setInput(e.target.vaule)
//     }

//     return (
//     <div>
//         <input value={input} onChange={onChange}/>
//     </div>
//     )
// }
// export default HookExam

// 리액트 컴포넌트가 아닌 일반적인 JS함수에서 Hook을 호출하려고 하면 오류 발생
// getInput함수를 useInput으로 변경 -> 리액트 내부에서 (use~)custom hook으로 인식
// 보통 hook은 따로 컴포넌트로 빼서 관리
// function useInput() {
//     const [input, setInput] = useState("")

//     const onChange = (e) => {
//         setInput(e.target.value)
//     }
//     return [input, onChange] // 여기서는 왜 []이렇게 표시?
// }

const HookExam = () => {    
    const [input, onChange] = useInput()
    const [input2, onChange2] = useInput()  // 두번 사용도 가능

    return (
    <div>
        <input value={input} onChange={onChange}/>
        <input value={input2} onChange={onChange2}/>
    </div>
    )
}
export default HookExam