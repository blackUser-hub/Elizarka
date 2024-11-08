from fastapi import APIRouter, HTTPException, Depends, File, UploadFile
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from shemas.orm import FileOrm
from engines import sync_session
from pydantic import BaseModel
from pathlib import Path
from ml import *
router = APIRouter()

UPLOAD_DIR = Path("files/videos")
UPLOAD_DIR.mkdir(exist_ok=True)

class FileCreate(BaseModel):
    id: str
    csv_path: str

dicts={'id': '', 'name': '', 'tag': "", 'size':'', 'date':'', 'title': '', 'owner': '', "csv_path": ''}


@router.get("/file/{file_id}")
def get_file(file_id: str):
    file = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    if not file:
        raise HTTPException(status_code=404, detail="File not found")
    return { 'tex': file.text}


@router.delete("/file/{file_id}")
def delete_file(file_id: str):
    file = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    if not file:
        raise HTTPException(status_code=404, detail="File not found")
    sync_session.delete(file)
    sync_session.commit()
    return {"message": "File deleted successfully"}

@router.put("/file/{file_id}")
def update_path(file_id: str, path: str):
    file = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    if not file:
        raise HTTPException(status_code=404, detail="File not found")
    file.csv_path = path
    sync_session.commit()

    


@router.post("/upload/")
async def upload_video( user_id:str, date:str, notes:str, file: UploadFile = File(...)):
    file_location = UPLOAD_DIR / file.filename
    id = file.filename.split('.')[0]
    with open(file_location, "wb") as f:
        f.write(await file.read())
    db_file = FileOrm(id=id,
    notes=notes,
    owner_id=user_id,
    date=date,
    )
    sync_session.add(db_file)
    sync_session.commit()
    sync_session.refresh(db_file)
    return  diarize_transcript_audio(id)

