import React from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../..";

const VideoNotes = ({props}) => {
    const {year, month, day } = useParams();
    
    const saveConf = async () => {
        const txt = document.getElementById('comments').value;
        const date = `${day.length===1 ? "0"+day : day}.${month.length===1 ? "0"+month : month}.${year}`
        const file = document.getElementById("video-upload").files[0]

        // console.log("user_id - ", props.owner)
        // console.log("Дата - ", date)
        // console.log("Заметки - ", txt)
        // console.log("Файл - ", file)
        // setInterval(() => document.getElementsByClassName('end_info')[0].style.display = "block", 50000) //вот тут таймер, число в милисекундах время ожидания
        
        const xhr = new XMLHttpRequest()
        // xhr.open('POST', "http://localhost:4000/upload", true)
        xhr.open('POST', "http://localhost:8000/api/v1/files/upload/", true) //Тут в кавычки полный путь до бд, указанным я проверял, на него не смотреть
        xhr.onload = () => {
           if (xhr.status === 200) {
               console.log("OK")
           } else {
               console.log(xhr.status)
           }
        }

        const myData = new FormData() // Тут ниже в каждой строке где append в кавычки написать название ячейки в бд, тк я не уверен что все правильно написал
        myData.append('file', file, file.name);   // Видос
        myData.append('user_id', props.owner)     // id пользователя
        myData.append('date', date)               // Дата
        myData.append('notes', txt)               // Заметки


        xhr.send(myData)
    }

    return (
        <section className="video-notes-section">
        <h2>Просмотр видео и создание конспекта к "<div id='conference-name' className="conf-name" contentEditable="true"></div>"</h2>
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