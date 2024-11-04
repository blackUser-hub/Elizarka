from sqlalchemy.orm import Session
from shemas.orm import FileOrm

def get_file(db: Session, file_id: str):
    return db.query(FileOrm).filter(FileOrm.id == file_id).first()

def get_files(db: Session, skip: int = 0, limit: int = 10):
    return db.query(FileOrm).offset(skip).limit(limit).all()

def create_file(db: Session, file: FileOrm):
    db.add(file)
    db.commit()
    db.refresh(file)
    return file

def delete_file(db: Session, file_id: str):
    file = db.query(FileOrm).filter(FileOrm.id == file_id).first()
    db.delete(file)
    db.commit()