const Controller = ({onClickButton}) => { // props 받아오기
  return (
    <div>
      {/* -1버튼이 클릭되었을 때 App컴포넌트로부터 전달받은 onClickButton함수가 실행되면서 인수로-1넘김*/}
      {/* -> App 컴포넌트에서  함수 실행되면서 value값으로 -1 받아와서 현재 count에 -1한 값으로 새로운 count 업데이트*/}
      <button
        onClick={()=>{
          onClickButton(-1)
        }}
      >
        -1
      </button>
      {/* /onClick={onClickButton} 이런식으로 하면 원하는 인수를 전달할 방법이 없기 때문 */}
      <button
        onClick={()=>{
          onClickButton(-10)
        }}
      >      
        -10
      </button>
      <button
        onClick={()=>{
          onClickButton(-100)
        }}
      >
        -100
      </button>
      <button
        onClick={()=>{
          onClickButton(100)
        }}
      >
        +100
      </button>
      <button
        onClick={()=>{
          onClickButton(10)
        }}
      >
         +10
      </button>
      <button
        onClick={()=>{
          onClickButton(1)
        }}
      >
        +1
      </button>
    </div>
  )
}

export default Controller