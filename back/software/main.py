import asyncio
import os
from pathlib import Path
import pandas as pd
from pyannote.audio import Pipeline
import whisperx
import pydub
import torch
import requests
import json
from datetime import timedelta
import subprocess
from func.file import *  # Импортируем необходимые функции из файла func/file.py
from moviepy.editor import *
import config
from openai import OpenAI
from random import randint
from docx import Document

# Заменяем пути, чтобы они соответствовали проекту
async def diarize_transcript_audio(audio_path, otchet_id):
    # Путь для файлов вывода
    filename = Path(audio_path).stem
    output_dir = f"files/csv/{filename}"  # Путь для CSV
    os.makedirs(output_dir, exist_ok=True)
    
    # Загружаем пайплайн
    PATH_TO_CONFIG = config.PATH_TO_CONFIG
    pipeline = await Pipeline.from_pretrained(PATH_TO_CONFIG)
    device = config.device
    pipeline = pipeline.to(torch.device(device))

    # Загрузка модели WhisperX
    whisper_model = whisperx.load_model("large-v3", device, compute_type="int8")
    audio_file = audio_path

    # Диаризация
    diarization_result = pipeline({"audio": audio_file})

    # Преобразование результата диаризации в DataFrame
    diarization_list = []
    for segment, track, label in diarization_result.itertracks(yield_label=True):
        diarization_list.append({
            'start': segment.start,
            'end': segment.end,
            'speaker': label
        })
    diarization_df = pd.DataFrame(diarization_list)

    # Транскрипция
    transcription_result = whisper_model.transcribe(audio_file)

    # Выравнивание сегментов
    aligned_model, metadata = whisperx.load_align_model(
        language_code=transcription_result["language"], device=device)
    aligned_result = whisperx.align(
        transcription_result["segments"], aligned_model, metadata, audio_file, device)

    # Присваиваем говорящих
    segments_with_speakers = whisperx.assign_word_speakers(diarization_df, aligned_result)

    # Итоговая транскрипция
    all_transcription_list = []
    for segment in segments_with_speakers['segments']:
        if isinstance(segment, dict):
            speaker = segment.get('speaker', 'unknown')
            text = segment.get('text', '')
            start = segment.get('start', 0)
            end = segment.get('end', 0)
            all_transcription_list.append({
                'speaker': speaker,
                'text': text,
                'start': start,
                'end': end
            })
    transcription_df = pd.DataFrame(all_transcription_list)

    # Сохраняем результат в CSV
    transcription_file = f"{output_dir}/transcription.csv"
    transcription_df.to_csv(transcription_file, sep=";")

    # Обновляем путь в базе данных
    update_path(str(otchet_id), transcription_file)

# Функция для получения текста транскрипта с временными метками
async def get_text_with_time(audio_path):
    filename = Path(audio_path).stem
    df = pd.read_csv(f"files/csv/{filename}/transcription.csv", sep=';', encoding='utf-8')

    def format_time(seconds):
        td = timedelta(seconds=seconds)
        minutes, seconds = divmod(td.total_seconds(), 60)
        return f"{int(minutes):02}:{int(seconds):02}"

    formatted_texts = []
    for _, row in df.iterrows():
        start_time = format_time(row['start'])
        end_time = format_time(row['end'])
        formatted_texts.append(f"({start_time} - {end_time}) {row['text']}")

    full_text = "\n".join(formatted_texts)
    return full_text

# Функция для получения только текста (без временных меток)
async def get_text(audio_path):
    filename = Path(audio_path).stem
    df = pd.read_csv(f"files/csv/{filename}/transcription.csv", sep=';', encoding='utf-8')

    formatted_texts = [row['text'] for _, row in df.iterrows()]
    full_text = "\n".join(formatted_texts)
    return full_text

# Функция для общения с ChatGPT (резюмирование встречи)
async def chat_gpt(text, notes):
    client = OpenAI()
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": f"Представь, что ты секретарь в крупной компании, и тебе дали задачу прорезюмировать сегодняшнюю встречу. Для этого тебе дали следующий текст: {text}. При составлении используй следующие пожелания руководства: {notes}"
            }
        ]
    )
    return completion.choices[0].message

# Функция для создания документа в формате DOCX
async def create_doc_from_text(text, audio_path):
    filename = Path(audio_path).stem
    df = pd.read_csv(f"files/csv/{filename}/transcription.csv", sep=';', encoding='utf-8')

    doc = Document()
    formatted_texts = []
    current_speaker_id = -1

    for _, row in df.iterrows():
        speaker_id = int(row['speaker'].replace("SPEAKER_0", "")) + 1
        speaker = f"Спикер {speaker_id}:"
        start_time = await format_time(row['start'])
        end_time = await format_time(row['end'])

        if speaker_id != current_speaker_id:
            formatted_texts.append(f"{speaker}\n({start_time} - {end_time}) {row['text']}")
            current_speaker_id = speaker_id
        else:
            formatted_texts.append(f"({start_time} - {end_time}) {row['text']}")

    for line in formatted_texts:
        doc.add_paragraph(line)

    doc.save(f"files/text/{filename}/decryption.docx")

# Функция для форматирования времени
async def format_time(seconds):
    td = timedelta(seconds=seconds)
    minutes, seconds = divmod(td.total_seconds(), 60)
    return f"{int(minutes):02}:{int(seconds):02}"
