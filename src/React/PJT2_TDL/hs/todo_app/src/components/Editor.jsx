import './Editor.css'
import { useState, useRef } from 'react'

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("")
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeydown = (e) => {
    if(e.keyCode === 13) {
      onSubmit()
    }
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent("")
  }
  return (
    <div className="Editor">
      <input
      ref={contentRef}
      onKeyDown={onKeydown}
      value={content}
      onChange={onChangeContent}
      placeholder="new todo!" />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor