import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CalendarDay({day}) {
  const navigate = useNavigate();
  const path = `${day.year}/${day.month+1}/${day.dayNumber}`
  const redirect = () => {  
    navigate(path);
  };

    return (<div onClick={redirect} className={"calendar-day" + day.todayDay + day.dayColor} >
        {day.dayNumber}
      </div>)
}
