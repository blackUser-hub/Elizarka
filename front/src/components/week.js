import React from 'react'

const Week = (days) => {
    return (
    days.days.map(day => (<td className={day.todayDay + day.dayColor}>{day.dayNumber}</td>))  
  )
}

export default Week