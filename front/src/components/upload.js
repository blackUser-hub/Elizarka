import React from 'react'

const Upload = () => {
  return (
    <section id="upload-section" className="upload-section">
            <h2>Загрузите видео для создания конспекта</h2>
            <input type="file" id="video-upload" accept="video/*" className="upload-btn" />
    </section>
  )
}

export default Upload