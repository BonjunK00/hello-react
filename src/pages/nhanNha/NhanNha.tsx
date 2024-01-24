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
