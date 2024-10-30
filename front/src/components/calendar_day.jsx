import React from 'react'

export default function CalendarDay({day}) {
    return (<div className={"calendar-day" + day.todayDay + day.dayColor} >
        {day.dayNumber}
      </div>)
}
