const VideoNotes = () => {
    return (
        <section className="video-notes-section">
        <h2>Просмотр видео и создание конспекта</h2>
        <div className="video-container">
            <video id="video-player" controls>
                Ваш браузер не поддерживает видео.
            </video>
        </div>
        <div className="notes-panel">
            <textarea placeholder="Введите заметки..."></textarea>
            <button className="add-timestamp">Добавить тайм-код</button>
        </div>
    </section>
    )
  }

export default VideoNotes