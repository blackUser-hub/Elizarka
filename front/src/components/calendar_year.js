import React from 'react'

const  CalendarYear = ({date, year, changeMonth, chageYear}) => {
  return (
    <caption className='calendarHeader'><div className='calendarHeaderBox'>
        <div className='calendarBack'>
        <div onClick={() => chageYear(-1)} className='calendarBtn backYear'>{"<<"}</div>
        <div onClick={() => changeMonth(-1)} className='calendarBtn backMonth'>{"<"}</div>
        </div>
        <span>{date.toLocaleString('ru-RU', {month: 'long'}) + " " + year}</span>
        <div className='calendarNext'>
        <div onClick={() => changeMonth(1)} className='calendarBtn nextMonth'>{">"}</div>
        <div onClick={() => chageYear(1)} className='calendarBtn nextYear'>{">>"}</div>
        </div>
    </div></caption>
  )
}

export default CalendarYear