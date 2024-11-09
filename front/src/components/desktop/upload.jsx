import React from 'react'

const Upload = ({props}) => {
  return (
      <section id="upload-section" className="upload-section">
              <h2>Загрузите видео для создания конспекта</h2> 
              <form id="uploadForm"  method="post" enctype="multipart/form-data">
              <input type="file" id="video-upload" accept="video/*" className="upload-btn" onChange={(event) => {
                const videoPlayer = document.getElementById('video-player');
                const file = event.target.files[0];  // Получаем первый загруженный файл
                if (file) {
                const fileURL = URL.createObjectURL(file); // Создаем URL для видео
                videoPlayer.src = fileURL;  // Устанавливаем URL в плеер
                videoPlayer.load();  // Загружаем видео в плеер
              
                
                props.setVideo({id: props.context.vid,
                  file: file,
                })

                // console.log(props.context.vid)
                props.context.setVid(props.context.vid + 1)
                
                document.getElementsByClassName("video-notes-section")[0].style.display = "flex"
                document.getElementById("comments").value = ""
                document.getElementsByClassName("add-timestamp")[0].textContent = "Сохранить конференцию"

                const confNumber = document.getElementsByClassName("note-card").length
                const val = document.getElementById("conference-name")
                val.textContent = "Конференция " + (confNumber + 1)

              }}} /></form>
      </section>
      )
}

export default Upload