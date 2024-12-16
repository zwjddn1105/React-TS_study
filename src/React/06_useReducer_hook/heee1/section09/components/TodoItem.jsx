import './TodoItem.css'
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckbox = () => {
    onUpdate(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return(
    <div className="TodoItem">
      {/* 동작은 클릭으로 볼 수 있지만 체크가 변경되는 것이기 때문에 onChange사용 */}
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}

export default TodoItem                                               