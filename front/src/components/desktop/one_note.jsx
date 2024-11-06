import React from 'react'

export default function OneNote({props}) {
  // const navigate = useNavigate();
  // const redirect = () => {
  //   navigate(String(props.id))
  // };

  return (
    <div className="note-card">
        <h3>{props.title}</h3>
        <p>Дата: {props.date}</p>
        <button className="open-btn">Открыть</button>
    </div>
  )
}
