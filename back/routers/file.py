from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from shemas.orm import FileOrm
from engines import sync_session
from pydantic import BaseModel

router = APIRouter()

class FileCreate(BaseModel):
    id: str
    csv_path: str

dict ={'id': '', 'name': '', 'tag': "", 'size':'', 'date':'', 'title': '', 'owner': '', "csv_path": ''}


@router.get("/file/{file_id}")
def get_file(file_id: str):
    file = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    if not file:
        raise HTTPException(status_code=404, detail="File not found")
    return {'id': file.id, 'name': file.name, 'tag': file.tag, 'size':file.size, 'date':file.date, 'title': file.title, 'owner': file.owner, "csv_path": file.csv_path}

@router.post("/file/")
def create_file(data):
    db_file = FileOrm(id=data['id'],
    name=data['name'],
    tag=data['tag'],
    size=data['size'],
    date=data['date'],
    title= data['title'],
    owner=data['owner'],
    csv_path=data['csv_path'])
    sync_session.add(db_file)
    sync_session.commit()
    sync_session.refresh(db_file)
    return {}

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
    
