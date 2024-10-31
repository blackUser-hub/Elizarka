import React from 'react'

export default function CalendarMonthAndYear({date, year, changeMonth, chageYear}) {
  return (
    <div className='calendarHeader'>
      <h1>Календарь с заметками</h1>
      <div className='calendarSwitch'>
          <div className='calendarBack'>
          <div onClick={() => chageYear(-1)} className='calendarBtn backYear'>{"<<"}</div>
          <div onClick={() => changeMonth(-1)} className='calendarBtn backMonth'>{"<"}</div>
          </div>
          <span>{date.toLocaleString('ru-RU', {month: 'long'}) + " " + year}</span>
          <div className='calendarNext'>
          <div onClick={() => changeMonth(1)} className='calendarBtn nextMonth'>{">"}</div>
          <div onClick={() => chageYear(1)} className='calendarBtn nextYear'>{">>"}</div>
          </div>
      </div></div>
  )
}
// const  CalendarYear = ({date, year, changeMonth, chageYear}) => {
//     return (
//       <caption className='calendarHeader'><div className='calendarHeaderBox'>
//           <div className='calendarBack'>
//           <div onClick={() => chageYear(-1)} className='calendarBtn backYear'>{"<<"}</div>
//           <div onClick={() => changeMonth(-1)} className='calendarBtn backMonth'>{"<"}</div>
//           </div>
//           <span>{date.toLocaleString('ru-RU', {month: 'long'}) + " " + year}</span>
//           <div className='calendarNext'>
//           <div onClick={() => changeMonth(1)} className='calendarBtn nextMonth'>{">"}</div>
//           <div onClick={() => chageYear(1)} className='calendarBtn nextYear'>{">>"}</div>
//           </div>
//       </div></caption>
//     )
//   }