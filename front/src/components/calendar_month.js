import React from 'react'

const  CalendarMonth = ({month}) => {
  return (
    <caption className='calendarMonth'>
        <button>{"<"}</button>
        <span>{month}</span>
        <button>{">"}</button>
    </caption>
  )
}

export default CalendarMonth