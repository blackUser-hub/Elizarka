# router_ml.py

from fastapi import APIRouter, HTTPException
from software.main import diarize_transcript_audio, get_text, create_doc_from_text
import os
from software.main import get_text_with_time
router = APIRouter()

# Роут для диаризации и транскрипции
@router.post("/diarize/")
async def diarize(audio_path: str, otchet_id: str):
    try:
        await diarize_transcript_audio(audio_path, otchet_id)
        return {"status": "success", "message": "Diarization and transcription completed."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Роут для получения транскрипта без временных меток
@router.get("/transcript/")
async def get_transcript(audio_path: str):
    try:
        transcript = await get_text(audio_path)
        return {"status": "success", "transcript": transcript} 
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Роут для получения транскрипта с временными метками
@router.get("/transcript-with-time/")
async def get_transcript_with_time(audio_path: str):
    try:
        transcript = await get_text_with_time(audio_path)
        return {"status": "success", "transcript": transcript}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Роут для создания документа (Word) из текста
@router.post("/create-doc/")
async def create_doc(audio_path: str, text: str):
    try:
        await create_doc_from_text(text, audio_path)
        return {"status": "success", "message": "Document created."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
