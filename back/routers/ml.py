# router_ml.py

from fastapi import APIRouter, HTTPException
from ml import diarize_transcript_audio
import os
from ml import *

router = APIRouter()

# Роут для диаризации и транскрипции
@router.get("/diarize/{id}")
def diarize(id:str):
    return  diarize_transcript_audio(id)
