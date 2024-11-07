import React from 'react'

export default function OneNote({props}) {
  // const navigate = useNavigate();
  // const redirect = () => {
  //   navigate(String(props.id))
  // };
  const func = () => {
    document.getElementById("upload-section").getElementsByTagName("h2")[0].textContent = "Загрузите новое видео конференции"
    document.getElementsByClassName("video-notes-section")[0].style.display = "flex"
    document.getElementById("conference-name").textContent = props.title
    document.getElementById("comments").value = props.text
    document.getElementById("video-player").src = props.url
    document.getElementsByClassName("add-timestamp")[0].textContent = "Сохранить изменения"
    document.getElementById("video-upload").value = ""
  }

  return (
    <div className="note-card">
        <h3>{props.title}</h3>
        <p>Начало - {props.time}</p>
        <button onClick={func} className="open-btn">Открыть</button>
    </div>
  )
}
