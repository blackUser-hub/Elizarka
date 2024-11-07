const VideoNotes = () => {
    return (
        <section className="video-notes-section">
        <h2>Просмотр видео и создание конспекта к "<div className="conf-name" contenteditable="true">Конференция 3</div>"</h2>
        <div className="video-container">
            <video id="video-player" controls>
                Ваш браузер не поддерживает видео.
            </video>
        </div>
        <div className="notes-panel">
            <textarea placeholder="Введите заметки..."></textarea>
            <button className="add-timestamp">Сохранить конференцию</button>
        </div>
    </section>
    )
  }

export default VideoNotes