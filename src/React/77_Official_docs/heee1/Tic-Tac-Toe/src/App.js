import { useState } from 'react'

function Square({ value, onSquareClick}) {

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

// 여러 자식 컴포넌트에서 데이터를 수집하거나 두 자식 컴포넌트가 서로 통신하도록 하려면 부모 컴포넌트에서 공유 state를 선언
// 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달할 수 있음
// 이렇게 하면 자식 컴포넌트가 서로 동기화되고 부모 컴포넌트와도 동기화되도록 유지할 수 있음
function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {  // 클릭된 사각형이 이미 채워져 있는지 확인 || 승자가 결정되었는지 확인
      return  // 두 조건 중 하나라도 참이면 함수 조기 종료
    }
    const nextSquares = squares.slice() // array.slice(start, end), start: 복사 시작 인덱스(포함) end: 복사 멈출 인덱스(미포함)
    // 불변성 유지: 직접적인 데이터 변경을 피하면 이전 버전의 데이터를 그대로 유지하여 나중에 재사용(또는 초기화)할 수 있기 때문에 slice활용해서 배열 복사

    if (xIsNext) {
      nextSquares[i] = "🐧" // X
    } else {
      nextSquares[i] = "🐳" // O
    }
    onPlay(nextSquares)
  }

  // 승자 표시
  const winner = calculateWinner(squares)
  let status
  let statusClass = ""
  if (winner) {
    status = `🎉 승자: ${winner} 🎉`
    statusClass = "winner"  // 승자일 때 winner 클래스 추가
  } else {
    status = "다음 플레이어: " + (xIsNext ? "🐧" : "🐳")
  }

  return (
    <>
      <div className={`status ${statusClass}`}>{status}</div>
      <div className="board-row">
        {/* 익명 화살표 함수로 handleClick을 지연 처리함.(렌더링 될때 실행이 아닌 클릭했을 때만 실행) */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> 
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>
  )
}

// [참고] className="square"가 HTML의 class를 지정하는 것처럼 보이지만, JSX에서 className은 prop(속성)으로 처리된다.
// React에서는 HTML과 비슷한 구조로 UI를 작성하지만 기본적으로 모든 속성(예: className, id, onClick)이 JSX 엘리먼트의 prop으로 간주된다.



export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]) // 시간여행 기능을 구현하기 위한 이차원 배열. 각 1차원 배열은 한 턴의 보드 상태
  const [currentMove, setCurrentMove] = useState(0)  
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove] // 현재 선택한 동작 렌더링

  // 게임 업데이트 함수
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares]  // 현재 이동까지의 history 복사 후 nextSquares 추가
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length -1)  // 현재 이동을 최신 이동으로 갱신
  }

  // 특정 이동으로 돌아가는 함수
  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description =  '#' + move + '번째 이동'
    } else {
      description = '게임 시작'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}




// 게임 승자 결정 함수
function calculateWinner(squares) {
  // 승리 조건
  const lines = [
    [0, 1, 2],  // 가로
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // 세로
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // 대각선
    [2, 4, 6],  
  ]
  // 승리 조건 하나씩 확인
  for (let i =0; i < lines.length; i++) {
    const [a, b, c] = lines[i]  // 분해할당
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // 첫째칸 비어있으면 안됨
      return squares[a] // 승리 조건 만족하는 값 반환. X가 승리 조건 만족 시 squares[a]는 X
    }
  }
  return null // 승자가 없으면 null
}