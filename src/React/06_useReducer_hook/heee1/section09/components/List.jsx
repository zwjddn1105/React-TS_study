import './List.css'
import TodoItem from './TodoItem'
import {useState} from 'react'

const List = ({todos, onUpdate, onDelete}) => {
  // 사용자가 검색하는 값이 search state에 보관
  // serach state의 값이 바뀔때 마다 List 컴포넌트가 리렌더링됨
  // 그때마다 todos 배열에서 현재 검색 결과에 해당하는 값들만 필터링
  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search ===""){
      return todos
    }
    // todos 배열에 filter메서드 호출해서 결괏값 반환
    // 배열의 모든 todo 아이템을 순회하면서 연산의 결과가 참이 되는 todo의 아이템만 필턱링
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()) // todo.content: React 공부하기
      // search state에 보관된 값이 React라면 True -> 이런 값들만 반환
      // tolowerCase: 소문자로 변환
    )
  }

  const filteredTodos = getFilteredData()

  return( 
    <div className="List">
      <h4>Todo List 🎈</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos-wrapper">
      {/* todos 배열에 담긴 값을 리스트형태로 렌더링*/}
      {/* map: 하나의 콜백함수를 받은 후 배열의 모든 요소에 대해 콜백함수를 수행한 뒤에 콜백함수의 반환값들을 모아서 새로운 배열로 반환*/}
      {filteredTodos.map((todo)=>{
        // return (<div>{todo.content}</div>)
        // 리액트에서는 내부적으로 리스트로 렌더링된 컴포넌트들이나 요소들을 서로 구분할 때 각각의 요소를 key라는 prop을 통해서 구분
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          /> // mockData의 id
        )
      })}
      </div>
    </div>
  )
}
export default List