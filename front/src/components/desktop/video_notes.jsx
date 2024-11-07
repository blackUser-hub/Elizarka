import { useParams } from "react-router-dom";

const VideoNotes = () => {
    const {year, month, day } = useParams();
    const saveConf = async () => {
        const name = document.getElementById('conference-name').textContent;
        const txt = document.getElementById('comments').value;
        const video = document.getElementById('video-player').src;
        // const conf = {
        //     'name': name,
        //     'comments': txt,
        //     'video': video,
        // }
        
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('comments', txt);
        // formData.append('video', video);
        // try {
            fetch(video)
                .then(response => response.blob())
                .then(blob => {
                    const formData = new FormData();
                    formData.append('video', blob, 'video.mp4');
                    formData.append('name', name);
                    formData.append('comments', txt);
                    formData.append('year', year);
                    formData.append('month', month);
                    formData.append('day', day);

                    // Отправляем данные на сервер
                    return fetch('', {
                        method: 'POST',
                        body: formData
                    });
                })
            
            .then(response => {
                if (response.ok) {
                    console.log('Видео и данные успешно отправлены!');
                } else {
                    console.error('Ошибка при отправке:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
            // const response = await fetch('', {
            //     method: 'POST',
            //     body: formData,
            // });

        //     if (response.ok) {
        //         console.log('Видео и данные успешно отправлены!');
        //     } else {
        //         console.error('Ошибка при отправке:', response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Ошибка:', error);
        // }
    }

    return (
        <section className="video-notes-section">
        <h2>Просмотр видео и создание конспекта к "<div id='conference-name' className="conf-name" contenteditable="true"></div>"</h2>
        <div className="video-container">
            <video id="video-player" controls>
                Ваш браузер не поддерживает видео.
            </video>
        </div>
        <div className="notes-panel">
            <textarea id='comments' placeholder="Введите заметки..."></textarea>
            <button onClick={saveConf} className="add-timestamp">Сохранить конференцию</button>
        </div>
    </section>
    )
  }

export default VideoNotes