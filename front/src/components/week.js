import React from 'react'

const Week = (days) => {
    return (
    days.days.map(day => (<td className={day.dayColor}>{day.dayNumber}</td>))  
  )
}

export default Week