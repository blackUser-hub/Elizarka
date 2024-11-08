

from func.file import * 
from moviepy.editor import *

from random import randint

import whisper
from yandex_cloud_ml_sdk import YCloudML
from ml import *



    

# Заменяем пути, чтобы они соответствовали проекту
def diarize_transcript_audio(id):
    video = VideoFileClip(f"files/videos/{id}.MOV")
    audio = video.audio
    audio.write_audiofile(f"files/audios/{id}.mp3")
    print('audio_extract')


    wav_path = f'C:\\kch\\elisarka2.0\\Elizarka\\back\\files\\audios\\{id}.mp3'
    # Путь для файлов вывода
    
    model = whisper.load_model("small", 'cpu')
    result = model.transcribe(wav_path)
    notes = get_notes(id)

    print('diarize_transcript_audio')

    


    print('gpt1')
    sdk = YCloudML(folder_id="b1g1sfpi06rj816u9re3", auth="AQVN1tfuKIzbfMkYDyiwyf67ZB2L1JsNEtEit9rx")

    prompt =  f"Представь, что ты секретарь в крупной компании, и тебе дали задачу прорезюмировать сегодняшнюю встречу. Для этого тебе дали следующий текст: {result["text"]}. При составлении используй следующие пожелания руководства: {notes}."

    model = sdk.models.completions('yandexgpt')
    model = model.configure(temperature=0.5)
    result = model.run(prompt)
    print('gpt')

    for alternative in result:
        update_text(id, alternative.text)
        return(alternative.text)

