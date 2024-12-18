import { useContext, useState, useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom"

const useDiary = (id) => {
  const data = useContext(DiaryStateContext)
  const [curDiaryItem, setCurDiaryItem] = useState()
  const nav = useNavigate()

  // 컴포넌트가 다 렌더링 된 후에 기능 사용 가능, useEffect 사용
  useEffect(()=>{
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    )
    if(!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', {replace: true}) // 컴포넌트가 다 렌더링 된 후에 기능 사용 가능
    }

    setCurDiaryItem(currentDiaryItem)
  }, [id])

  return curDiaryItem
}

export default useDiary