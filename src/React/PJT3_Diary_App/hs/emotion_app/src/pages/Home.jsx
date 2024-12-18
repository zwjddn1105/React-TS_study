import { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'

import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import usePageTitle from '../hooks/usePageTitle'

// 해당 년도 및 월에 작성한 일기만 볼 수 있도록 필터링하기
const getMonthlyData = (pivotDate, data) => {

  // 이번 달의 시작 시간
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, // 일
    0, // 시
    0, // 분
    0  // 초
  ).getTime()

  // 이번 달의 마지막 시간
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() +1,
    // 마지막 날을 설정 -> 다음 달의 0일로 설정하면 이전 달의 마지막 날이 설정이 된다
    0,
    23,
    59,
    59
  ).getTime()
  
  return data.filter(
    (item)=>
      beginTime <= item.createdDate && item.createdDate <= endTime
  )
}

const Home = () => {
  const data = useContext(DiaryStateContext)

  const [pivotDate, setPivotDate] = useState(new Date())
  
  usePageTitle('감정 일기장')

  const monthlyData = getMonthlyData(pivotDate, data)


  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    )
  }
  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    )
  }

  return (
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'}/>}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'}/>}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home