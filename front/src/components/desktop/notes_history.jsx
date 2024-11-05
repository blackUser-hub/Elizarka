const NotesHistory = () => {
    return (
        <section id="notes-history" className="notes-history">
        <h2>История конспектов</h2>
        <div className="notes-list">
            <div className="note-card">
                <h3>Конференция 1</h3>
                <p>Дата: 10/10/2024</p>
                <button className="open-btn">Открыть</button>
            </div>
            <div className="note-card">
                <h3>Конференция 2</h3>
                <p>Дата: 08/10/2024</p>
                <button className="open-btn">Открыть</button>
            </div>
        </div>
    </section>
    )
  }

  export default NotesHistory