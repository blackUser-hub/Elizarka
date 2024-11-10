import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CalendarDay({day}) {
  const navigate = useNavigate();
  const path = `${day.year}/${day.month+1}/${day.dayNumber}`
  const redirect = () => {  
    try {
    document.getElementsByClassName("video-notes-section")[0].style.display = "none"
    document.getElementById("upload-section").getElementsByTagName("h2")[0].textContent = "Загрузите видео для создания конспекта"
    document.getElementById("video-upload").value  = ""
    } catch (error) {
      console.log(error)
    }
    navigate(path);
  };

    return (<div onClick={redirect} className={"calendar-day" + day.todayDay + day.dayColor} >
        {day.dayNumber}
      </div>)
}
