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
                    // alert('Ошибка при загрузке видео.');
                }
            } catch (error) {
                console.error('Ошибка:', error);
                // alert('Ошибка при загрузке видео.');
            }
        }
        setInterval(() => document.getElementsByClassName('end_info')[0].style.display = "block", 50000) //вот тут таймер, число в милисекундах время ожидания
        

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
        <div className="end_info" >ELIZAR: инновационное приложение для оптимизации процессов,<br/><br/>

Команда бизнес и котики представила проект ELIZAR — приложение, основанное на искусственном интеллекте. Оно способно составить конспект любой видеоконференции, что может повысить эффективность телемедицины, снизить нагрузку на онлайн-преподавателей и улучшить качество бизнес-звонков.<br/><br/>

Основные характеристики:<br/>
* NetValue за 5 лет составит 2,4 млрд рублей.<br/>
* Необходимые инвестиции — 258 млн рублей.<br/>
* Доля в проекте — 20%.<br/>
* Срок окупаемости — 3 года и 8 месяцев.<br/><br/>

Актуальность проекта:<br/>
* Онлайн-занятия становятся неотъемлемой частью обучения, а бумажные конспекты неэффективны.<br/>
* Студенты нуждаются в автоматизации процессов.<br/>
* Телемедицина становится всё более востребованной.<br/>
* Бизнес-звонки требуют чёткой организации и контроля.<br/>
<br/>
Применение ELIZAR:<br/>
* В телемедицине для отслеживания эффективности взаимодействия врачей и выявления виновных в случае неудачного исхода.<br/>
* В обучении для создания конспектов онлайн-занятий.<br/>
* В бизнесе для улучшения коммуникации между сотрудниками компании и клиентами.<br/>
<br/>
Преимущества ELIZAR:<br/>
* Универсальность и гибкость.<br/>
* Защита данных на всех этапах.<br/>
* Персонализация под клиента.<br/>
* Анализ эффективности работы специалистов.<br/>
* Минимизация объёма данных.<br/>
<br/>
Анализ рынка:<br/>
* Объём рынка видеоконференций — 37,6 млрд рублей.<br/>
* Целевая аудитория — малый бизнес, студенты и преподаватели.<br/>
* Прямые конкуренты — ОтерАИ и Труконф.<br/>
* Косвенные конкуренты — БК Workspace и Яндекс Телемост.<br/>
<br/>
Финансовый план:<br/>
* Затраты за 5 лет — чуть более 1,5 млрд рублей.<br/>
* Маркетинг — 411 млн рублей.<br/>
* Техподдержка продукта — значительная часть затрат.<br/>
* Ожидаемая прибыль за 5 лет — 2,2 млрд рублей.<br/>
<br/>
Завершение разработки продукта планируется на второй квартал 2025 года. Проект предполагает привлечение инвесторов и партнёров для ускорения развития и захвата большей доли рынка. К 2029 году ожидается либо создание собственной платформы видеоконференцсвязи, либо слияние с крупной IT-компанией.</div>
    </section>
    )
  } 

export default VideoNotes