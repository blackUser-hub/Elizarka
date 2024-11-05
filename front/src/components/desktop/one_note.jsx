import React from 'react'

export default function OneNote({props}) {
  return (
    <div className="note-card">
        <h3>Конференция {props.conferenceNumber}</h3>
        <p>Дата: {props.date}</p>
        <button className="open-btn">Открыть</button>
    </div>
  )
}
