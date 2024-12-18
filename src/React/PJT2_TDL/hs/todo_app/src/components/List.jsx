import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo } from 'react'

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setsearch] = useState("")
  
  const onChangeSearch = (e) => {
    setsearch(e.target.value)
  }

  const getFilteredDate = () => {
    if(search === "") {
      return todos
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilteredDate()

  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    const totalCount = todos.length
    const doneCount = todos.filter((todo)=>todo.isDone).length
    const notDoneCount = totalCount - doneCount

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos])
  // 두 번째 인수 -> 의존성 배열 : deps
  // useEffect와 같이 [] 해당 배열에 포함된 값이 변했을 때, 첫 번째의 콜백함수 다시 실행

  return (
    <div className="List">
      <h4>Todo List🎐</h4>
      <div>
        <div>할일! : {totalCount}개</div>
        <div>완료^_^ : {doneCount}개</div>
        <div>해야 하는 것.. : {notDoneCount}개</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요 ^_^ !"
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />
          )
        })}
      </div>
    </div>
  )
  }
  
  export default List