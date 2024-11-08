import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import BASE_URL from "../..";

const VideoNotes = ({props}) => {
    const {year, month, day } = useParams();
    // const videoFile = document.getElementById('video-upload').files[0];
    // console.log(videoFile)
    // console.log(props)
    const saveConf = async () => {
        // const name = document.getElementById('conference-name').textContent;
        const txt = document.getElementById('comments').value;
        const date = `${day.length===1 ? "0"+day : day}.${month.length===1 ? "0"+month : month}.${year}}`
        const videoFile = props.video.file
        const handleUpload = async () => {
            if (!videoFile) {
                alert('Пожалуйста, выберите видеофайл.');
                return;
            }
            const formData = new FormData();
            formData.append('file', videoFile);
            formData.append('user_id', props.owner);
            formData.append('date', date);
            formData.append('notes', txt);
    
            try {
                const response = await fetch('http://localhost:8000/upload/', {
                    method: 'POST',
                    body: formData,
                });
                document.getElementById('comments').value = response
                if (response.ok) {
                    const data = await response.json();
                    alert(`Видео успешно загружено! Путь к файлу: ${data.file_path}`);
                    // Вы можете использовать data для отображения информации на странице
                } else {
                    alert('Ошибка при загрузке видео.');
                }
            } catch (error) {
                console.error('Ошибка:', error);
                alert('Ошибка при загрузке видео.');
            }
        }
        handleUpload()
        // const video = document.getElementById('video-player').src;
        // const conf = {
        //     'name': name,
        //     'comments': txt,
        //     'video': video,
        // }
        // const formData = new FormData();
        // // formData.append('file', file);
        // formData.append('id', props.video.id);

        // try {
        //     const response = await fetch(`${BASE_URL}/api/v1/files/file/${props.video.id}`, {
        //         method: 'POST',
        //         body: formData,
        //     });
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // }
        
        // const formData = new FormData();
        // // formData.append('file', file);
        // formData.append('id', props.video.id);
        // formData.append('data', date);
        // formData.append('notes', txt);
        // formData.append('owner_id', props.owner);

        // try {
        //     const response = await fetch(`${BASE_URL}/api/v1/files/file`, {
        //         method: 'POST',
        //         body: formData,
        //     });
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // }

        // axios.get(`${BASE_URL}/ml/diarize/${props.video.id}`).then((res) => {
        //     document.getElementById('comments').value = res
        //  })
        
        
        // FileSaver.saveAs(file, "myFile.txt");
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('comments', txt);
        // formData.append('video', video);
        // try {
            // fetch(video)
            //     .then(response => response.blob())
            //     .then(blob => {
            //         const formData = new FormData();
            //         formData.append('video', blob, 'video.mp4');
            //         formData.append('name', name);
            //         formData.append('comments', txt);
            //         formData.append('year', year);
            //         formData.append('month', month);
            //         formData.append('day', day);

            //         // Отправляем данные на сервер
            //         return fetch('', {
            //             method: 'POST',
            //             body: formData
            //         });
            //     })
            
            // .then(response => {
            //     if (response.ok) {
            //         console.log('Видео и данные успешно отправлены!');
            //     } else {
            //         console.error('Ошибка при отправке:', response.statusText);
            //     }
            // })
            // .catch(error => {
            //     console.error('Ошибка:', error);
            // });
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