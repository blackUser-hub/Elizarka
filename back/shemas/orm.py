from sqlalchemy.orm import Mapped, mapped_column
from engine import Base
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