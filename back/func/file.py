from sqlalchemy.orm import Session
from shemas.orm import FileOrm
from engines import sync_session

def get_file( file_id: str):
    return sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()

def create_file( file: FileOrm):
    sync_session.add(file)
    sync_session.commit()
    sync_session.refresh(file)
    return file

def delete_file( file_id: str):
    file = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    sync_session.delete(file)
    sync_session.commit()

def update_path( file_id: str, path: str):
    fil = sync_session.query(FileOrm).filter(FileOrm.id == file_id).first()
    fil.csv_path = path
    sync_session.commit()