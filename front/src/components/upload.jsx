import React from 'react'

const Upload = () => {
  return (
    <section id="upload-section" className="upload-section">
            <h2>Загрузите видео для создания конспекта</h2>
            <input type="file" id="video-upload" accept="video/*" className="upload-btn" onChange={(event) => {
              const videoPlayer = document.getElementById('video-player');
              const file = event.target.files[0];  // Получаем первый загруженный файл
              if (file) {
              const fileURL = URL.createObjectURL(file); // Создаем URL для видео
              videoPlayer.src = fileURL;  // Устанавливаем URL в плеер
              videoPlayer.load();  // Загружаем видео в плеер
            }}} />
    </section>
  )
}

export default Upload