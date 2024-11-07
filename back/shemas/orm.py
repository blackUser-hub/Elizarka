from sqlalchemy.orm import Mapped, mapped_column
from engines import Base
from sqlalchemy import Table, Column, Integer, MetaData, String, ARRAY, func
import enum
import datetime



class UserOrm(Base):
    __tablename__ = 'Users'

    id: Mapped[str] = mapped_column(primary_key=True)

    inviter: Mapped[str] = mapped_column(String)
    invite_count: Mapped[int] = mapped_column(Integer)
    mail: Mapped[str] = mapped_column(String)
    phone: Mapped[str] = mapped_column(String)
    org_code: Mapped[str] = mapped_column(String,nullable=True)
    org_name: Mapped[str] = mapped_column(String, nullable=True)
    age: Mapped[int] = mapped_column(Integer)
    password: Mapped[str] = mapped_column(String)

class FileOrm(Base):
    __tablename__ = 'Files'
    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String)
    tag: Mapped[str] = mapped_column(String)
    size: Mapped[str] = mapped_column(String)
    date: Mapped[str] = mapped_column(String)
    title: Mapped[str] = mapped_column(String)
    owner: Mapped[str] = mapped_column(String)
    csv_path: Mapped[str] = mapped_column(String, nullable=True)