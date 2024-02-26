import { useEffect, useState } from 'react'

const defaultWeekRows = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31],
]

const week = ['일', '월', '화', '수', '목', '금', '토']

type DateObject = {
  year: number
  month: number
  date: number
}

/*
  Todo
  1. selectedDate를 이용해서 defaultWeekRows를 지우고 제대로 된 weekRows를 만들기
  2. 월 이동 버튼 클릭 시 정상적으로 연월이 바뀌게 구현하기
  3. 날짜를 클릭하면 selectedDate가 바뀌게 구현하기
  3. 선택된 날짜에 색상을 입혀서 표시하기
  4. 오늘 날짜에 색상을 입혀서 표시하기
  5. 달력 컴포넌트를 공용 컴포넌트(Calendar.tsx)로 분리하기
*/

export const NhanNha = () => {
  const today = new Date()

  const [selectedDate, setSelectedDate] = useState<DateObject>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  })

  // 정상적으로 연월이 바뀌게 구현해보세요!
  const handleClickPrev = () => {
    setSelectedDate({ year: selectedDate.year, month: selectedDate.month - 1, date: 1 })
  }

  const handleClickNext = () => {
    setSelectedDate({ year: selectedDate.year, month: selectedDate.month + 1, date: 1 })
  }

  const handleClickColor = () => {
    // 클릭시 날짜 색이 변하도록
  }

  // selectedDay 값을 이용해서 defaultWeekRows를 지우고 제대로 된weekRows를 만들어보세요!
  const weekRows = defaultWeekRows

  return (
    <div className="p-[20px]">
      <div className="text-[100px]">NhanNha</div>

      <div className="flex flex-col bg-white w-fit p-[10px] ">
        <div className="flex items-center justify-between px-[10px]">
          <div>{`${selectedDate.year}년 ${selectedDate.month}월`}</div>
          <div className="flex text-[20px]">
            <button onClick={handleClickPrev}>{`<`}</button>
            <button onClick={handleClickNext}>{`>`}</button>
          </div>
        </div>

        <div className="flex">
          {week.map((day) => (
            <div key={day} className="w-[40px]">
              {day}
            </div>
          ))}
        </div>

        {weekRows.map((weekRow, index) => (
          <div key={index} className="flex">
            {weekRow.map((day) => (
              <div key={day} className="w-[40px]">
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
